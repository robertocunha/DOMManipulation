const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const visibleCheckbox = document.getElementById("visibleCheckBoxId");

const textP = document.getElementById("textPId");

let visible = true;

function updateVisibility(visibleState) {
    visible = visibleState;
    textP.style.opacity = visible ? '1' : '0';
    visibleCheckbox.checked = visible;
}

hideButton.addEventListener("click", () => updateVisibility(false));
showButton.addEventListener("click", () => updateVisibility(true));

visibleCheckbox.addEventListener("change", (event) => {
    updateVisibility(event.currentTarget.checked);
});
