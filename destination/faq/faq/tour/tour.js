document.addEventListener('DOMContentLoaded', () => {
            // Heart Icon Toggle di Featured Tour Packages
            const heartIcons = document.querySelectorAll('.tour-card .fa-heart');
            heartIcons.forEach(heart => {
                heart.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (this.classList.contains('far')) {
                        this.classList.replace('far', 'fas');
                        this.style.color = '#ef4444'; // Merah
                    } else {
                        this.classList.replace('fas', 'far');
                        this.style.color = 'white';
                    }
                });
            });
        });

