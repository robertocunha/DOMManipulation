// https://chatgpt.com/share/68431414-6e94-8008-8fe6-bc3625f7be83
// Há mais três sugestões que valem a pena analisar

const hideButton = document.getElementById("hideButtonId");
const showButton = document.getElementById("showButtonId");
const visibleCheckbox = document.getElementById("visibleCheckBoxId");
const hideRadio = document.getElementById("hideRadioId");
const showRadio = document.getElementById("showRadioId");
const textP = document.getElementById("textPId");

let visible = true;
syncControlsWithVisibility(visible);

function setTextVisibility(visibleState) {
    textP.classList.toggle("visible", visibleState);
    textP.classList.toggle("hidden", !visibleState);
}

function syncControlsWithVisibility(currentState) {
    visibleCheckbox.checked = currentState;

    showRadio.checked = currentState;
    hideRadio.checked = !currentState;

    showButton.classList.toggle("active", currentState);
    hideButton.classList.toggle("active", !currentState);
}


function setVisibility(newState) {
    if (typeof newState !== "boolean") {
        throw new Error(`setVisibility: expected boolean, got ${typeof newState}`);
    }

    visible = newState;
    setTextVisibility(newState);
    syncControlsWithVisibility(newState);
}


// Event listeners
hideButton.addEventListener("click", () => {
    try {
        setVisibility(false);
    } catch (err) {
        console.error(err);
    }
});

showButton.addEventListener("click", () => {
    try {
        setVisibility(true);
    } catch (err) {
        console.error(err);
    }
});

visibleCheckbox.addEventListener("change", (event) => {
    try {
        setVisibility(event.currentTarget.checked);
    } catch (err) {
        console.error(err);
    }
});

hideRadio.addEventListener("change", () => {
    try {
        setVisibility(false);
    } catch (err) {
        console.error(err);
    }
});

showRadio.addEventListener("change", () => {
    try {
        setVisibility(true);
    } catch (err) {
        console.error(err);
    }
});
