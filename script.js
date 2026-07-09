        document.addEventListener('DOMContentLoaded', function () {
            // Data
            const destinations = {
                'Asia': ['Tokyo, Japan', 'Bali, Indonesia', 'Bangkok, Thailand', 'Seoul, South Korea', 'Singapore', 'Hong Kong'],
                'Europe': ['Paris, France', 'Rome, Italy', 'London, UK', 'Barcelona, Spain', 'Amsterdam, Netherlands', 'Prague, Czech Republic'],
                'Africa': ['Cairo, Egypt', 'Cape Town, South Africa', 'Marrakech, Morocco', 'Nairobi, Kenya', 'Lagos, Nigeria', 'Accra, Ghana'],
                'America': ['New York, USA', 'Los Angeles, USA', 'Toronto, Canada', 'Cancun, Mexico', 'Rio de Janeiro, Brazil', 'Buenos Aires, Argentina'],
                'Australia': ['Sydney, Australia', 'Melbourne, Australia', 'Auckland, New Zealand', 'Fiji', 'Brisbane, Australia', 'Perth, Australia'],
            };

            const origins = {
                'Asia': [
                    'Jakarta, Indonesia', 'Surabaya, Indonesia', 'Bali, Indonesia', 'Bandung, Indonesia',
                    'Kuala Lumpur, Malaysia', 'Penang, Malaysia', 'Singapore', 'Bangkok, Thailand',
                    'Chiang Mai, Thailand', 'Manila, Philippines', 'Cebu, Philippines', 'Hanoi, Vietnam',
                    'Ho Chi Minh City, Vietnam', 'New Delhi, India', 'Mumbai, India', 'Beijing, China',
                    'Shanghai, China', 'Hong Kong', 'Seoul, South Korea', 'Tokyo, Japan', 'Osaka, Japan'
                ],
                'Europe': [
                    'London, UK', 'Manchester, UK', 'Paris, France', 'Lyon, France', 'Berlin, Germany',
                    'Munich, Germany', 'Madrid, Spain', 'Barcelona, Spain', 'Rome, Italy', 'Milan, Italy',
                    'Amsterdam, Netherlands', 'Brussels, Belgium', 'Vienna, Austria', 'Zurich, Switzerland',
                    'Stockholm, Sweden', 'Oslo, Norway', 'Copenhagen, Denmark', 'Lisbon, Portugal',
                    'Prague, Czech Republic', 'Warsaw, Poland', 'Athens, Greece', 'Istanbul, Turkey'
                ],
                'Africa': [
                    'Johannesburg, South Africa', 'Cape Town, South Africa', 'Cairo, Egypt', 'Alexandria, Egypt',
                    'Casablanca, Morocco', 'Marrakech, Morocco', 'Nairobi, Kenya', 'Lagos, Nigeria',
                    'Accra, Ghana', 'Addis Ababa, Ethiopia', 'Algiers, Algeria', 'Tunis, Tunisia',
                    'Dakar, Senegal', 'Abidjan, Ivory Coast', 'Kampala, Uganda', 'Dar es Salaam, Tanzania'
                ],
                'America': [
                    'New York, USA', 'Los Angeles, USA', 'Chicago, USA', 'Miami, USA', 'San Francisco, USA',
                    'Toronto, Canada', 'Vancouver, Canada', 'Mexico City, Mexico', 'Cancun, Mexico',
                    'Bogota, Colombia', 'Lima, Peru', 'Santiago, Chile', 'Buenos Aires, Argentina',
                    'Sao Paulo, Brazil', 'Rio de Janeiro, Brazil', 'Panama City, Panama', 'San Jose, Costa Rica'
                ],
                'Australia': [
                    'Sydney, Australia', 'Melbourne, Australia', 'Brisbane, Australia', 'Perth, Australia',
                    'Adelaide, Australia', 'Canberra, Australia', 'Hobart, Australia', 'Auckland, New Zealand',
                    'Wellington, New Zealand', 'Christchurch, New Zealand', 'Queenstown, New Zealand', 'Fiji'
                ],
            };

            // Round-trip / One-way toggle
            const tripTabs = document.querySelectorAll('.trip-tab');
            const widgetInputs = document.querySelector('.widget-inputs-container');
            const returnDateField = document.getElementById('returnDateField');
            tripTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tripTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    const isRoundTrip = tab.dataset.trip === 'roundtrip';
                    widgetInputs.classList.toggle('round-trip-active', isRoundTrip);
                    returnDateField.classList.toggle('visible', isRoundTrip);
                });
            });
            // Date picker trigger - klik seluruh area kotak untuk buka kalender
            document.querySelectorAll('.date-trigger').forEach(group => {
                const input = group.querySelector('input[type="date"]');
                group.addEventListener('click', (e) => {
                    // Hindari double trigger saat input itu sendiri diklik
                    if (e.target !== input) {
                        try {
                            input.showPicker();
                        } catch (err) {
                            input.focus();
                        }
                    }
                });
            });

            // Destination Modal
            const destinationModal = document.getElementById('destinationModal');
            const destinationInput = document.querySelector('.destination-input');
            const destinationModalClose = document.getElementById('destinationModalClose');
            const destinationRegionStep = document.getElementById('destinationRegionStep');
            const destinationStep = document.getElementById('destinationStep');
            const destinationsGrid = document.getElementById('destinationsGrid');
            const destinationTrigger = document.querySelector('.destination-trigger');
            destinationTrigger.addEventListener('click', (e) => {
                // Don't open if the user clicks somewhere else (e.g. the modal is already open)
                if (!destinationModal.classList.contains('active')) {
                    destinationModal.classList.add('active');
                }
            });
            destinationModalClose.addEventListener('click', () => destinationModal.classList.remove('active'));
            // Close modal when clicking outside content
            destinationModal.addEventListener('click', (e) => {
                if (e.target === destinationModal) {
                    destinationModal.classList.remove('active');
                }
            });

            document.querySelectorAll('#destinationRegionStep .region-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const region = e.target.dataset.region;
                    populateDestinations(region);
                    destinationRegionStep.style.display = 'none';
                    destinationStep.style.display = 'block';
                });
            });

            document.querySelectorAll('#destinationStep .region-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const region = e.target.dataset.region;
                    populateDestinations(region);
                });
            });

            function populateDestinations(region) {
                destinationsGrid.innerHTML = '';
                destinations[region].forEach(dest => {
                    const button = document.createElement('button');
                    button.textContent = dest;
                    button.classList.add('destination-option');
                    button.addEventListener('click', () => {
                        destinationInput.value = dest;
                        destinationModal.classList.remove('active');
                    });
                    destinationsGrid.appendChild(button);
                });
            }

            // Origin Modal
            const originModal = document.getElementById('originModal');
            const originInput = document.querySelector('.origin-input');
            const originModalClose = document.getElementById('originModalClose');
            const originRegionStep = document.getElementById('originRegionStep');
            const originStep = document.getElementById('originStep');
            const originsGrid = document.getElementById('originsGrid');
            const originTrigger = document.querySelector('.origin-trigger');
            originTrigger.addEventListener('click', (e) => {
                if (!originModal.classList.contains('active')) {
                    originModal.classList.add('active');
                }
            });
            originModalClose.addEventListener('click', () => originModal.classList.remove('active'));
            // Close modal when clicking outside content
            originModal.addEventListener('click', (e) => {
                if (e.target === originModal) {
                    originModal.classList.remove('active');
                }
            });

            document.querySelectorAll('#originRegionStep .region-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const region = e.target.dataset.region;
                    populateOrigins(region);
                    originRegionStep.style.display = 'none';
                    originStep.style.display = 'block';
                });
            });

            document.querySelectorAll('#originStep .region-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const region = e.target.dataset.region;
                    populateOrigins(region);
                });
            });

            function populateOrigins(region) {
                originsGrid.innerHTML = '';
                origins[region].forEach(origin => {
                    const button = document.createElement('button');
                    button.textContent = origin;
                    button.classList.add('destination-option');
                    button.addEventListener('click', () => {
                        originInput.value = origin;
                        originModal.classList.remove('active');
                    });
                    originsGrid.appendChild(button);
                });
            }

            // Heart icon toggle on Top Travel Packages
            document.querySelectorAll('.heart-icon').forEach(heartBtn => {
                heartBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    heartBtn.classList.toggle('liked');
                    const icon = heartBtn.querySelector('i');
                    if (heartBtn.classList.contains('liked')) {
                        icon.className = 'fa-solid fa-heart';
                    } else {
                        icon.className = 'fa-regular fa-heart';
                    }
                });
            });

            // Like button on testimonials
            document.querySelectorAll('.like-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.classList.toggle('liked');
                    const icon = btn.querySelector('i');
                    if (btn.classList.contains('liked')) {
                        icon.className = 'fa-solid fa-thumbs-up';
                    } else {
                        icon.className = 'fa-regular fa-thumbs-up';
                    }
                });
            });


            // ===== Atur tanggal minimal =====
            const departureDate = document.getElementById("departureDate");
            const returnDate = document.getElementById("returnDate");

            const today = new Date().toISOString().split("T")[0];

            departureDate.min = today;
            returnDate.min = today;

            departureDate.addEventListener("change", function () {
                returnDate.min = this.value;

                if (returnDate.value < this.value) {
                    returnDate.value = "";
                }
            });
        });