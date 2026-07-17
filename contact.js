const contactForm = document.querySelector(".contact-right form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll("input");

    const fullNameInput = inputs[0];
    const phoneInput = inputs[1];
    const emailInput = inputs[2];
    const imageInput = inputs[3]; 
    const textareaEl = contactForm.querySelector("textarea");
    const imageNames = imageInput.files.length
        ? Array.from(imageInput.files).map(file => file.name)
        : [];

    const formData = {
        fullName: fullNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        message: textareaEl.value,
        imageNames: imageNames,
        submittedAt: new Date().toISOString()
    };
    const existing = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    existing.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(existing));
    showToast("Request Sent");
    contactForm.reset();
});

function showToast(message) {
    const existingToast = document.querySelector(".toast");
    if (existingToast) existingToast.remove();

    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.classList.add("show");
    });
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}