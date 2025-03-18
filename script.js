// DARK MODE TOGGLE
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle dark mode and save preference
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", currentTheme);
});

// SMOOTH SCROLLING
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// PROJECT MODAL FUNCTIONALITY
const modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

function showProjectModal(projectId) {
    let projectContent = "";

    if (projectId === "project1") {
        projectContent = `
            <h3>Network Upgrade & DCS Redundancy</h3>
            <p>Enhanced system reliability and integrated Fire Alarm Systems with DCS.</p>
            <button class="close-modal">Close</button>
        `;
    } else if (projectId === "project2") {
        projectContent = `
            <h3>IoT-Based Monitoring System</h3>
            <p>Designed an IoT-enabled system for real-time hydrogen monitoring.</p>
            <button class="close-modal">Close</button>
        `;
    }

    modal.innerHTML = projectContent;
    modal.style.display = "block";

    const closeModal = modal.querySelector(".close-modal");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields!");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Thank you for your message! I'll get back to you soon.");
        contactForm.reset();
    }
});
