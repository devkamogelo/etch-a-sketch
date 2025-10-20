function drawGrid(gridSize){

const container = document.querySelector("#container");

for(let i = 1; i <= gridSize; i++){
    const line = document.createElement("div");
    line.style.display = 'flex';
    line.style.flex = "1";
    
    for(let k = 1; k <= gridSize; k++){
        const star = document.createElement("div");
        star.style.border = "1px solid black";
        star.style.flex = "1";
        star.addEventListener('mouseover', () => {
            star.style.backgroundColor = "black";
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
