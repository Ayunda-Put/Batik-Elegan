// Menyembunyikan atau menampilkan navbar berdasarkan scroll
let previousScrollPosition = window.pageYOffset;
const navbar = document.querySelector('.disappearing-navbar');

window.addEventListener('scroll', function () {
    let currentScrollPosition = window.pageYOffset;

    if (previousScrollPosition > currentScrollPosition) {
        // Scroll ke atas - navbar muncul
        navbar.style.top = "0";
    } else {
        // Scroll ke bawah - navbar menghilang
        navbar.style.top = "-70px";
    }

    previousScrollPosition = currentScrollPosition;
});
