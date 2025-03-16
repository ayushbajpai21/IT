// preloader 
window.addEventListener("load", function() {
    setTimeout(() => {
        document.querySelector(".preloader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none";
            document.querySelector(".content").style.display = "block";
        }, 700); // Smooth fade-out delay
    }, 3500); // 3.5 sec ke baad preloader hide hoga
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        console.log("Hamburger Clicked!"); // Debugging
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); // Toggle animation
    });
})

// service section 

function scrollTestimonialsLeft() {
    const container = document.querySelector("scroll-btn left");
    if (container) {
        container.scrollBy({ left: -350, behavior: "smooth" });
    }
}

function scrollRight() {
    const container = document.querySelector(".services-container");
    container.scrollBy({ left: 350, behavior: "smooth" });
}


// testimonials and client 
function scrollTestimonialsLeft() {
    const container = document.querySelector(".testimonials-container");
    if (container) {
        container.scrollBy({ left: -350, behavior: "smooth" });
    }
}

function scrollTestimonialsRight() {
    const container = document.querySelector(".testimonials-container");
    if (container) {
        container.scrollBy({ left: 350, behavior: "smooth" });
    }
}

// contact 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate input (basic check)
    if (name && email && subject && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// entrance contact 
document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.querySelector(".contact-container");

    // Add "show" class after a short delay for smooth animation
    setTimeout(() => {
        contactSection.classList.add("show");
    }, 200); // Adjust timing if needed
});

// blog news section 
document.addEventListener("DOMContentLoaded", function () {
    let newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.08)";
            card.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.4)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });
    });
});
