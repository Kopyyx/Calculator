const inputResult = document.querySelector("#inputResult");
const buttons = document.querySelector(".buttons");
const buttonsList = buttons.getElementsByTagName("button")

for (let button of buttonsList) {
    if (button.id !== "clear" && button.id !== "del" && button.id !== "=") {
        button.addEventListener("click", function () {
            inputResult.value += button.id;
        });
    }
}

function backspace() {
    const num = inputResult.value.slice(0, - 1);
    inputResult.value = num;
}

function getResult() {
    inputResult.value = eval(inputResult.value);
}

function clearDisplay() {
    inputResult.value = " ";
}