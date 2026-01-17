const button = document.getElementById("menu-button");
const menu = document.getElementById("mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("open"); /* toggle here is a js method */
});

button.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    button.textContent = isOpen ? "✖" : "≡";
});

button.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
});