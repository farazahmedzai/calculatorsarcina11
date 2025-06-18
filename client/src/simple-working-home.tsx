import { useState } from "react";

export default function SimpleWorkingHome() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [pregnancyResult, setPregnancyResult] = useState<string>("");
  const [pensionResult, setPensionResult] = useState<string>("");

  const calculatePregnancy = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const lastPeriod = new Date(formData.get('lastPeriod') as string);
    const cycleLength = parseInt(formData.get('cycleLength') as string);
    
    // Calculate due date (280 days from LMP)
    const dueDate = new Date(lastPeriod);
    dueDate.setDate(dueDate.getDate() + 280);
    
    // Calculate current week
    const today = new Date();
    const daysSinceLMP = Math.floor((today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(daysSinceLMP / 7);
    const currentDay = daysSinceLMP % 7;
    
    // Calculate days remaining
    const daysRemaining = Math.floor((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    setPregnancyResult(`
      Data estimată a nașterii: ${dueDate.toLocaleDateString('ro-RO')}
      Săptămâna actuală: ${currentWeek} săptămâni și ${currentDay} zile
      Zile rămase: ${daysRemaining > 0 ? daysRemaining + ' zile' : 'Depășită termenul'}
      Trimestrul: ${currentWeek <= 12 ? 'I' : currentWeek <= 28 ? 'II' : 'III'}
    `);
  };

  const calculatePension = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const age = parseInt(formData.get('age') as string);
    const salary = parseInt(formData.get('salary') as string);
    const contributionYears = parseInt(formData.get('contributionYears') as string);
    
    // Simple pension calculation (simplified formula)
    const avgSalary = salary * 0.75; // Assumption: 75% of current salary as average
    const pensionPoints = (avgSalary / 1000) * contributionYears; // Simplified
    const estimatedPension = Math.min(pensionPoints * 45, salary * 0.85); // Cap at 85% of salary
    
    setPensionResult(`
      Pensia estimată: ${Math.round(estimatedPension)} RON/lună
      Puncte de pensie estimate: ${Math.round(pensionPoints)}
      Vârsta de pensionare: ${age < 65 ? '65 ani' : 'Eligibil acum'}
      Aceasta este o estimare simplificată. Pentru calcule exacte, consultați un specialist în pensii.
    `);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f3e8ff 0%, #dbeafe 50%, #e0e7ff 100%)',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {/* Header */}
      <header style={{ 
        background: 'white', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
        borderBottom: '1px solid #e5e7eb' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '64px' 
        }}>
          <h1 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            color: '#1f2937', 
            margin: '0' 
          }}>
            Calculator Sarcina
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '700', 
              color: '#1f2937', 
              marginBottom: '1.5rem', 
              lineHeight: '1.1' 
            }}>
              Calculator Sarcină și Pensie
            </h1>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#4b5563', 
              maxWidth: '48rem', 
              margin: '0 auto 2rem auto' 
            }}>
              Folosește cel mai precis calculator online pentru a-ți calcula sarcina sau pentru a-ți estima pensia viitoare. 
              Planifică-ți viitorul cu instrumentele noastre complete și actualizate conform legislației românești.
            </p>
          </div>

          {/* Calculator Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            maxWidth: '64rem', 
            margin: '0 auto' 
          }}>
            {/* Pregnancy Calculator */}
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e5e7eb',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '1.5rem' }}>❤️</span>
                </div>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  margin: '0 0 0 1rem' 
                }}>
                  Calculator Sarcină
                </h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                Calculează data nașterii, săptămânile de gestație și urmărește dezvoltarea sarcinii pas cu pas.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Data estimată a nașterii
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Săptămâni și zile de gestație
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Etape dezvoltare fetală
                </div>
              </div>
              <button
                onClick={() => setActiveCalculator(activeCalculator === 'pregnancy' ? null : 'pregnancy')}
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                {activeCalculator === 'pregnancy' ? 'Închide' : 'Calculează Sarcina'}
              </button>
            </div>

            {/* Pension Calculator */}
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e5e7eb',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: 'white', fontSize: '1.5rem' }}>💰</span>
                </div>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  margin: '0 0 0 1rem' 
                }}>
                  Calculator Pensie
                </h2>
              </div>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                Estimează pensia viitoare conform legislației românești și planifică-ți viitorul financiar.
              </p>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Estimare pensie stagiu complet
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Calculul Pilonul I și II
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#4b5563' 
                }}>
                  <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                  Planificare financiară
                </div>
              </div>
              <button
                onClick={() => setActiveCalculator(activeCalculator === 'pension' ? null : 'pension')}
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                {activeCalculator === 'pension' ? 'Închide' : 'Calculează Pensia'}
              </button>
            </div>
          </div>

          {/* Calculator Forms */}
          {activeCalculator === 'pregnancy' && (
            <div style={{ 
              marginTop: '4rem', 
              maxWidth: '32rem', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}>
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                padding: '2rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem' 
                }}>
                  Calculator Sarcină
                </h3>
                <form onSubmit={calculatePregnancy}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Data ultimei menstruații
                    </label>
                    <input 
                      type="date" 
                      name="lastPeriod" 
                      required 
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Lungimea ciclului (zile)
                    </label>
                    <input 
                      type="number" 
                      name="cycleLength" 
                      defaultValue="28" 
                      min="21" 
                      max="35" 
                      required 
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.75rem',
                      border: 'none',
                      fontWeight: '600',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Calculează
                  </button>
                </form>
                {pregnancyResult && (
                  <div style={{ 
                    marginTop: '1.5rem', 
                    padding: '1rem', 
                    backgroundColor: '#faf5ff', 
                    borderRadius: '0.5rem', 
                    border: '1px solid #e9d5ff',
                    whiteSpace: 'pre-line'
                  }}>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                      Rezultatul calculului:
                    </h4>
                    {pregnancyResult}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeCalculator === 'pension' && (
            <div style={{ 
              marginTop: '4rem', 
              maxWidth: '32rem', 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}>
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                padding: '2rem'
              }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#1f2937', 
                  marginBottom: '1.5rem' 
                }}>
                  Calculator Pensie
                </h3>
                <form onSubmit={calculatePension}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Vârsta actuală
                    </label>
                    <input 
                      type="number" 
                      name="age" 
                      min="18" 
                      max="70" 
                      required 
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Salariul lunar brut (RON)
                    </label>
                    <input 
                      type="number" 
                      name="salary" 
                      min="1000" 
                      required 
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ 
                      display: 'block', 
                      fontSize: '0.875rem', 
                      fontWeight: '500', 
                      color: '#374151', 
                      marginBottom: '0.5rem' 
                    }}>
                      Ani de contribuție
                    </label>
                    <input 
                      type="number" 
                      name="contributionYears" 
                      min="1" 
                      max="50" 
                      required 
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '2px solid #d1d5db',
                        borderRadius: '0.5rem',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.75rem',
                      border: 'none',
                      fontWeight: '600',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Calculează
                  </button>
                </form>
                {pensionResult && (
                  <div style={{ 
                    marginTop: '1.5rem', 
                    padding: '1rem', 
                    backgroundColor: '#eff6ff', 
                    borderRadius: '0.5rem', 
                    border: '1px solid #dbeafe',
                    whiteSpace: 'pre-line'
                  }}>
                    <h4 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                      Estimarea pensiei:
                    </h4>
                    {pensionResult}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Calculator Sarcina
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Instrumentele tale pentru calculul sarcinii și estimarea pensiei în România.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Linkuri Utile
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Acasă</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Calculator Sarcină</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Calculator Pensie</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                Contact
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Pentru întrebări și sugestii, ne poți contacta prin intermediul formularului de pe site.
              </p>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid #374151', 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            textAlign: 'center', 
            color: '#9ca3af' 
          }}>
            <p>&copy; 2024 Calculator Sarcina. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}