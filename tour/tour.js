        document.addEventListener('DOMContentLoaded', function() {

                                                const packagesData = {
                all: [
                    {
                        id: 1,
                        category: 'family',
                        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop',
                        title: 'Bali Luxury Family Escape',
                        rating: 4.9,
                        reviews: 234,
                        duration: '6 days',
                        participants: 'Up to 4 People',
                        price: 'IDR4.500.000',
                        link: 'detail/bali.html'
                    },
                    {
                        id: 2,
                        category: 'honeymoon',
                        img: 'https://i.pinimg.com/736x/8b/a8/20/8ba82023a4b3c41008e1fd24c8ee38f7.jpg',
                        title: 'Heritage Love in Yogyakarta',
                        rating: 4.7,
                        reviews: 208,
                        duration: '4 days',
                        participants: 'Couple Only',
                        price: 'IDR4.200.000',
                        link: 'detail/yogya.html'
                    },
                    {
                        id: 3,
                        category: 'adventure',
                        img: 'https://i.pinimg.com/736x/93/f4/bf/93f4bf852b704f7325211f6b357074a0.jpg',
                        title: 'Bromo Volcanic Adventure',
                        rating: 4.9,
                        reviews: 342,
                        duration: '1 day',
                        participants: 'Open Trip',
                        price: 'IDR250.000',
                        link: 'detail/bromo.html'
                    },
                    {
                        id: 4,
                        category: 'family',
                        img: 'https://i.pinimg.com/1200x/40/32/4e/40324e66cded53f867ac48f70daecbb2.jpg',
                        title: 'Family Fun in Singapore',
                        rating: 4.8,
                        reviews: 156,
                        duration: '5 days',
                        participants: 'Up to 6 People',
                        price: 'IDR6.200.000',
                        link: 'detail/singapore.html'
                    },
                    {
                        id: 5,
                        category: 'opentrip',
                        img: 'https://i.pinimg.com/1200x/03/63/70/0363708adc49b2b1d22ba061d2320a89.jpg',
                        title: 'Komodo Island Open Trip',
                        rating: 4.9,
                        reviews: 289,
                        duration: '3 days',
                        participants: 'Open Trip',
                        price: 'IDR3.800.000',
                        link: 'detail/komodo.html'
                    },
                    {
                        id: 6,
                        category: 'adventure',
                        img: 'https://i.pinimg.com/736x/7c/7c/51/7c7c51b2399f9f92524b3d77cd2ebea0.jpg',
                        title: 'Mount Rinjani Trekking',
                        rating: 4.7,
                        reviews: 412,
                        duration: '4 days',
                        participants: 'Up to 8 People',
                        price: 'IDR2.500.000',
                        link: 'detail/rinjani.html'
                    },
                    {
                        id: 7,
                        category: 'honeymoon',
                        img: 'https://i.pinimg.com/736x/e4/7d/1d/e47d1d99bd9715cd5c27c9020d766d23.jpg',
                        title: 'Romantic Sunset in Ubud',
                        rating: 4.9,
                        reviews: 178,
                        duration: '3 days',
                        participants: 'Couple Only',
                        price: 'IDR3.900.000',
                        link: 'detail/ubud.html'
                    },
                    {
                        id: 8,
                        category: 'corporate',
                        img: 'https://i.pinimg.com/1200x/f9/c9/b9/f9c9b960eca15ac81e9b33940d92b448.jpg',
                        title: 'Corporate Retreat Bali',
                        rating: 4.6,
                        reviews: 95,
                        duration: '5 days',
                        participants: '10-20 People',
                        price: 'IDR12.500.000',
                        link: 'detail/corbali.html'
                    },
                    {
                        id: 9,
                        category: 'opentrip',
                        img: 'https://i.pinimg.com/1200x/7d/59/8c/7d598c10c56ce4a06fcfe00d3cfe15d9.jpg',
                        title: 'Java Overland Open Trip',
                        rating: 4.8,
                        reviews: 223,
                        duration: '7 days',
                        participants: 'Open Trip',
                        price: 'IDR5.200.000',
                        link: 'detail/java.html'
                    },
                    {
                        id: 10,
                        category: 'family',
                        img: 'https://i.pinimg.com/1200x/7c/4e/2a/7c4e2a6d4181583a31ac6bed74a1146d.jpg',
                        title: 'Disneyland Tokyo Family',
                        rating: 4.9,
                        reviews: 312,
                        duration: '4 days',
                        participants: 'Up to 5 People',
                        price: 'IDR7.800.000',
                        link: 'detail/disney.html'
                    },
                    {
                        id: 11,
                        category: 'corporate',
                        img: 'https://i.pinimg.com/1200x/21/00/cd/2100cdfe938af1609797796346ff4acf.jpg',
                        title: 'Executive Retreat Lombok',
                        rating: 4.7,
                        reviews: 67,
                        duration: '6 days',
                        participants: '8-15 People',
                        price: 'IDR15.000.000',
                        link: 'detail/lombok.html'
                    },
                    {
                        id: 12,
                        category: 'adventure',
                        img: 'https://i.pinimg.com/736x/d3/97/b7/d397b7bd12969088f573a14191892b91.jpg',
                        title: 'Raja Ampat Diving Adventure',
                        rating: 4.9,
                        reviews: 189,
                        duration: '8 days',
                        participants: 'Up to 6 People',
                        price: 'IDR8.500.000',
                        link: 'detail/rajaampat.html'
                    },
                    {
                        id: 13,
                        category: 'honeymoon',
                        img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop',
                        title: 'Honeymoon in Maldives',
                        rating: 5.0,
                        reviews: 456,
                        duration: '7 days',
                        participants: 'Couple Only',
                        price: 'IDR16.200.000',
                        link: 'detail/maldives.html'
                    },
                    {
                        id: 14,
                        category: 'opentrip',
                        img: 'https://i.pinimg.com/736x/8c/bc/d1/8cbcd1a712a91ef450ddb1508e83d9a7.jpg',
                        title: 'Bali Volcano Open Trip',
                        rating: 4.7,
                        reviews: 167,
                        duration: '2 days',
                        participants: 'Open Trip',
                        price: 'IDR1.200.000',
                        link: 'detail/volcano.html'
                    },
                    {
                        id: 15,
                        category: 'corporate',
                        img: 'https://i.pinimg.com/736x/65/e8/b7/65e8b70f6bc7a641731be823a95a3a51.jpg',
                        title: 'Corporate Event Jakarta',
                        rating: 4.5,
                        reviews: 54,
                        duration: '3 days',
                        participants: '20-50 People',
                        price: 'IDR22.000.000',
                        link: 'detail/corjak.html'
                    },
                    {
                        id: 16,
                        category: 'family',
                        img: 'https://i.pinimg.com/1200x/db/21/ec/db21ece188a066accd73c3e6d23c2a41.jpg',
                        title: 'Cultural Family Tour Java',
                        rating: 4.6,
                        reviews: 143,
                        duration: '5 days',
                        participants: 'Up to 4 People',
                        price: 'IDR4.800.000',
                        link: 'detail/cftj.html'
                    },
                    {
                        id: 17,
                        category: 'adventure',
                        img: 'https://i.pinimg.com/736x/84/ab/33/84ab33c82b1364704c10a235f97b0935.jpg',
                        title: 'Surfing Adventure Bali',
                        rating: 4.8,
                        reviews: 278,
                        duration: '5 days',
                        participants: 'Up to 4 People',
                        price: 'IDR3.200.000',
                        link: 'detail/surving.html'
                    },
                    {
                        id: 18,
                        category: 'honeymoon',
                        img: 'https://i.pinimg.com/736x/58/ef/47/58ef47a9f7b901ce77be4d5f51e97c30.jpg',
                        title: 'Santorini Honeymoon Escape',
                        rating: 5.0,
                        reviews: 523,
                        duration: '8 days',
                        participants: 'Couple Only',
                        price: 'IDR18.500.000',
                        link: 'detail/santorini.html'
                    }
                ],
                family: [],
                honeymoon: [],
                adventure: [],
                opentrip: [],
                corporate: []
            };

                packagesData.all.forEach(pkg => {
                if (packagesData[pkg.category]) {
                    packagesData[pkg.category].push(pkg);
                }
            });

            const packageGrid = document.getElementById('packageGrid');
            const emptyState = document.getElementById('emptyState');

            function renderPackages(category) {
                const packages = packagesData[category] || [];

                if (packages.length === 0) {
                    packageGrid.innerHTML = '';
                    emptyState.style.display = 'block';
                    return;
                }

                emptyState.style.display = 'none';

                    function getStars(rating) {
                    let html = '';
                    const fullStars = Math.floor(rating);
                    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
                    for (let i = 0; i < fullStars; i++) {
                        html += '<i class="fas fa-star"></i>';
                    }
                    if (halfStar) {
                        html += '<i class="fas fa-star-half-alt"></i>';
                    }
                    const emptyStars = 5 - fullStars - halfStar;
                    for (let i = 0; i < emptyStars; i++) {
                        html += '<i class="far fa-star"></i>';
                    }
                    return html;
                }

                let html = '';
                packages.forEach(pkg => {
                    html += `
                        <div class="col-lg-4 col-md-6">
                            <div class="card tour-card border-0 h-100">
                                <div class="tour-img-wrap">
                                    <img src="${pkg.img}" alt="${pkg.title}">
                                    <div class="heart-icon"><i class="far fa-heart"></i></div>
                                </div>
                                <div class="card-body p-4 d-flex flex-column">
                                    <h5 class="fw-bold mb-1">${pkg.title}</h5>
                                    <div class="mb-3" style="font-size: 0.8rem;">
                                        <span style="color: #f59e0b;">${getStars(pkg.rating)}</span>
                                        <span class="text-muted"> ${pkg.rating} (${pkg.reviews} Comment)</span>
                                    </div>
                                    <div class="text-muted small mb-4">
                                        <div class="mb-1"><i class="far fa-clock me-2"></i> ${pkg.duration}</div>
                                        <div><i class="fas fa-user-friends me-2"></i> ${pkg.participants}</div>
                                    </div>
                                    <div class="mt-auto d-flex justify-content-between align-items-end">
                                        <div>
                                            <small class="text-muted d-block" style="font-size: 0.7rem;">Starting from</small>
                                            <span class="fw-bold" style="color: var(--primary-blue);">${pkg.price}</span>
                                        </div>
                                        <button class="btn btn-primary rounded-pill fw-bold px-4 btn-sm"
                                        onclick="window.location.href='${pkg.link}'"
                                            style="background-color: var(--teal-dark); border:none;">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });

                packageGrid.innerHTML = html;

                    document.querySelectorAll('.heart-icon').forEach(icon => {
                    icon.addEventListener('click', function(e) {
                        e.stopPropagation();
                        this.classList.toggle('liked');
                        const i = this.querySelector('i');
                        if (this.classList.contains('liked')) {
                            i.className = 'fas fa-heart';
                        } else {
                            i.className = 'far fa-heart';
                        }
                    });
                });
            }

            const categoryCards = document.querySelectorAll('.category-card');

            categoryCards.forEach(card => {
                card.addEventListener('click', function() {
                                        categoryCards.forEach(c => c.classList.remove('active'));
                    this.classList.add('active');

                    const category = this.dataset.category;
                    renderPackages(category);
                });
            });

            const tripTabs = document.querySelectorAll('.trip-tab');
            const returnDateField = document.getElementById('returnDateField');

            tripTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tripTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    const isRoundTrip = this.dataset.trip === 'roundtrip';
                    returnDateField.classList.toggle('visible', isRoundTrip);
                });
            });

                document.querySelectorAll('.date-trigger').forEach(group => {
                const input = group.querySelector('input[type="date"]');
                if (input) {
                    group.addEventListener('click', function(e) {
                        if (e.target !== input) {
                            try {
                                input.showPicker();
                            } catch (err) {
                                input.focus();
                            }
                        }
                    });
                }
            });

            const today = new Date().toISOString().split('T')[0];
            const departureDate = document.getElementById('departureDate');
            const returnDate = document.getElementById('returnDate');

            if (departureDate) {
                departureDate.min = today;
                departureDate.addEventListener('change', function() {
                    if (returnDate) {
                        returnDate.min = this.value;
                        if (returnDate.value < this.value) {
                            returnDate.value = '';
                        }
                    }
                });
            }
            if (returnDate) {
                returnDate.min = today;
            }

            renderPackages('all');

        });
