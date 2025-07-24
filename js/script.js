
/*========== Notification ==========*/
function showNotification(message, type = "success") {
    const container = document.getElementById("notification-container");
    const notification = document.createElement("div");
    notification.textContent = message;

    // Modern design
    notification.style.padding = "16px 28px";
    notification.style.marginTop = "15px";
    notification.style.borderRadius = "8px";
    notification.style.color = "#fff";
    notification.style.fontWeight = "600";
    notification.style.fontSize = "16px";
    notification.style.letterSpacing = "0.5px";
    notification.style.boxShadow = "0 6px 12px rgba(0,0,0,0.25)";
    notification.style.transition = "all 0.4s ease";
    notification.style.opacity = "0.95";
    notification.style.backdropFilter = "blur(3px)";
    notification.style.maxWidth = "320px";
    notification.style.lineHeight = "1.4";

    // Color theme
 if (type === "success") {
    // green gradient glassy
    notification.style.background = "rgba(76, 175, 80, 0.6)";
    notification.style.backdropFilter = "blur(6px)";
    notification.style.border = "1px solid rgba(76, 175, 80, 0.3)";
} else if (type === "error" || type === "warning") {
    // light red glassy
    notification.style.background = "rgba(255, 99, 99, 0.6)";
    notification.style.backdropFilter = "blur(6px)";
    notification.style.border = "1px solid rgba(255, 99, 99, 0.3)";
}



    // Hover effect
    notification.addEventListener("mouseenter", () => {
      notification.style.transform = "scale(1.03)";
    });
    notification.addEventListener("mouseleave", () => {
      notification.style.transform = "scale(1)";
    });

    container.appendChild(notification);

    // Auto remove
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(100%)";
        setTimeout(() => container.removeChild(notification), 400);
    }, 4000);
}



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

document.body.classList.add("dark-mode");
darkModeIcon.classList.add("bx-sun");

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
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let user_name = document.querySelector("input[placeholder='Full Name']").value.trim();
        let user_email = document.querySelector("input[placeholder='Email Address']").value.trim();
        let user_mobile = document.querySelector("input[placeholder='Mobile Number']").value.trim();
        let email_subject = document.querySelector("input[placeholder='Email Subject']").value.trim();
        let message = document.querySelector("textarea").value.trim();

        if (!user_name || !user_email || !user_mobile || !email_subject || !message) {
            showNotification("⚠️ Please fill all fields before submitting.", "error"); // 🔴 RED
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user_email)) {
            showNotification(" Please enter a valid email address.", "error");
            return;
        }

        emailjs.send("service_9z1hn79", "template_05dz44q", {
            user_name,
            user_email,
            user_mobile,
            email_subject,
            message
        }, "o5jFZMgba0bF6_H9O")
        .then(function (response) {
            showNotification(" Message Sent Successfully!", "success"); 
        }, function (error) {
            showNotification("❌ Failed to Send Message: " + error.text, "error"); 
        });

        document.querySelector("form").reset();
    });
});
