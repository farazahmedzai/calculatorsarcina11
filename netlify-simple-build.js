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
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif']
                    }
                }
            }
        }
    </script>
    
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
<body class="font-sans antialiased">
    <div id="root">
        <!-- Header -->
        <header class="bg-white shadow-sm border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-bold text-gray-900">Calculator Sarcina</h1>
                    </div>
                    <nav class="hidden md:flex space-x-8">
                        <a href="/" class="text-gray-700 hover:text-purple-600 font-medium">Acasă</a>
                        <a href="/calculator-sarcina" class="text-gray-700 hover:text-purple-600 font-medium">Calculator Sarcină</a>
                        <a href="/planificare-pensie" class="text-gray-700 hover:text-purple-600 font-medium">Calculator Pensie</a>
                    </nav>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <!-- Hero Section -->
                <div class="text-center mb-16">
                    <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Calculator Sarcină și Pensie
                    </h1>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Folosește cel mai precis calculator online pentru a-ți calcula sarcina sau pentru a-ți estima pensia viitoare. 
                        Planifică-ți viitorul cu instrumentele noastre complete și actualizate conform legislației românești.
                    </p>
                </div>

                <!-- Calculator Cards -->
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <!-- Pregnancy Calculator -->
                    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 ml-4">Calculator Sarcină</h2>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Calculează data nașterii, săptămânile de gestație și urmărește dezvoltarea sarcinii pas cu pas.
                        </p>
                        <div class="space-y-4 mb-8">
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Data estimată a nașterii
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Săptămâni și zile de gestație
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Etape dezvoltare fetală
                            </div>
                        </div>
                        <button onclick="showCalculator('pregnancy')" class="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                            Calculează Sarcina
                        </button>
                    </div>

                    <!-- Pension Calculator -->
                    <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 ml-4">Calculator Pensie</h2>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Estimează pensia viitoare conform legislației românești și planifică-ți viitorul financiar.
                        </p>
                        <div class="space-y-4 mb-8">
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Estimare pensie stagiu complet
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Calculul Pilonul I și II
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                Planificare financiară
                            </div>
                        </div>
                        <button onclick="showCalculator('pension')" class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                            Calculează Pensia
                        </button>
                    </div>
                </div>

                <!-- Calculator Forms (Hidden by default) -->
                <div id="pregnancy-calculator" class="hidden mt-16 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Calculator Sarcină</h3>
                    <form id="pregnancy-form" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Data ultimei menstruații
                            </label>
                            <input type="date" name="lastPeriod" required 
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Lungimea ciclului (zile)
                            </label>
                            <input type="number" name="cycleLength" value="28" min="21" max="35" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        </div>
                        <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                            Calculează
                        </button>
                    </form>
                    <div id="pregnancy-result" class="hidden mt-6 p-4 bg-purple-50 rounded-lg"></div>
                </div>

                <div id="pension-calculator" class="hidden mt-16 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Calculator Pensie</h3>
                    <form id="pension-form" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Vârsta actuală
                            </label>
                            <input type="number" name="age" min="18" max="70" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Salariul lunar brut (RON)
                            </label>
                            <input type="number" name="salary" min="1000" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Ani de contribuție
                            </label>
                            <input type="number" name="contributionYears" min="1" max="50" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                            Calculează
                        </button>
                    </form>
                    <div id="pension-result" class="hidden mt-6 p-4 bg-blue-50 rounded-lg"></div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Calculator Sarcina</h3>
                        <p class="text-gray-400">
                            Instrumentele tale pentru calculul sarcinii și estimarea pensiei în România.
                        </p>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Linkuri Utile</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="/" class="hover:text-white">Acasă</a></li>
                            <li><a href="/calculator-sarcina" class="hover:text-white">Calculator Sarcină</a></li>
                            <li><a href="/planificare-pensie" class="hover:text-white">Calculator Pensie</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Contact</h3>
                        <p class="text-gray-400">
                            Pentru întrebări și sugestii, ne poți contacta prin intermediul formularului de pe site.
                        </p>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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