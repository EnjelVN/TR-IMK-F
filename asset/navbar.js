

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


function loadAllComponents() {
    const components = document.querySelectorAll('[data-component]');
    
    components.forEach(element => {
        const componentPath = element.getAttribute('data-component');
        loadComponent(componentPath, element.id);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadAllComponents();
});
