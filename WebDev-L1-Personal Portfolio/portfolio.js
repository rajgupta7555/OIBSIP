let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Web Designer', 'Software Engineer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

var typed = new Typed('#multiple', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Web Designer', 'Software Engineer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});