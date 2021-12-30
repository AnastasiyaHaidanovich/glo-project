import { animate } from './helpers';

const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const smoothOpen = () => {
                modal.style.display = "block";
                modal.style.opacity = 0;

                animate({
                    duration: 1000,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                      modal.style.opacity = progress;
                    }
                });
            };
            
            if(window.innerWidth > 768){
                smoothOpen();
            } else {
                modal.style.display = "block";
            }

            // setInterval(appear, 50);
        });
    });
    
    const smoothClose = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = 1 - progress;
            }
        });
        setTimeout(()=> {
            modal.style.display = "none";
        }, 1000);
    };

    modal.addEventListener('click', (e) => {
        if(! e.target.closest(".popup-content") || e.target.classList.contains("popup-close")){
            if (window.innerWidth > 768){
                smoothClose();
            } else {
                modal.style.display = "none";
            }
        }
        
    });

};

export default modal;