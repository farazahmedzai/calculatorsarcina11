#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('Creating simple static build for Netlify...');

// Create directories
fs.mkdirSync('dist/public', { recursive: true });

// Create a simple working HTML page
const html = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Sarcina 2024 - Calculează Online Pensia Rapid și Corect</title>
    <meta name="description" content="Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.">
    <meta name="keywords" content="calculator sarcina, calculator pensie, pensie romania, sarcina romania, data nasterii, estimare pensie">
    <meta name="author" content="Calculator Sarcina">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://calculatorsarcina.com/">
    <meta property="og:title" content="Calculator Sarcina 2024 - Calculează Online Pensia Rapid și Corect">
    <meta property="og:description" content="Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.">
    <meta property="og:image" content="https://calculatorsarcina.com/assets/og-image.jpg">
    <meta property="og:site_name" content="Calculator Sarcina">
    <meta property="og:locale" content="ro_RO">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Calculator Sarcina 2024 - Calculează Online Pensia Rapid și Corect">
    <meta property="twitter:description" content="Folosește cel mai precis calculator de pensie online pentru a-ți estima venitul la bătrânețe. Planifică-ți viitorul financiar cu instrumentele și ghidurile noastre complete.">
    <meta property="twitter:image" content="https://calculatorsarcina.com/assets/og-image.jpg">
    
    <link rel="canonical" href="https://calculatorsarcina.com/">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            line-height: 1.5;
            color: #1f2937;
            background-color: #ffffff;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #f3e8ff 0%, #dbeafe 50%, #e0e7ff 100%);
            min-height: 100vh;
        }
        
        .card {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border: 1px solid #e5e7eb;
            padding: 2rem;
            transition: all 0.3s ease;
        }
        
        .card:hover {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
        }
        
        .btn-primary:hover {
            background: linear-gradient(135deg, #db2777 0%, #7c3aed 100%);
        }
        
        .btn-secondary {
            background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.75rem;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
        }
        
        .btn-secondary:hover {
            background: linear-gradient(135deg, #059669 0%, #2563eb 100%);
        }
        
        .form-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 2px solid #d1d5db;
            border-radius: 0.5rem;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #8b5cf6;
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }
        
        .hidden {
            display: none;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 0 0.5rem;
            }
            
            .card {
                padding: 1.5rem;
            }
        }
    </style>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Calculator Sarcina",
        "url": "https://calculatorsarcina.com",
        "description": "Calculator online pentru sarcină și pensie în România",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://calculatorsarcina.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }
    </script>
