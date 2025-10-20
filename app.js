function drawGrid(gridSize){

const container = document.querySelector("#container");

function getRandomInt(){
    min = 0;
    max = 255;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




for(let i = 1; i <= gridSize; i++){
    const line = document.createElement("div");
    line.style.display = 'flex';
    line.style.flex = "1";
    
    for(let k = 1; k <= gridSize; k++){
        const redValue = getRandomInt();
        const blueValue = getRandomInt();
        const greenValue = getRandomInt();
        const star = document.createElement("div");
        star.style.border = "1px solid black";
        star.style.flex = "1";
        star.addEventListener('mouseover', () => {
            star.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue})`;
        })
        line.appendChild(star);
    }
    container.appendChild(line);
}}

drawGrid(16)

function changeNumOfSquares(){
    gridSize = prompt("Enter Number of Square. max 100");
    if (gridSize > 100){
        gridSize = 100;
    }
    container.replaceChildren();
    drawGrid(gridSize)
}
