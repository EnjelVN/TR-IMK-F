document.addEventListener('DOMContentLoaded', () => {
                        const tabLinks = document.querySelectorAll('.tab-menu a');
            tabLinks.forEach(link => {
                link.addEventListener('click', function() {
                    tabLinks.forEach(t => t.classList.remove('active-tab'));
                    this.classList.add('active-tab');
                });
            });

                        const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.filter-btn.active').classList.remove('active');
                    btn.classList.add('active');
                });
            });

                        const heartIcons = document.querySelectorAll('.heart-btn');
            heartIcons.forEach(heart => {
                heart.addEventListener('click', () => {
                    heart.classList.toggle('liked');
                    const icon = heart.querySelector('i');
                    if(heart.classList.contains('liked')) {
                        icon.className = 'fas fa-heart';
                    } else {
                        icon.className = 'far fa-heart';
                    }
                });
            });
        });


