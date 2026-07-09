document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Gallery: klik thumbnail buat ganti gambar utama ---------- */
    const galleryMainImg = document.getElementById('galleryMainImg');
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const newSrc = thumb.dataset.img;
            if (newSrc) {
                galleryMainImg.src = newSrc;
            }
        });
    });

    /* ---------- Tabs: scroll ke section + active state ---------- */
    const tabLinks = document.querySelectorAll('#tourTabs .nav-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const offset = 90; // tinggi tour-tabs sticky
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ---------- Wishlist toggle ---------- */
    const wishlistBtn = document.getElementById('wishlistBtn');
    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.classList.toggle('liked');
        const icon = wishlistBtn.querySelector('i');
        icon.className = wishlistBtn.classList.contains('liked')
            ? 'fa-solid fa-heart'
            : 'fa-regular fa-heart';
    });

    /* ---------- Share button ---------- */
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: document.title,
            text: 'Balui River Expedition, Kalimantan',
            url: window.location.href
        };
        if (navigator.share) {
            try { await navigator.share(shareData); } catch (err) { /* user cancelled */ }
        } else {
            navigator.clipboard.writeText(window.location.href);
            shareBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
            setTimeout(() => {
                shareBtn.innerHTML = '<i class="fa-solid fa-share-nodes"></i>';
            }, 1500);
        }
    });

    /* ---------- Review "Helpful" like button ---------- */
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked');
            const icon = btn.querySelector('i');
            icon.className = btn.classList.contains('liked')
                ? 'fa-solid fa-thumbs-up me-1'
                : 'fa-regular fa-thumbs-up me-1';
        });
    });

    /* ---------- Booking: tanggal minimal hari ini ---------- */
    const bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        const today = new Date().toISOString().split('T')[0];
        bookingDate.min = today;
    }

    /* ---------- Booking: guest stepper + kalkulasi harga ---------- */
    const PRICE_PER_PERSON = 450;
    const SERVICE_FEE = 15;
    const MIN_GUEST = 1;
    const MAX_GUEST = 10;

    const guestCountEl = document.getElementById('guestCount');
    const guestCountLabel = document.getElementById('guestCountLabel');
    const subtotalLabel = document.getElementById('subtotalLabel');
    const totalLabel = document.getElementById('totalLabel');
    const guestMinus = document.getElementById('guestMinus');
    const guestPlus = document.getElementById('guestPlus');

    let guestCount = 1;

    function renderBookingSummary() {
        guestCountEl.textContent = guestCount;
        guestCountLabel.textContent = guestCount;
        const subtotal = PRICE_PER_PERSON * guestCount;
        subtotalLabel.textContent = `$${subtotal}`;
        totalLabel.textContent = `$${subtotal + SERVICE_FEE}`;
        guestMinus.disabled = guestCount <= MIN_GUEST;
        guestPlus.disabled = guestCount >= MAX_GUEST;
    }

    guestMinus.addEventListener('click', () => {
        if (guestCount > MIN_GUEST) {
            guestCount--;
            renderBookingSummary();
        }
    });

    guestPlus.addEventListener('click', () => {
        if (guestCount < MAX_GUEST) {
            guestCount++;
            renderBookingSummary();
        }
    });

    renderBookingSummary();

    /* ---------- Book Now button ---------- */
    document.querySelector('.btn-book-now').addEventListener('click', () => {
        if (!bookingDate.value) {
            bookingDate.focus();
            bookingDate.reportValidity ? bookingDate.reportValidity() : alert('Silakan pilih tanggal keberangkatan dulu.');
            return;
        }
        alert(`Booking berhasil dibuat!\n\nTanggal: ${bookingDate.value}\nJumlah Tamu: ${guestCount}\nTotal: ${totalLabel.textContent}`);
    });

});