#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Building for Netlify deployment...');

// Create directories
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}
if (!fs.existsSync('dist/public')) {
  fs.mkdirSync('dist/public', { recursive: true });
}

// Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://calculatorsarcina.com/sitemap.xml`;

fs.writeFileSync('dist/public/robots.txt', robotsTxt);

// Create sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calculatorsarcina.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/calculator-sarcina</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/planificare-pensie</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/tipuri-pensii</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/legislatie-resurse</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://calculatorsarcina.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

fs.writeFileSync('dist/public/sitemap.xml', sitemapXml);

// Create main HTML file
const html = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Sarcina 2024 - Calculează Online Sarcina și Pensia Rapid și Corect</title>
    <meta name="description" content="Folosește cel mai precis calculator de sarcină și pensie online pentru România. Calculează data nașterii, săptămânile de gestație și estimează pensia viitoare conform legislației românești.">
    <meta name="keywords" content="calculator sarcina, calculator pensie, pensie romania, sarcina romania, data nasterii, estimare pensie, calculator gestatie, planificare pensie">
    <meta name="author" content="Calculator Sarcina">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    
    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://calculatorsarcina.com/">
    <meta property="og:title" content="Calculator Sarcina 2024 - Calculează Online Sarcina și Pensia">
    <meta property="og:description" content="Folosește cel mai precis calculator de sarcină și pensie online pentru România. Calculează data nașterii și estimează pensia viitoare.">
    <meta property="og:image" content="https://calculatorsarcina.com/assets/og-image.jpg">
    <meta property="og:site_name" content="Calculator Sarcina">
    <meta property="og:locale" content="ro_RO">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Calculator Sarcina 2024 - Calculează Online Sarcina și Pensia">
    <meta property="twitter:description" content="Folosește cel mai precis calculator de sarcină și pensie online pentru România.">
    <meta property="twitter:image" content="https://calculatorsarcina.com/assets/og-image.jpg">
    
    <link rel="canonical" href="https://calculatorsarcina.com/">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    
    <style>
        * { box-sizing: border-box; }
        
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
            overflow-x: hidden;
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
            transform: translateY(-2px);
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
            font-size: 1rem;
        }
        
        .btn-primary:hover {
            background: linear-gradient(135deg, #db2777 0%, #7c3aed 100%);
            transform: translateY(-1px);
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
            font-size: 1rem;
        }
        
        .btn-secondary:hover {
            background: linear-gradient(135deg, #059669 0%, #2563eb 100%);
            transform: translateY(-1px);
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
        
        .hidden { display: none; }
        
        .result-card {
            background: linear-gradient(135deg, #fdf4ff 0%, #f0f9ff 100%);
            border: 2px solid #e9d5ff;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .hero-badge {
            background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
            .container { padding: 0 0.5rem; }
            .card { padding: 1.5rem; }
            .hero-title { font-size: 2rem !important; }
            .hero-badges { flex-wrap: wrap; gap: 0.5rem; }
            nav { display: none !important; }
        }
        
        .hero-badges {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 64rem;
            margin: 0 auto;
            width: 100%;
            padding: 0 1rem;
        }
        
        .main-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
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
        <header style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 50;">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 64px;">
                <div style="display: flex; align-items: center;">
                    <h1 style="font-size: 1.25rem; font-weight: 700; background: linear-gradient(135deg, #ec4899, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0;">
                        Calculator Sarcina
                    </h1>
                </div>
                <nav style="display: flex; align-items: center; gap: 2rem;">
                    <a href="#pregnancy" style="color: #4b5563; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Calculator Sarcină</a>
                    <a href="#pension" style="color: #4b5563; text-decoration: none; font-weight: 500; transition: color 0.3s ease;">Calculator Pensie</a>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="gradient-bg">
            <div class="main-container" style="padding: 4rem 1rem;">
                <!-- Hero Section -->
                <div style="text-align: center; margin-bottom: 4rem;">
                    <div class="hero-badge">Nou în 2024</div>
                    <h1 class="hero-title" style="font-size: 3rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem; line-height: 1.1;">
                        Calculator Sarcină și Pensie România
                    </h1>
                    <p style="font-size: 1.125rem; color: #4b5563; max-width: 48rem; margin: 0 auto 2rem auto;">
                        Folosește cel mai precis calculator online pentru a-ți calcula sarcina sau pentru a-ți estima pensia viitoare. 
                        Planifică-ți viitorul cu instrumentele noastre complete și actualizate conform legislației românești 2024.
                    </p>
                    <div class="hero-badges">
                        <span style="background: #dcfce7; color: #166534; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500;">✓ Calculatoare Precise</span>
                        <span style="background: #dbeafe; color: #1e40af; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500;">✓ Legislație 2024</span>
                        <span style="background: #fef3c7; color: #92400e; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500;">✓ Gratuit</span>
                    </div>
                </div>

                <!-- Calculator Cards -->
                <div class="card-grid">
                    <!-- Pregnancy Calculator -->
                    <div class="card">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div style="width: 3rem; height: 3rem; background: linear-gradient(135deg, #ec4899, #8b5cf6); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 1.5rem;">👶</span>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 0 0 0 1rem;">Calculator Sarcină</h2>
                        </div>
                        <p style="color: #4b5563; margin-bottom: 1.5rem;">
                            Calculează data nașterii, săptămânile de gestație și urmărește dezvoltarea sarcinii pas cu pas conform standardelor medicale românești.
                        </p>
                        <div style="margin-bottom: 2rem;">
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Data estimată a nașterii (DPN)
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Săptămâni și zile de gestație
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Etape dezvoltare fetală
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Trimestrele sarcinii
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
                            Estimează pensia viitoare conform legislației românești 2024 și planifică-ți viitorul financiar cu instrumentele noastre precise.
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
                            <div style="display: flex; align-items: center; margin-bottom: 1rem; font-size: 0.875rem; color: #4b5563;">
                                <span style="color: #10b981; margin-right: 0.5rem;">✓</span>
                                Legislație actualizată 2024
                            </div>
                        </div>
                        <button onclick="showCalculator('pension')" class="btn-secondary">
                            Calculează Pensia
                        </button>
                    </div>
                </div>

                <!-- Calculator Forms -->
                <div id="pregnancy-calculator" class="hidden" style="margin-top: 4rem; max-width: 32rem; margin-left: auto; margin-right: auto;">
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem; text-align: center;">
                            Calculator Sarcină 2024
                        </h3>
                        <form id="pregnancy-form">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Data ultimei menstruații (LMP)
                                </label>
                                <input type="date" name="lastPeriod" required class="form-input">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Lungimea ciclului menstrual (zile)
                                </label>
                                <input type="number" name="cycleLength" value="28" min="21" max="35" required class="form-input">
                            </div>
                            <button type="submit" class="btn-primary">
                                Calculează Sarcina
                            </button>
                        </form>
                        <div id="pregnancy-result" class="hidden"></div>
                    </div>
                </div>

                <div id="pension-calculator" class="hidden" style="margin-top: 4rem; max-width: 32rem; margin-left: auto; margin-right: auto;">
                    <div class="card">
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #1f2937; margin-bottom: 1.5rem; text-align: center;">
                            Calculator Pensie România 2024
                        </h3>
                        <form id="pension-form">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Vârsta actuală (ani)
                                </label>
                                <input type="number" name="age" min="18" max="70" required class="form-input" placeholder="Ex: 35">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Salariul lunar brut (RON)
                                </label>
                                <input type="number" name="salary" min="1000" required class="form-input" placeholder="Ex: 5000">
                            </div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">
                                    Ani de contribuție până acum
                                </label>
                                <input type="number" name="contributionYears" min="1" max="50" required class="form-input" placeholder="Ex: 15">
                            </div>
                            <button type="submit" class="btn-secondary">
                                Calculează Pensia
                            </button>
                        </form>
                        <div id="pension-result" class="hidden"></div>
                    </div>
                </div>

                <!-- Features Section -->
                <div style="margin-top: 6rem; text-align: center;">
                    <h2 style="font-size: 2rem; font-weight: 700; color: #1f2937; margin-bottom: 3rem;">
                        De ce să alegi Calculator Sarcina?
                    </h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 48rem; margin: 0 auto;">
                        <div style="text-align: center;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #f3e8ff, #dbeafe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <span style="font-size: 1.5rem;">⚡</span>
                            </div>
                            <h3 style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Rapid și Precis</h3>
                            <p style="color: #4b5563; font-size: 0.875rem;">Rezultate în secunde cu algoritmi medicali validați</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #f3e8ff, #dbeafe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <span style="font-size: 1.5rem;">🇷🇴</span>
                            </div>
                            <h3 style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Pentru România</h3>
                            <p style="color: #4b5563; font-size: 0.875rem;">Conform legislației românești actualizate 2024</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #f3e8ff, #dbeafe); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                                <span style="font-size: 1.5rem;">🔒</span>
                            </div>
                            <h3 style="font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Securitate Totală</h3>
                            <p style="color: #4b5563; font-size: 0.875rem;">Datele tale personale sunt în siguranță</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); color: white; padding: 3rem 0;">
            <div class="container">
                <div style="text-align: center;">
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Calculator Sarcina</h3>
                    <p style="color: #d1d5db; margin-bottom: 2rem;">
                        Instrumentele tale de încredere pentru calcularea sarcinii și pensiei în România
                    </p>
                    <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
                        <a href="#privacy" style="color: #d1d5db; text-decoration: none; font-size: 0.875rem;">Politica de Confidențialitate</a>
                        <a href="#terms" style="color: #d1d5db; text-decoration: none; font-size: 0.875rem;">Termeni și Condiții</a>
                        <a href="#contact" style="color: #d1d5db; text-decoration: none; font-size: 0.875rem;">Contact</a>
                    </div>
                    <p style="color: #9ca3af; font-size: 0.875rem; margin: 0;">
                        © 2024 Calculator Sarcina. Toate drepturile rezervate.
                    </p>
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
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Pregnancy calculator
        document.getElementById('pregnancy-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const lastPeriod = new Date(formData.get('lastPeriod'));
            const cycleLength = parseInt(formData.get('cycleLength'));
            
            // Calculate due date (280 days from LMP)
            const dueDate = new Date(lastPeriod);
            dueDate.setDate(dueDate.getDate() + 280);
            
            // Calculate current week
            const today = new Date();
            const daysDiff = Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24));
            const weeks = Math.floor(daysDiff / 7);
            const days = daysDiff % 7;
            
            // Calculate days remaining
            const daysRemaining = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
            
            // Determine trimester
            let trimester;
            if (weeks <= 12) trimester = 1;
            else if (weeks <= 28) trimester = 2;
            else trimester = 3;
            
            const resultDiv = document.getElementById('pregnancy-result');
            resultDiv.innerHTML = '<div class="result-card">' +
                '<h4 style="color: #1f2937; font-weight: 700; margin-bottom: 1rem;">Rezultatele calculului de sarcină:</h4>' +
                '<div style="display: grid; gap: 1rem;">' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Data estimată a nașterii:</span><span style="color: #ec4899; font-weight: 600;">' + dueDate.toLocaleDateString('ro-RO') + '</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Săptămâni de gestație:</span><span style="color: #8b5cf6; font-weight: 600;">' + weeks + ' săptămâni, ' + days + ' zile</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Trimestrul:</span><span style="color: #10b981; font-weight: 600;">' + trimester + '</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Zile rămase:</span><span style="color: #f59e0b; font-weight: 600;">' + Math.max(0, daysRemaining) + ' zile</span></div>' +
                '</div>' +
            '</div>';
            resultDiv.classList.remove('hidden');
        });

        // Pension calculator
        document.getElementById('pension-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const age = parseInt(formData.get('age'));
            const salary = parseInt(formData.get('salary'));
            const contributionYears = parseInt(formData.get('contributionYears'));
            
            // Romanian pension calculation (simplified)
            const averageSalary = 6500; // Estimated average salary for 2024
            const pensionPoint = 1785; // Value of pension point in 2024
            const salaryRatio = Math.min(salary / averageSalary, 5); // Max 5x average
            const points = contributionYears * salaryRatio * 0.75; // Contribution coefficient
            const estimatedPension = Math.round(points * pensionPoint);
            
            // Retirement age (simplified)
            const retirementAge = 65;
            const yearsToRetirement = Math.max(0, retirementAge - age);
            
            const resultDiv = document.getElementById('pension-result');
            resultDiv.innerHTML = '<div class="result-card">' +
                '<h4 style="color: #1f2937; font-weight: 700; margin-bottom: 1rem;">Rezultatele calculului de pensie:</h4>' +
                '<div style="display: grid; gap: 1rem;">' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Pensia estimată:</span><span style="color: #10b981; font-weight: 600; font-size: 1.125rem;">' + estimatedPension.toLocaleString('ro-RO') + ' RON</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Puncte de pensie:</span><span style="color: #3b82f6; font-weight: 600;">' + points.toFixed(2) + '</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Ani până la pensie:</span><span style="color: #f59e0b; font-weight: 600;">' + yearsToRetirement + ' ani</span></div>' +
                    '<div style="display: flex; justify-content: space-between;"><span style="font-weight: 500;">Vârsta de pensionare:</span><span style="color: #8b5cf6; font-weight: 600;">' + retirementAge + ' ani</span></div>' +
                '</div>' +
                '<p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">* Calculul este estimativ și se bazează pe legislația actuală</p>' +
            '</div>';
            resultDiv.classList.remove('hidden');
        });
    </script>
</body>
</html>`;

fs.writeFileSync('dist/public/index.html', html);

console.log('✓ Static site built successfully!');
console.log('✓ Files created in dist/public/');
console.log('  - index.html (main page with embedded calculators)');
console.log('  - robots.txt (SEO optimization)');
console.log('  - sitemap.xml (search engine sitemap)');
console.log('✓ Ready for Netlify deployment!');