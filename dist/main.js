import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";
import { experiences } from "./data/experience.js";
import { renderProject, renderSkills, renderExperience } from "./features/render.js";
import { initContactForm } from "./features/contactForm.js";
import { toggle } from "./features/darkMode.js";
renderSkills(skills);
renderProject(projects);
renderExperience(experiences);
initContactForm();
function footer() {
    const year = document.getElementById("year");
    if (!year) {
        return;
    }
    year.textContent = `${new Date().getFullYear()}`;
}
function initMobileMenu() {
    const button = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    if (!button || !menu) {
        return;
    }
    button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
    });
}
initMobileMenu();
footer();
toggle();
//# sourceMappingURL=main.js.map