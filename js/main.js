

document.addEventListener("DOMContentLoaded", function () {
    const navList = document.querySelector('.nav_list');
    const navItems = document.querySelectorAll('.nav_item');
    const drawerInput = document.getElementById('drawer_input');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the visibility of the navigation menu
            navList.classList.toggle('nav_list--visible');
            // Toggle the checkbox state to match the visibility
            drawerInput.checked = !drawerInput.checked;
        });
    });
});

if (window.innerWidth <= 1050 && typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".swiper", {
        // Swiper options go here
    });
}