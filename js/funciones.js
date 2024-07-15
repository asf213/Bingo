/**
 * Bingo
 * Martin Stiben Narvaez
 * Martes 09/07/2024
 */

let numbers = [];

function createGrid() {
    let container = document.getElementById('grid-container');
    for (let i = 0; i < 5; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 5; j++) {
            let col = document.createElement('div');
            col.classList.add('col', 'numero');
            let number = (i * 5 + j + 1) * 5; // Cambia la lógica según tus necesidades
            col.textContent = number;
            col.setAttribute('data-number', number);
            numbers.push(number);

            col.addEventListener('click', function() {
                col.classList.toggle('clicked');
            });

            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

function getRandomNumber() {
    let availableNumbers = numbers.filter(number => {
        let div = document.querySelector(`div[data-number='${number}']`);
        return !div.classList.contains('clicked');
    });

    if (availableNumbers.length === 0) {
        document.getElementById('status').textContent = "Bingo!";
        return null;
    }

    let randomIndex = Math.floor(Math.random() * availableNumbers.length);
    return availableNumbers[randomIndex];
}

function showRandomNumber() {
    let randomNumber = getRandomNumber();
    if (randomNumber !== null) {
        let generatedNumberDiv = document.querySelector('.cuadrado');
        generatedNumberDiv.textContent = `${randomNumber}`;
        return randomNumber;
    }
}

function letraB() {
    let grid = document.querySelectorAll('.numero');
    let bNumeros = [0, 1, 2, 3, 5, 9, 10, 11, 12, 13, 15, 19, 20, 21, 22, 23];
    grid.forEach((cell, index) => {
        if (bNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letraI() {
    let grid = document.querySelectorAll('.numero');
    let iNumeros = [0, 1, 2, 3, 4, 7, 12, 17, 20, 21, 22, 23, 24];
    grid.forEach((cell, index) => {
        if (iNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letraN() {
    let grid = document.querySelectorAll('.numero');
    let nNumeros = [0, 4, 5, 6, 9, 10, 12, 14, 15, 18, 19, 20, 24];
    grid.forEach((cell, index) => {
        if (nNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letraG() {
    let grid = document.querySelectorAll('.numero');
    let gNumeros = [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24];
    grid.forEach((cell, index) => {
        if (gNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letraO() {
    let grid = document.querySelectorAll('.numero');
    let oNumeros = [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24];
    grid.forEach((cell, index) => {
        if (oNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letraX() {
    let grid = document.querySelectorAll('.numero');
    let xNumeros = [0, 4, 6, 8, 12, 16, 18, 20, 24];
    grid.forEach((cell, index) => {
        if (xNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

function letrasXXX() {
    let grid = document.querySelectorAll('.numero');
    let xxxNumeros = [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 22];
    grid.forEach((cell, index) => {
        if (xxxNumeros.includes(index)) {
            cell.classList.add('clicked');
        } else {
            cell.classList.remove('clicked');
        }
    });
}

createGrid();

document.getElementById('randomButton').addEventListener('click', showRandomNumber);
document.getElementById('letraBButton').addEventListener('click', letraB);
document.getElementById('letraIButton').addEventListener('click', letraI);
document.getElementById('letraNButton').addEventListener('click', letraN);
document.getElementById('letraGButton').addEventListener('click', letraG);
document.getElementById('letraOButton').addEventListener('click', letraO);
document.getElementById('letraXButton').addEventListener('click', letraX);
document.getElementById('letrasXXXButton').addEventListener('click', letrasXXX);