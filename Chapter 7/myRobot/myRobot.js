document.getElementById("lefteye").style.backgroundColor = "blue";
document.getElementById("head").style.transform = "rotate(6deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";
// Round the corners of his mouth.
// document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("lefteye").style.border = "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#dadada";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "10px black solid";

var state = "idle"; 
// idle → movingRight → waitingForArm → finishing

var head = document.getElementById("head");
head.addEventListener("click", startHeadMove);


var headLeft = 33;
var headTop = 0;
var headTimer;

function startHeadMove(e) {
    if (state !== "idle") return;

state = "movingRight";

    headTimer = setInterval(function () {
        headLeft++;
        head.style.left = headLeft + "%";

        if (headLeft >= 79) { // where arm is
            clearInterval(headTimer);
            state = "waitingForArm";
        }
    }, 25);
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", collapseArmAndContinue);

var armLeft = 76;

function collapseArmAndContinue(e) {
    if (state !== "waitingForArm") return;

    state = "finishing";

// collapse arm
    var armTimer = setInterval(function () {
        armLeft--;
        leftArm.style.left = armLeft + "%";

        if (armLeft <= 40) {
            clearInterval(armTimer);
            moveHeadHome();
        }
    }, 8);
}

function moveHeadHome() {
    var direction = "down";

    headTimer = setInterval(function () {

        if (direction === "down") {
            headTop++;
            head.style.top = headTop + "%";
            if (headTop >= 80) direction = "left";
        }
    }, 4);
}

function moveHeadHome() {
    var direction = "down";

    headTimer = setInterval(function () {

        if (direction === "down") {
            headTop++;
            head.style.top = headTop + "%";

            // Head reached the bottom
            if (headTop >= 80) {
                clearInterval(headTimer);
                state = "done"; // animation finished
            }
        }

    }, 4);
}

function startHeadMove(e) {

    // RESET LOGIC
    if (state === "done") {
        resetAnimation();
        return;
    }

    // NORMAL START LOGIC
    if (state !== "idle") return;

    state = "movingRight";

    headTimer = setInterval(function () {
        headLeft++;
        head.style.left = headLeft + "%";

        if (headLeft >= 79) {
            clearInterval(headTimer);
            state = "waitingForArm";
        }
    }, 25);
}

function resetAnimation() {
    // Reset positions
    headLeft = 35;
    headTop = 1;
    armLeft = 76;

    // Apply styles
    head.style.left = headLeft + "%";
    head.style.top = headTop + "%";
    leftArm.style.left = armLeft + "%";

    // Reset state
    state = "idle";
}