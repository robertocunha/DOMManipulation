const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const visibleCheckbox = document.getElementById("visibleCheckBoxId");
const hideRadio = document.getElementById("hideRadioId");
const showRadio = document.getElementById("showRadioId");

const textP = document.getElementById("textPId");

let visible = true;

function updateVisibility(visibleState) {
    visible = visibleState;
    textP.style.opacity = visible ? '1' : '0';

    visibleCheckbox.checked = visible;

    if (visible) {
        showRadio.checked = true;
    } else {
        hideRadio.checked = true;
    }
}

hideButton.addEventListener("click", () => updateVisibility(false));
showButton.addEventListener("click", () => updateVisibility(true));

visibleCheckbox.addEventListener("change", (event) => updateVisibility(event.currentTarget.checked));

hideRadio.addEventListener("change", () => updateVisibility(false));
showRadio.addEventListener("change", () => updateVisibility(true));
