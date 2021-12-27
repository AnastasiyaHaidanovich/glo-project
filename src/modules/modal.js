const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const modalClose = modal.querySelector(".popup-close");

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

        modalClose.addEventListener("click", () => {
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
            
        });
    });

    
    // console.log(window.innerWidth);
};

export default modal;