export interface Skill {
    title: string;
    desc: string;
    items: string [];
}

export const skills: Skill[] = [
    {
        title: "Frontend",
        desc: "Tampilan yang rapi dan responsif",
        items: ["HTML & CSS", "Javascript", "Typescript", "Tailwind CSS", "Bootstrap", "Alpine.js", "Next.js"]
    },
    {
        title: "Backend & Database",
        desc: "Aplikasi web dengan login dan data.",
        items: ["Laravel", "Livewire", "PHP", "MySQL", "Supabase"]
    },
    {
        title: "Mobile",
        desc: "Aplikasi untuk Android dan iOS.",
        items: ["Dart", "Flutter", "Firebase"]
    },
    {
        title: "Otomasi, AI & IoT",
        desc: "Pekerjaan berulang yang jalan sendiri.",
        items: ["n8n", "Prompt engineering", "IoT", "ESP32", "Arduino UNO", "C++"]
    }
]