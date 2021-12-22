const modal = () => {
    const buttons = document.querySelectorAll(".popup-btn");
    const modal = document.querySelector(".popup");
    const modalClose = modal.querySelector(".popup-close");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });
    // console.log(modal);
};

export default modal;