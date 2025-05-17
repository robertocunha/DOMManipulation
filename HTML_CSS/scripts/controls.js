const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const visibleCheckbox = document.getElementById("visibleCheckBoxId");
const hideRadio = document.getElementById("hideRadioId");
const showRadio = document.getElementById("showRadioId");
const textP = document.getElementById("textPId");

let visible = true;
syncControlsWithVisibility();


function setTextVisibility(visibleState) {
    if (typeof visibleState !== "boolean") {
        throw new Error(`setTextVisibility: expected boolean, got ${typeof visibleState}`);
    }

    visible = visibleState;
    textP.style.opacity = visible ? "1" : "0";
}

function syncControlsWithVisibility() {
    visibleCheckbox.checked = visible;
    showRadio.checked = visible;
    hideRadio.checked = !visible;
}

function updateVisibility(visibleState) {
    setTextVisibility(visibleState);
    syncControlsWithVisibility();
}

// Event listeners
hideButton.addEventListener("click", () => {
    try {
        updateVisibility(false);
    } catch (err) {
        console.error(err);
    }
});

showButton.addEventListener("click", () => {
    try {
        updateVisibility(true);
    } catch (err) {
        console.error(err);
    }
});

visibleCheckbox.addEventListener("change", (event) => {
    try {
        updateVisibility(event.currentTarget.checked);
    } catch (err) {
        console.error(err);
    }
});

hideRadio.addEventListener("change", () => {
    try {
        updateVisibility(false);
    } catch (err) {
        console.error(err);
    }
});

showRadio.addEventListener("change", () => {
    try {
        updateVisibility(true);
    } catch (err) {
        console.error(err);
    }
});
