const menu = () => {
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    const toServiceBtn = document.querySelector(".service-btn>img");
    const body = document.querySelector("body");

    body.addEventListener('click', (e) => {
        if (e.target.closest(".menu")){
            menu.classList.toggle("active-menu");
        } else if (e.target === toServiceBtn){
            
            e.preventDefault();
            
            const blockID = "#service-block";
                            
            document.querySelector("" + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
        } else if (e.target == closeBtn) {
            menu.classList.toggle("active-menu");
        } else if (e.target.tagName == "A" && menu.classList.contains("active-menu")){
            e.preventDefault();
                
            const blockID = e.target.getAttribute('href');
                            
            document.querySelector("" + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
            menu.classList.toggle("active-menu");
        } else if (menu.classList.contains("active-menu") && !e.target.closest(".active-menu")){
            menu.classList.toggle("active-menu");
        }
    });    
};

export default menu;