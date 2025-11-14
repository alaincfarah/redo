document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', () => {
            navMobile.classList.toggle('active');
        });
    }

    // TPE page form handler
    const tpeForm = document.getElementById('tpe-form');
    if (tpeForm) {
        tpeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Message envoyé:\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`);
            tpeForm.reset();
        });
    }
});
