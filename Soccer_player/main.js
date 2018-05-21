var player = document.querySelector("#player")
var field = document.querySelector("#field")
var movingButton = document.querySelector(".disable")
var isTurnOn = true;

function movePlayer(event) {
    var x = event.offsetX - 100;
    var y = event.offsetY - 100;
    var styleValue = "top:" + y + "px;left:" + x + "px";
    player.setAttribute("style", styleValue);
}

function controlMoving() {
    if (isTurnOn) {
        field.removeEventListener("click", movePlayer);
        controlMoving.textContent = "Start moving";
        isTurnOn = false;
    } else {
        field.addEventListener("click", movePlayer);
        controlMoving.textContent = "Stop moving";
        isTurnOn = true;
    }
}

field.addEventListener("click", movePlayer);
movingButton.addEventListener("click", controlMoving);