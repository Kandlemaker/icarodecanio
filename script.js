const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //close function
    const closeBtn = document.createElement("i");
    modal.append(newImage, closeBtn);
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            modal.remove();
            newImage.remove();
        }
    })
};