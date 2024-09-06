const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");

const textP = document.getElementById("textPId");
console.log(textP);

hideButton.addEventListener("click", () => {
    textP.style.display = "none";
});

showButton.addEventListener("click", () => {
    textP.style.display = "block";
});