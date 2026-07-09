

let toastTimer = null;



function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) {
        clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}


function handleBackClick() {
    showToast('Kembali ke halaman sebelumnya');

        
        
        }

document.addEventListener('DOMContentLoaded', function () {
        if (!document.getElementById('toast')) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
});
