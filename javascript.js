let gridSize = 16;
let gridContainter = document.querySelector('#gridContainer');

function createGrid(gridSize) {
    for (i = 0; i < gridSize*gridSize; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `${600/gridSize}px`;
        grid.style.height = `${600/gridSize}px`;
        gridContainter.appendChild(grid);
    }
}

createGrid(gridSize);