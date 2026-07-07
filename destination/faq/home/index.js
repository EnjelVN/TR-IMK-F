// Destination Data
        const destinationData = {
            Asia: ['Bangkok, Thailand', 'Tokyo, Japan', 'Singapore', 'Bali, Indonesia', 'Phuket, Thailand'],
            Europe: ['Paris, France', 'London, UK', 'Rome, Italy', 'Barcelona, Spain', 'Amsterdam, Netherlands'],
            Africa: ['Cairo, Egypt', 'Marrakech, Morocco', 'Cape Town, South Africa', 'Nairobi, Kenya', 'Zanzibar, Tanzania'],
            America: ['New York, USA', 'Los Angeles, USA', 'Cancun, Mexico', 'Toronto, Canada', 'Buenos Aires, Argentina'],
            Australia: ['Sydney, Australia', 'Melbourne, Australia', 'Auckland, New Zealand', 'Fiji Islands', 'Bora Bora, Polynesia']
        };

        document.addEventListener('DOMContentLoaded', () => {
            // --- DESTINATION MODAL SETUP ---
            const destinationInput = document.querySelector('.destination-input');
            const destinationModal = document.getElementById('destinationModal');
            const modalClose = document.getElementById('modalClose');
            const regionStep = document.getElementById('regionStep');
            const destinationStep = document.getElementById('destinationStep');
            const regionButtons = document.querySelectorAll('.region-btn');
            const destinationsGrid = document.getElementById('destinationsGrid');

            // Open modal saat input diklik
            destinationInput.addEventListener('click', () => {
                destinationModal.classList.add('active');
                regionStep.style.display = 'block';
                destinationStep.style.display = 'none';
            });

            // Close modal
            modalClose.addEventListener('click', () => {
                destinationModal.classList.remove('active');
            });

            destinationModal.addEventListener('click', (e) => {
                if (e.target === destinationModal) {
                    destinationModal.classList.remove('active');
                }
            });

            // Function untuk handle region selection
            function selectRegion(region) {
                // Populate destinations
                destinationsGrid.innerHTML = '';
                destinationData[region].forEach(dest => {
                    const destBtn = document.createElement('button');
                    destBtn.className = 'destination-option';
                    destBtn.textContent = dest;
                    destBtn.addEventListener('click', () => {
                        destinationInput.value = dest;
                        // Close modal setelah memilih destinasi
                        destinationModal.classList.remove('active');
                    });
                    destinationsGrid.appendChild(destBtn);
                });

                regionStep.style.display = 'none';
                destinationStep.style.display = 'block';
            }

            // Region button click di langkah pertama
            regionButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const region = btn.dataset.region;
                    selectRegion(region);
                });
            });

            // Region button click di langkah kedua (destination step)
            destinationStep.addEventListener('click', (e) => {
                if (e.target.classList.contains('region-btn')) {
                    const region = e.target.dataset.region;
                    selectRegion(region);
                }
            });

            // Back button - REMOVED (region buttons tetap terlihat)
            
            // --- DEPARTURE DATE PICKER AUTO-OPEN ---
            const dateInputs = document.querySelectorAll('input[type="date"]');
            dateInputs.forEach(input => {
                // Klik pada input group wrapper akan trigger date picker
                const wrapper = input.closest('.widget-input-group');
                if (wrapper) {
                    wrapper.addEventListener('click', (e) => {
                        // Jika yang di-klik bukan ikon, trigger date picker
                        if (!e.target.classList.contains('fa-calendar') && 
                            !e.target.classList.contains('fa-calendar-check')) {
                            input.showPicker ? input.showPicker() : input.click();
                        }
                    });
                }
            });

            // --- TRIP TYPE TOGGLE ---
            const tripTabs = document.querySelectorAll('.trip-tab');
            const inputsContainer = document.querySelector('.widget-inputs-container');
            
            tripTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tripTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    const existingReturnDate = inputsContainer.querySelector('.return-date-field');
                    
                    if (this.dataset.trip === 'roundtrip') {
                        // Tambah Return Date field jika belum ada
                        if (!existingReturnDate) {
                            const returnDateHTML = `
                                <div class="widget-input-group d-flex align-items-center gap-2 return-date-field">
                                    <i class="far fa-calendar-check text-primary"></i>
                                    <div style="flex: 1;">
                                        <label>Return Date</label>
                                        <input type="date" placeholder="mm/dd/yyyy">
                                    </div>
                                </div>
                            `;
                            inputsContainer.insertAdjacentHTML('beforeend', returnDateHTML);
                            
                            // Apply auto-open date picker ke return date field yang baru dibuat
                            const newDateInput = inputsContainer.querySelector('.return-date-field input[type="date"]');
                            const newWrapper = newDateInput.closest('.widget-input-group');
                            if (newWrapper) {
                                newWrapper.addEventListener('click', (e) => {
                                    if (!e.target.classList.contains('fa-calendar') && 
                                        !e.target.classList.contains('fa-calendar-check')) {
                                        newDateInput.showPicker ? newDateInput.showPicker() : newDateInput.click();
                                    }
                                });
                            }
                        }
                    } else {
                        // Hapus Return Date field dengan animasi
                        if (existingReturnDate) {
                            existingReturnDate.classList.add('fade-out');
                            setTimeout(() => {
                                existingReturnDate.remove();
                            }, 300);
                        }
                    }
                });
            });

            // Widget Tabs (Flight vs Stays) Toggle
            const widgetTabs = document.querySelectorAll('.widget-tabs button:not(.trip-tab)');
            widgetTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    widgetTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
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

