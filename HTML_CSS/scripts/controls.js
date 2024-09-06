const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const textP = document.getElementById("textPId");

hideButton.addEventListener("click", () => {
    textP.style.display = "none";
});

showButton.addEventListener("click", () => {
    if(textP.style.display === "none") {
        textP.style.display = "block";
    }
});