const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        modal.classList.toggle("show");
        modal.classList.toggle("hidden");
    });
};
