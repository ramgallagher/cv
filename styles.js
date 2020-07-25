let button = document.getElementById("navBtn");
let links = document.getElementById("links");
let loader;
let landing = document.getElementById('welcome');

landing.style.display = "none";


links.style.display = "none";

button.addEventListener('click', () => {
    if (links.style.display == "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }

})

function timeLoader() {
    loader = setTimeout(preLoader, 2000);
}

function preLoader() {
    document.getElementById('preloader').style.display = "none";
    document.getElementById('welcome').style.display = "block";
}

function scrollAppear() {
    var logos = document.querySelector('.logos');
    var contact = document.querySelector('.contact');
    var contactPosition = contact.getBoundingClientRect().top;
    var logosPosition = logos.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (logosPosition < screenPosition) {
        logos.classList.add('logos-appear');
    }
    if (contactPosition < screenPosition) {
        contact.classList.add('contact-appear');
    }

}

window.addEventListener('scroll', scrollAppear);