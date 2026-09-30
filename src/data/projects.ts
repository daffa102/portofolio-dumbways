export interface Project {
    title: string;
    desc: string;
    techStack: string[];
    link?: string;
    image?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        title: "Cibaduy",
        desc: "Company profile untuk Cibaduy, menampilkan profil usaha, layanan, dan informasi kontak dalam tampilan yang rapi dan mudah diakses",
        techStack: ["Next.js"],
        link: "https://cibaduy.com",
        featured: true,
        image: "assets/image-project/cibaduy.webp"
    },
    {
        title: "PKBM Zaid Bin Tsabit",
        desc: "Rewrite website sekolah PKBM Zaid Bin Tsabit dari React ke Laravel + Livewire (TALL stack), lengkap dengan sistem PPDB online, dashboard admin & orang tua, serta pembayaran SPP",
        techStack: ["Laravel", "Livewire", "MySQL"],
        featured: false,
        image: "assets/image-project/pkbm.webp"
    },
    {
        title: "Aplikasi Cibaduy",
        desc: "Aplikasi absensi internal untuk Cibaduy mencatat kehadiran secara digital, lebih praktis dan rapi dibanding pencatatan manual",
        techStack: ["flutter", "laravel", "MySQL"],
        featured: false,
        image: "assets/image-project/apk.webp"
    },
    {
        title: "Website Berita Interupsi",
        desc: "Portal berita Interupsi, dikerjakan sebagai bagian dari program magang — menampilkan artikel dan konten berita dengan tampilan yang responsif.",
        techStack: ["Laravel", "Livewire"],
        featured: false,
        image: "assets/image-project/intrupsi.webp"
    }
]