const navbar_btn = document.getElementById('mobile-menu-bar');
const navbar = document.getElementById('mobile-nav');

navbar_btn.onclick = () => {
    navbar.classList.toggle("mobile-nav-active");
};
