console.log("Hello world");

// Déclaration de variables / constantes
let a = 1;
const b = 2;
// var est historique et n'est plus trop recommandé de l'utiliser, on peut l'oublier 99% du temps
// La différence entre var et let se situe sur la portée des variables
var c = 3;

// Exemple de différence de portée de variable

// if (true) {
//     var d = 4;
//     let e = 5;
// }
// // Sera affiché, car la portée de var va au delà d'un bloc if/for/while...
// console.log(d);
// // Alors qu'une variable déclarée avec let ne sera pas accessible => ReferenceError
// console.log(e);

// Liste des types primitifs en JavaScript
const unBoolean = true; // true / false => type boolean
const unNombre = 12; // type number
const uneDecimale = 12.5; // type number
const uneChaineDeCaracteres = "Hello"; // type string
const nonDefini = undefined; // type undefined
const rien = null; // type null
const unSymbol = Symbol();
// BigInt

// En JavaScript, tout est objet (prototype d'objet)

// Type fonction
function addition(n1, n2) {
    return n1 + n2;
}

// Type tableau
const unTableau = ["Hello", 1, true, null, undefined, [1, 2, 3], function () {}];

// Type objet literal avec la syntaxe JSON (JavaScript Object Notation)
const uneVoiture = {
    marque: "Audi",
    modele: "A3",
    couleur: "rouge",
    year: 2010,
    isStillBuilt: true,
    motor: {
        power: 200,
        type: "diesel"
    },
    // Fonction rattaché à un objet => ça s'appelle une méthode
    getPower: function () {
        return this.motor.power;
    }
}

// JavaScript est un langage non typé et dynamique

let oiseau = "pigeon";
console.log(typeof oiseau); // string
oiseau = 3;
console.log(typeof oiseau); // number

console.log(addition(1, "2"));