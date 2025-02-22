/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


// ===============Email sending logic==========

document.addEventListener("DOMContentLoaded", function () {
    // Form submit event listener
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form default submission

        // Form fields data
        let user_name = document.querySelector("input[placeholder='Full Name']").value;
        let user_email = document.querySelector("input[placeholder='Email Address']").value;
        let user_mobile = document.querySelector("input[placeholder='Mobile Number']").value;
        let email_subject = document.querySelector("input[placeholder='Email Subject']").value;
        let message = document.querySelector("textarea").value;

        // Sending email using Email.js
        
        emailjs.send("service_9z1hn79", "template_05dz44q", {
            user_name: user_name,
            user_email: user_email,
            user_mobile: user_mobile,
            email_subject: email_subject,
            message: message
        }, "o5jFZMgba0bF6_H9O")
        .then(function (response) {
            alert("Message Sent Successfully! ✅");
        }, function (error) {
            alert("Failed to Send Message ❌: " + error.text);
        });

        // Reset form fields
        document.querySelector("form").reset();
    });
});
