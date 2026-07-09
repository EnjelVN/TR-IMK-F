/* ==========================================
   COMPONENT LOADER - JavaScript
   File: asset/navbar.js (Bisa kamu rename jadi components.js jika mau)
   ========================================== */

function loadComponent(componentPath, targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) {
        console.error(`Target element with ID "${targetId}" not found.`);
        return;
    }

    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
            
            /* DI SINI KUNCINYA:
               Kita cek, jika ID kontainernya adalah 'navbar-container', 
               baru jalankan fungsi active link. Kalau footer, abaikan saja.
            */
            if (targetId === 'navbar-container') {
                setActiveNavLink();
            }
            
            if (callback && typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            target.innerHTML = `<p style="color:red;">Error loading component: ${error.message}</p>`;
        });
}

/**
 * Set active class pada nav link (Hanya untuk Navbar)
 */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (!href) return;
        
        if (currentPath.endsWith(href) || 
            currentPath === href || 
            currentPath === '/' + href) {
            
            link.classList.add('active');
        }
    });
}

/**
 * Mendeteksi semua tag HTML yang punya atribut [data-component]
 */
function loadAllComponents() {
    const components = document.querySelectorAll('[data-component]');
    
    components.forEach(element => {
        const componentPath = element.getAttribute('data-component');
        loadComponent(componentPath, element.id);
    });
}

// Jalankan otomatis
document.addEventListener('DOMContentLoaded', function() {
    loadAllComponents();
});