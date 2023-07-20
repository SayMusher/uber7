window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu_item"),
        hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamb_open");
        menu.classList.toggle("menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamb_open");
            menu.classList.toggle("menu_active");
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                // entry.target.classList.remove("noshow");
            } else {
                entry.target.classList.remove("show");
                // entry.target.classList.add("noshow");
            }
        });
    });

    const hiddenItems = document.querySelectorAll(".hidden");
    hiddenItems.forEach((el) => observer.observe(el));
});
