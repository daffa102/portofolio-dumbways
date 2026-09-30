export function toggle (){
    const savedTheme = localStorage.getItem("theme");
    
    const button = document.getElementById("theme-toggle")

    if(!button){
        return;
    }
    
    button.addEventListener("click", () =>{
        document.documentElement.classList.toggle("dark");

        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", `${isDark}`);
    })


}