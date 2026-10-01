export function renderSkills(skills) {
    const container = document.getElementById("skills-container");
    if (!container) {
        return;
    }
    const cardsHtml = skills.map((skill) => {
        const itemHtml = skill.items
            .map((item) => {
            return `<span class="block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium px-3 py-2 rounded-lg">${item}</span>`;
        })
            .join("");
        return `
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col gap-4 text-left shadow-sm hover:shadow-md transition-shadow">
            <h3 class="text-xl font-bold">${skill.title}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">${skill.desc}</p>
            <div class="flex flex-col gap-2">
                 ${itemHtml}
            </div>
        </div>
        `;
    });
    container.innerHTML = cardsHtml.join("");
}
export function renderProject(projects) {
    const featured = projects.find((p) => p.featured === true);
    const other = projects.filter((p) => p.featured === false);
    const featuredContainer = document.getElementById("featured-project-container");
    const gridContainer = document.getElementById("projects-grid");
    if (!featuredContainer || !gridContainer || !featured) {
        return;
    }
    const chip = (tech) => `<span class="px-3 py-1 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-medium">${tech}</span>`;
    const imgHtml = (src, title) => src
        ? `<img src="${src}" alt="Screenshot ${title}" loading="lazy" class="w-full aspect-[16/10] object-cover object-top rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md">`
        : "";
    const linkHtml = featured.link
        ? `<a href="${featured.link}" target="_blank" class="inline-flex items-center self-start h-11 px-5 rounded-xl bg-accent text-white text-sm font-semibold hover:opacity-90 dark:bg-accent-soft dark:text-slate-900">Lihat Demo →</a>`
        : "";
    const textLink = (href) => href
        ? `<a href="${href}" target="_blank" rel="noopener" class="text-sm font-semibold text-accent dark:text-accent-soft hover:underline">Lihat Demo →</a>`
        : "";
    featuredContainer.innerHTML = `
    <div class="p-6 md:p-8 lg:p-10 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-left shadow-sm">
        ${imgHtml(featured.image, featured.title)}
        <div class="flex flex-col gap-4">
            <span class="self-start px-3 py-1 rounded-full bg-accent/10 text-accent dark:bg-accent-soft/15 dark:text-accent-soft text-xs font-semibold">Project unggulan</span>
            <h3 class="text-2xl md:text-3xl font-bold">${featured.title}</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${featured.desc}</p>
            <div class="flex flex-wrap gap-2">${featured.techStack.map(chip).join("")}</div>
            ${linkHtml}
        </div>
    </div>
    `;
    gridContainer.innerHTML = other
        .map((show) => `
    <div class="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col gap-4 text-left h-full shadow-sm hover:shadow-md transition-shadow">
        ${imgHtml(show.image, show.title)}
        <h3 class="text-xl font-bold">${show.title}</h3>
        <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-1">${show.desc}</p>
        <div class="flex flex-wrap gap-2">${show.techStack.map(chip).join("")}</div>
        ${textLink(show.link)}
    </div>
    `)
        .join("");
}
export function renderExperience(experiences) {
    const experienceContainer = document.getElementById("experience-container");
    if (!experienceContainer) {
        return;
    }
    experienceContainer.innerHTML = experiences
        .map((item) => `
    <div class="relative pl-8 flex flex-col gap-2 text-left">
        <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:bg-accent-soft dark:ring-slate-900"></span>
        <span class="self-start px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-accent dark:text-accent-soft">${item.year}</span>
        <h3 class="text-xl md:text-2xl font-bold">${item.title}</h3>
        <p class="text-sm font-medium text-slate-500 dark:text-slate-400">${item.place}</p>
        <p class="leading-relaxed text-slate-600 dark:text-slate-300">${item.desc}</p>
    </div>
    `)
        .join("");
}
//# sourceMappingURL=render.js.map