const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const visibleCheckbox = document.getElementById("visibleCheckBoxId");

const textP = document.getElementById("textPId");

let visible = true;

function toggleOpacity (element, visible) {
    element.style.opacity = visible? 100 : 0;
}

hideButton.addEventListener("click", () => {
    visible = false;
    toggleOpacity(textP, visible);
    visibleCheckbox.checked = visible;
});

showButton.addEventListener("click", () => {
    visible = true;
    toggleOpacity(textP, visible);
    visibleCheckbox.checked = visible;
});

visibleCheckbox.addEventListener("change", (event) => {
    visible = event.currentTarget.checked;
    toggleOpacity(textP, visible);
})