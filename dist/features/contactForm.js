export function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name-input");
    const waInput = document.getElementById("wa-input");
    const messageInput = document.getElementById("message-input");
    const savedDraft = localStorage.getItem("contact-draft");
    if (!form || !nameInput || !waInput || !messageInput) {
        return;
    }
    if (savedDraft) {
        const draft = JSON.parse(savedDraft);
        nameInput.value = draft.name;
        waInput.value = draft.wa;
        messageInput.value = draft.message;
    }
    function saveDraft() {
        const draft = {
            name: nameInput.value,
            wa: waInput.value,
            message: messageInput.value
        };
        localStorage.setItem("contact-draft", JSON.stringify(draft));
    }
    nameInput.addEventListener("input", saveDraft);
    waInput.addEventListener("input", saveDraft);
    messageInput.addEventListener("input", saveDraft);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = `Halo, nama saya ${nameInput.value} . ${messageInput.value}`;
        const waLink = `https://wa.me/6281364794617?text=${encodeURIComponent(text)}`;
        window.open(waLink, "_blank");
        localStorage.removeItem("contact-draft");
    });
}
//# sourceMappingURL=contactForm.js.map