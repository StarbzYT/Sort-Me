// sort data func
let sortInput = () => {
    const input = document.getElementById("input").value;
    const splitInput = input.split(" ");
    const sortedInput = splitInput.sort().join(" ");
    document.getElementById("sorted").innerHTML = sortedInput;
}
// grab buttons
const sortButton = document.getElementById("sort-button");
const clearButton = document.getElementById("clear-button");
// check if button is clicked, if it is call sortInput
if (sortButton) {
    sortButton.addEventListener("click", () => {
        sortInput();
    });
}
// if clear button is clicked, clear textbox and card
if (clearButton) {
    clearButton.addEventListener("click", () => {
        document.getElementById("input").value = "";
        document.getElementById("sorted").innerHTML = "";
    })
}

