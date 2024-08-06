document.addEventListener("DOMContentLoaded", function(){
    let toggleBtn = document.querySelector("#toggle-btn");
    toggleBtn.addEventListener("click", toggleDropdown);
})

// let buttonState = false;

function toggleDropdown(){
    let toggleBtn = document.querySelector("#toggle-btn");
    if(toggleBtn.innerText == "Disable"){
        toggleBtn.innerText = "Enable"
    }
    else{
        toggleBtn.innerText = "Disable"
    }
}