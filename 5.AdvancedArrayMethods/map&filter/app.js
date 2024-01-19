const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
/*
const checked = Array.from(allCheckboxes).filter(function(box) {
    return box.checked;
});

const completedItems = checked.map(function(checkbox) {
    return checkbox.parentElement.innerText;
});
*/

function extractCompletedToDos() {
    return Array.from(allCheckboxes).filter(function(box) {
        return box.checked;
    })
    .map(function(checkbox) {
        return checkbox.parentElement.innerText;
    });

}