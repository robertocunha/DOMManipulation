const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const textP = document.getElementById("textPId");

hideButton.addEventListener("click", () => {
    textP.style.opacity = 0;
});

showButton.addEventListener("click", () => {
    textP.style.opacity = 100;
});