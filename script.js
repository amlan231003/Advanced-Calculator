function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function appendValue(value) {
    const display = document.getElementById("display");
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function backspace() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.innerText);
        addToHistory(display.innerText + " = " + result);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}

function addToHistory(entry) {
    const historyList = document.getElementById("history");
    const newHistoryItem = document.createElement("li");
    newHistoryItem.innerText = entry;
    historyList.prepend(newHistoryItem);
}

function clearHistory() {
    const historyList = document.getElementById("history");
    historyList.innerHTML = "";
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
        appendValue(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});