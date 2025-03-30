window.onload = getScript;

function getScript() {
    let userScript = prompt("Paste your script here:", "This is a test script. Adjust the speed and see how it works!");
    if (userScript) {
        document.getElementById("script").innerText = userScript;
        document.querySelector(".container").style.display = "block";
    }
}

let speed = 50;
let speedLevel = 10;
let scrollInterval;

function startScroll() {
    let script = document.getElementById("script");
    let position = 0;
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        position -= 1;
        script.style.top = position + "px";
    }, speed);
}

function stopScroll() {
    clearInterval(scrollInterval);
}

function increaseSpeed() {
    if (speedLevel < 100) {
        speedLevel += 10;
        speed = Math.max(10, speed - 5);
        updateSpeedDisplay();
    }
}

function decreaseSpeed() {
    if (speedLevel > 10) {
        speedLevel -= 10;
        speed = Math.min(100, speed + 5);
        updateSpeedDisplay();
    }
}

function updateSpeedDisplay() {
    document.getElementById("speedDisplay").innerText = `Speed: ${speedLevel}x`;
}