// JavaScript interaktivita pro webovou stránku

// Aktivní sekce v navigaci
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Odebrání aktivní třídy ze všech odkazů
            navLinks.forEach(l => l.style.borderBottom = 'none');
            
            // Přidání podtržení k aktuálnímu odkazu
            this.style.borderBottom = '2px solid white';
        });
    });
});

// Zvýraznění sekce při scrollování
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= top - 200 && scrollPosition < top + height - 200) {
            section.style.opacity = '1';
        }
    });
});

// Přidání interaktivity ke kódu - kopírování do schránky
document.querySelectorAll('.code-block').forEach(codeBlock => {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Kopírovat kód';
    copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 8px 12px;
        background: linear-gradient(135deg, #ff33cc 0%, #00ffff 100%);
        color: #0f0f1e;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        transition: all 0.3s ease;
        display: none;
        box-shadow: 0 0 10px rgba(255, 51, 204, 0.5);
    `;
    
    copyButton.addEventListener('mouseover', () => {
        copyButton.style.boxShadow = '0 0 20px rgba(255, 51, 204, 0.8)';
    });
    
    copyButton.addEventListener('mouseout', () => {
        copyButton.style.boxShadow = '0 0 10px rgba(255, 51, 204, 0.5)';
    });
    
    copyButton.addEventListener('click', function() {
        const codeText = codeBlock.querySelector('pre').textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            copyButton.textContent = 'Zkopírováno!';
            setTimeout(() => {
                copyButton.textContent = 'Kopírovat kód';
            }, 2000);
        });
    });
    
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyButton);
    
    // Zobrazit tlačítko při najetí myší
    codeBlock.addEventListener('mouseover', () => {
        copyButton.style.display = 'block';
    });
    
    codeBlock.addEventListener('mouseout', () => {
        copyButton.style.display = 'none';
    });
});

// Animace čísel ve flow diagramu
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.flow-item').forEach(item => {
    observer.observe(item);
});

// Dynamické zvýraznění tagů
document.querySelectorAll('.tag-list li').forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Smooth scroll pro navigační odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Interaktivní demo - změna barvy stránky
console.log('Webová stránka o základech webových technologií je načtena!');
console.log('Pro více informací otevřete DevTools (F12) a podívejte se na konzolu.');

// Kontrola podpory funkčnosti
if ('serviceWorker' in navigator) {
    console.log('Service Workers jsou podporovány!');
}

if ('localStorage' in window) {
    console.log('Local storage je k dispozici!');
}

// Sledování času tráveného na stránce
let timeOnPage = 0;
setInterval(() => {
    timeOnPage++;
    localStorage.setItem('timeOnPage', timeOnPage);
}, 1000);

// Vítání uživatele
window.addEventListener('load', () => {
    console.log('%c🎉 Vítejte na stránce o webových technologiích!', 'color: #ff33cc; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 51, 204, 0.8);');
    console.log('%cTato stránka demonstruje HTML, CSS a JavaScript v praxi.', 'color: #00ffff; font-size: 14px;');
});
