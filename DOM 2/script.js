function applyBackground () {
    var scList = document.querySelector("#second")
    scList.className = "bg-color";
}

function selectAllLi () {
    var allLi = document.querySelectorAll("li");
    allLi.forEach(function(li){
        li.className = "bg-color";
    })
}

function addNiceClass () {
    var thirdLi = document.querySelectorAll("#third li");
    thirdLi.forEach(function(li){
        li.className = "nice";
    })
}

function switchClass () {
    var activeLi = document.querySelector(".active");
    activeLi.className = "";
    activeLi.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className = "active";
}

var parent = document.querySelector(".dropdown-list");
var list = ["posalji mi sliku","mercedes","audi","yugo","fica"];

function createDropdownList(arr, nodeParent) {
    var selectElementString = "<select>";
    arr.forEach(function(selectText){
        selectElementString += "<option>" + selectText + "</option>";
    });
    selectElementString += "</select>";
    nodeParent.innerHTML = selectElementString;
}

function createDOMDropdownList(arr, nodeParent){
    var select = document.createElement("select");
    arr.forEach(function(text){
        var option = document.createElement("option");
        option.textContent = text;
        select.appendChild(option);
    });
    nodeParent.appendChild(select);
}

function validateForm() {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input){
        if (input.hasAttribute("required") && input.value === "") {
            input.classList.add("required");
        }
    });
}


