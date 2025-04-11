function toggleMenu() {
    const hamburger = document.querySelector('.hamburgerMenu');
    const mobileMenu = document.querySelector('.mobileMenu');

    // Toggle mobile menu visibility
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('change');

    // If menu is now active, add event listener
    if (mobileMenu.classList.contains('active')) {
        setTimeout(() => {
            document.addEventListener('click', closeMenuOutside);
        }, 10); // slight delay to avoid immediate closure on click
    } else {
        document.removeEventListener('click', closeMenuOutside);
    }

    function closeMenuOutside(e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('change');
            document.removeEventListener('click', closeMenuOutside);
        }
    }
}
