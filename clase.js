let nombre = "Juan";
let edad = 25;
let esEstudiante = true;
let ciudad = "Medellín";
let altura = 1.75;

const pi = 3.1416;
const gravedad = 9.8;
const nombreUniversidad = "Pascual Bravo";
const maxUsuarios = 100;
const isLoggedIn = false;

const saludar = () => console.log("¡Hola, mundo");

// Función tipo flecha con 0 parámetros validaciones
const saludarConValidacion = () => {
    let hora = new Date().getHours();
    if (hora < 12) {
        console.log("Buenos días");
    } else if (hora < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
};

// Función tipo flecha con 1 parámetro 
const cuadrado = num => num * num;

//  Función tipo flecha con 1 parámetro con validación
const cuadradoValidado = num => {
    if (typeof num !== 'number') {
        return "Error, Debes ingresar un número.";
    }
    return num * num;
};

const sumar = (a, b) => a + b;

const sumarConValidacion = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error, Ambos valores deben ser números.";
    }
    
    switch (true) {
        case a < 0:
            console.log("El primer número es negativo.");
            break;
        case b < 0:
            console.log("El segundo número es negativo.");
            break;
        default:
            console.log("Ambos números son positivos.");
    }
    
    return a + b;
};
