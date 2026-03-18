// DARK / LIGHT MODE
function toggleMode() {
    document.body.classList.toggle("light");
}

// MOBILE MENU
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const message = document.getElementById("contactMessage").value;
    const output = document.getElementById("formMessage");
    output.innerHTML = `Thank you, ${name}! Your message has been sent.`;
    contactForm.reset();
});