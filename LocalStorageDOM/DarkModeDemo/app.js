function init() {
    const toggleSwitch = document.querySelector("input[type='checkbox']");
    
    if(localStorage.getItem("darkModeEnabled")) {
        document.body.className = "dark";
        toggleSwitch.checked = true;
    }
    
    toggleSwitch.addEventListener("click", function(event) {
        //console.log(toggleSwitch.checked);
        const {checked} = toggleSwitch;
        if(checked) {
            localStorage.setItem("darkModeEnabeld", true);
        } else {
            localStorage.removeItem("darkModeEnabled");
        }

        document.body.className = checked ? "dark" : "";
    });
}

document.addEventListener("DOMContentLoaded", init);