</head>
<body>
    <div id="root">
        <!-- Header -->
        <header style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-bottom: 1px solid #e5e7eb;">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
                <div style="display: flex; align-items: center;">
                    <h1 style="font-size: 1.25rem; font-weight: 700; color: #1f2937; margin: 0;">Calculator Sarcina</h1>
                </div>
                <nav style="display: none;">
                    <a href="/" style="color: #4b5563; text-decoration: none; font-weight: 500; margin-right: 2rem;">Acasă</a>
                    <a href="#pregnancy" style="color: #4b5563; text-decoration: none; font-weight: 500; margin-right: 2rem;">Calculator Sarcină</a>
                    <a href="#pension" style="color: #4b5563; text-decoration: none; font-weight: 500;">Calculator Pensie</a>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="gradient-bg">
            <div class="container" style="padding: 3rem 1rem;">
                <!-- Hero Section -->
                <div style="text-align: center; margin-bottom: 4rem;">
                    <h1 style="font-size: 3rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem; line-height: 1.1;">
                        Calculator Sarcină și Pensie
                    </h1>
                    <p style="font-size: 1.125rem; color: #4b5563; max-width: 48rem; margin: 0 auto 2rem auto;">
                        Folosește cel mai precis calculator online pentru a-ți calcula sarcina sau pentru a-ți estima pensia viitoare. 
                        Planifică-ți viitorul cu instrumentele noastre complete și actualizate conform legislației românești.
                    </p>
                </div>

                <!-- Calculator Cards -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 64rem; margin: 0 auto;">
                    <!-- Pregnancy Calculator -->
                    <div class="card">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #ec4899, #8b5cf6); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 1.5rem;">❤️</span>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 0 0 0 1rem;">Calculator Sarcină</h2>
                        </div>
                        <p style="color: #4b5563; margin-bottom: 1.5rem;">
                            Calculează data nașterii, săptămânile de gestație și urmărește dezvoltarea sarcinii pas cu pas.
                        </p>
                        <div style="margin-bottom: 2rem;">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Data estimată a nașterii
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Săptămâni și zile de gestație
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Etape dezvoltare fetală
                            </div>
                        </div>
                        <button onclick="showCalculator('pregnancy')" class="btn-primary">
                            Calculează Sarcina
                        </button>
                    </div>

                    <!-- Pension Calculator -->
                    <div class="card">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #10b981, #3b82f6); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 1.5rem;">💰</span>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 0 0 0 1rem;">Calculator Pensie</h2>
                        </div>
                        <p style="color: #4b5563; margin-bottom: 1.5rem;">
                            Estimează pensia viitoare conform legislației românești și planifică-ți viitorul financiar.
                        </p>
                        <div style="margin-bottom: 2rem;">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Estimare pensie stagiu complet
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Calculul Pilonul I și II
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Planificare financiară
                            </div>
                        </div>
                        <button onclick="showCalculator('pension')" class="btn-secondary">
                            Calculează Pensia
                        </button>
                    </div>
                </div>

                <!-- Calculator Forms (Hidden by default) -->
                <div id="pregnancy-calculator" class="hidden" style="margin-top: 4rem; max-width: 32rem; margin-left: auto; margin-right: auto;">
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem;">Calculator Sarcină</h3>
                        <form id="pregnancy-form">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Data ultimei menstruații
                                </label>
                                <input type="date" name="lastPeriod" required class="form-input">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Lungimea ciclului (zile)
                                </label>
                                <input type="number" name="cycleLength" value="28" min="21" max="35" required class="form-input">
                            </div>
                            <button type="submit" class="btn-primary">
                                Calculează
                            </button>
                        </form>
                        <div id="pregnancy-result" class="hidden" style="margin-top: 1.5rem; padding: 1rem; background-color: #faf5ff; border-radius: 0.5rem; border: 1px solid #e9d5ff;"></div>
                    </div>
                </div>

                <div id="pension-calculator" class="hidden" style="margin-top: 4rem; max-width: 32rem; margin-left: auto; margin-right: auto;">
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem;">Calculator Pensie</h3>
                        <form id="pension-form">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Vârsta actuală
                                </label>
                                <input type="number" name="age" min="18" max="70" required class="form-input">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Salariul lunar brut (RON)
                                </label>
                                <input type="number" name="salary" min="1000" required class="form-input">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Ani de contribuție
                                </label>
                                <input type="number" name="contributionYears" min="1" max="50" required class="form-input">
                            </div>
                            <button type="submit" class="btn-secondary">
                                Calculează
                            </button>
                        </form>
                        <div id="pension-result" class="hidden" style="margin-top: 1.5rem; padding: 1rem; background-color: #eff6ff; border-radius: 0.5rem; border: 1px solid #dbeafe;"></div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer style="background-color: #111827; color: white; padding: 3rem 0;">
            <div class="container">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                    <div>
                        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;">Calculator Sarcina</h3>
                        <p style="color: #9ca3af;">
                            Instrumentele tale pentru calculul sarcinii și estimarea pensiei în România.
                        </p>
                    </div>
                    <div>
                        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;">Linkuri Utile</h3>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 0.5rem;"><a href="/" style="color: #9ca3af; text-decoration: none;">Acasă</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#pregnancy" style="color: #9ca3af; text-decoration: none;">Calculator Sarcină</a></li>
                            <li style="margin-bottom: 0.5rem;"><a href="#pension" style="color: #9ca3af; text-decoration: none;">Calculator Pensie</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;">Contact</h3>
                        <p style="color: #9ca3af;">
                            Pentru întrebări și sugestii, ne poți contacta prin intermediul formularului de pe site.
                        </p>
                    </div>
                </div>
                <div style="border-top: 1px solid #374151; margin-top: 2rem; padding-top: 2rem; text-align: center; color: #9ca3af;">
                    <p>&copy; 2024 Calculator Sarcina. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    </div>

    <script>
        function showCalculator(type) {
            // Hide all calculators
            document.getElementById('pregnancy-calculator').classList.add('hidden');
            document.getElementById('pension-calculator').classList.add('hidden');
            
            // Show selected calculator
            document.getElementById(type + '-calculator').classList.remove('hidden');
            
            // Scroll to calculator
            document.getElementById(type + '-calculator').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Pregnancy calculator
        document.getElementById('pregnancy-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const lastPeriod = new Date(formData.get('lastPeriod'));
            const cycleLength = parseInt(formData.get('cycleLength'));
            
            // Calculate due date (280 days from LMP)
            const dueDate = new Date(lastPeriod);
            dueDate.setDate(dueDate.getDate() + 280);
            
            // Calculate current week
            const today = new Date();
            const daysSinceLMP = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24));
            const currentWeek = Math.floor(daysSinceLMP / 7);
            const currentDay = daysSinceLMP % 7;
            
            // Calculate days remaining
            const daysRemaining = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
            
            const result = document.getElementById('pregnancy-result');
            result.innerHTML = \`
                <h4 class="font-semibold text-gray-900 mb-3">Rezultatul calculului:</h4>
                <div class="space-y-2">
                    <p><strong>Data estimată a nașterii:</strong> \${dueDate.toLocaleDateString('ro-RO')}</p>
                    <p><strong>Săptămâna actuală:</strong> \${currentWeek} săptămâni și \${currentDay} zile</p>
                    <p><strong>Zile rămase:</strong> \${daysRemaining > 0 ? daysRemaining + ' zile' : 'Depășită termenul'}</p>
                    <p><strong>Trimestrul:</strong> \${currentWeek <= 12 ? 'I' : currentWeek <= 28 ? 'II' : 'III'}</p>
                </div>
            \`;
            result.classList.remove('hidden');
        });

        // Pension calculator
        document.getElementById('pension-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const age = parseInt(formData.get('age'));
            const salary = parseInt(formData.get('salary'));
            const contributionYears = parseInt(formData.get('contributionYears'));
            
            // Simple pension calculation (simplified formula)
            const avgSalary = salary * 0.75; // Assumption: 75% of current salary as average
            const pensionPoints = (avgSalary / 1000) * contributionYears; // Simplified
            const estimatedPension = Math.min(pensionPoints * 45, salary * 0.85); // Cap at 85% of salary
            
            const result = document.getElementById('pension-result');
            result.innerHTML = \`
                <h4 class="font-semibold text-gray-900 mb-3">Estimarea pensiei:</h4>
                <div class="space-y-2">
                    <p><strong>Pensia estimată:</strong> \${Math.round(estimatedPension)} RON/lună</p>
                    <p><strong>Puncte de pensie estimate:</strong> \${Math.round(pensionPoints)}</p>
                    <p><strong>Vârsta de pensionare:</strong> \${age < 65 ? '65 ani' : 'Eligibil acum'}</p>
                    <p class="text-sm text-gray-600 mt-3">
                        <em>Aceasta este o estimare simplificată. Pentru calcule exacte, consultați un specialist în pensii.</em>
                    </p>
                </div>
            \`;
            result.classList.remove('hidden');
        });
    </script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync('dist/public/index.html', html);

// Copy static files if they exist
if (fs.existsSync('public')) {
    const files = ['robots.txt', 'sitemap.xml', 'manifest.json'];
    files.forEach(file => {
        const src = `public/${file}`;
        const dest = `dist/public/${file}`;
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
        }
    });
}

// Create _redirects for SPA routing
const redirects = `/* /index.html 200`;
fs.writeFileSync('dist/public/_redirects', redirects);

console.log('Simple static build completed successfully!');
console.log('Created working static website for Netlify deployment');