const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const smoothOpen = () => {
                modal.style.display = "block";
                modal.style.opacity = 0;

                let idInterval;
                let count = 0;

                const appear = () => {
                    if (count <= 1){
                    count += 0.05;
                    modal.style.opacity = `${count}`;
                    idInterval = requestAnimationFrame(appear);
                } else {
                    cancelAnimationFrame(idInterval);
                }
                };
                idInterval = requestAnimationFrame(appear);
            };
            
            if(window.innerWidth > 768){
                smoothOpen();
            } else {
                modal.style.display = "block";
            }

            // setInterval(appear, 50);
        });
    });

    function modalClose() {
            const smoothClose = () => {
                let idInterval;
                let count = 1;

                const close = () => {
                    if (count >= 0){
                    count -= 0.05;
                    modal.style.opacity = `${count}`;
                    idInterval = requestAnimationFrame(close);
                    } else {
                        cancelAnimationFrame(idInterval);
                        modal.style.display = "none";
                    }
                };
                idInterval = requestAnimationFrame(close);
            };

            if (window.innerWidth > 768){
                smoothClose();
            } else {
                modal.style.display = "none";
            }
            
    }
    
    modal.addEventListener('click', (e) => {
        if(!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")){
            modalClose();
            // modal.style.display = "none";
        }
        
    });

};

export default modal;