const containerR = 960;
const container = document.querySelector(".container");
container.style.width = `${containerR}px`;
const resetButton = document.querySelector(".btn");
resetButton.addEventListener("click", onReset);

function onReset() {
    let input = prompt("Please enter number of squares per side :");
    let n = Math.max(1, Math.min(100, input));
    drawGrid(n);
}

function drawGrid(n) {
    container.innerHTML = "";
    let squareR = Math.floor(containerR / n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${squareR}px`;
            square.style.height = `${squareR}px`;
            square.addEventListener("mouseover", onHover);
            container.appendChild(square);
        }
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;

}

function onHover(e) {
    e.target.style.backgroundColor = getRandomColor();
}

drawGrid(16);
