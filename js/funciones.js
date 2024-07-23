/*
 * Bingo
 * NESTOR DAVID RUIZ CANTE
 * Martes 09/07/2024
*/

let numeros = []; // Array para almacenar todos los números de la cuadrícula
let matriz = []; // Array 2D para almacenar los números en forma de matriz
let matrizX1 = []; // Array para almacenar los números de la primera matriz en forma de X
let matrizX2 = []; // Array para almacenar los números de la segunda matriz en forma de X
let matrizX3 = []; // Array para almacenar los números de la tercera matriz en forma de X
let matrizXGrande = []; // Array para almacenar los números de la matriz en forma de X grande

// Función para generar las matrices y los patrones X
function generarMatrices() {
    let numero = 1;
    // Crear la matriz principal con números
    for (let fila = 0; fila < 5; fila++) {
        matriz[fila] = [];
        for (let columna = 0; columna < 5; columna++) {
            matriz[fila][columna] = numero * 2; // Asignar el doble del número actual
            numero++;
        }
    }

    // Crear matrizX1 (diagonales principales y secundaria)
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            if (fila === columna || fila + columna === 2) matrizX1.push(matriz[fila][columna]);
        }
    }

    // Crear matrizX2 (diagonales en la parte inferior izquierda)
    for (let fila = 2; fila < 5; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            if (fila + columna === 4 || fila + columna === 2 * (columna + 1)) matrizX2.push(matriz[fila][columna]);
        }
    }

    // Crear matrizX3 (diagonales en la parte superior derecha)
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 2; columna < 5; columna++) {
            if (fila + columna === 4 || fila + columna === 2 * (fila + 1)) matrizX3.push(matriz[fila][columna]);
        }
    }

    // Crear matrizXGrande (diagonales principales)
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === j || i + j === 4) matrizXGrande.push(matriz[i][j]);
        }
    }
}

// Función para crear la cuadrícula y los elementos de la interfaz
function crearCuadricula() {
    let contenedorPrincipal = document.getElementById('grid-container');
    contenedorPrincipal.innerHTML = ''; // Limpiar el contenido previo

    let contenedorPrincipalDiv = document.createElement('div');
    contenedorPrincipalDiv.classList.add('container');

    let columnaCarton = document.createElement('div');
    columnaCarton.classList.add('col-4', 'row', 'carton');

    let tituloDiv = document.createElement('div');
    tituloDiv.classList.add('titulo');

    // Crear los encabezados de las columnas B, I, N, G, O
    let letras = ['B', 'I', 'N', 'G', 'O'];
    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i];
        let p = document.createElement('p');
        p.id = `letra${letra}Boton`;
        p.textContent = letra;
        tituloDiv.appendChild(p);
    }

    let bingoDiv = document.createElement('div');
    bingoDiv.classList.add('bingo');

    let contenedorCuadricula = document.createElement('div');
    contenedorCuadricula.id = 'grid-container';
    contenedorCuadricula.classList.add('container');
    bingoDiv.appendChild(contenedorCuadricula);

    columnaCarton.appendChild(tituloDiv);
    columnaCarton.appendChild(bingoDiv);

    // Crear botones para marcar X y X grande
    let columnaBotones = document.createElement('div');
    columnaBotones.classList.add('col-5', 'container_botones');

    let botones = [['letraXBoton', 'x'], ['bigXBoton', 'X']];
    for (let i = 0; i < botones.length; i++) {
        let [id, texto] = botones[i];
        let boton = document.createElement('button');
        boton.id = id;
        boton.classList.add('Boton', 'btn-primary', 'm-2');
        boton.textContent = texto;
        columnaBotones.appendChild(boton);
    }

    contenedorPrincipalDiv.appendChild(columnaCarton);
    contenedorPrincipalDiv.appendChild(columnaBotones);
    contenedorPrincipal.appendChild(contenedorPrincipalDiv);

    // Crear la cuadrícula del Bingo
    for (let fila = 0; fila < 5; fila++) {
        let filaDiv = document.createElement('div');
        filaDiv.classList.add('row');
        for (let columna = 0; columna < 5; columna++) {
            let columnaDiv = document.createElement('div');
            columnaDiv.classList.add('col', 'numero');
            let numero = matriz[fila][columna];
            columnaDiv.textContent = numero;
            columnaDiv.setAttribute('data-numero', numero);
            numeros.push(numero);
            columnaDiv.addEventListener('click', () => columnaDiv.classList.toggle('clicked'));
            filaDiv.appendChild(columnaDiv);
        }
        contenedorCuadricula.appendChild(filaDiv);
    }
}



// Función para marcar los números en la cuadrícula según el patrón
function marcarNumeros(patron) {
    let celdas = document.querySelectorAll('.numero');
    for (let i = 0; i < celdas.length; i++) {
        let celda = celdas[i];
        let numero = parseInt(celda.getAttribute('data-numero'), 10);
        celda.classList.toggle('clicked', patron.includes(numero));
    }
}

// Crear funciones dinámicas para marcar las columnas B, I, N, G, O
let letras = ['B', 'I', 'N', 'G', 'O'];
for (let i = 0; i < letras.length; i++) {
    let letra = letras[i];
    window[`marcarColumna${letra}`] = () => marcarColumna(i);
}

// Función para marcar todos los números de una columna específica
function marcarColumna(columnaIndex) {
    let numerosColumna = [];
    for (let fila = 0; fila < 5; fila++) {
        numerosColumna.push(matriz[fila][columnaIndex]);
    }
    marcarNumeros(numerosColumna);
}

// Función para marcar todos los números en forma de X
function marcarX() {
    marcarNumeros([...matrizX1, ...matrizX2, ...matrizX3]);
}

// Función para marcar todos los números en forma de X grande
function marcarXGrande() {
    marcarNumeros(matrizXGrande);
}

// Ejecutar la generación de matrices y la creación de la cuadrícula
generarMatrices();
crearCuadricula();

// Asignar eventos a los botones para marcar columnas y patrones
document.getElementById('letraBBoton').addEventListener('click', marcarColumnaB);
document.getElementById('letraIBoton').addEventListener('click', marcarColumnaI);
document.getElementById('letraNBoton').addEventListener('click', marcarColumnaN);
document.getElementById('letraGBoton').addEventListener('click', marcarColumnaG);
document.getElementById('letraOBoton').addEventListener('click', marcarColumnaO);
document.getElementById('letraXBoton').addEventListener('click', marcarX);
document.getElementById('bigXBoton').addEventListener('click', marcarXGrande);
