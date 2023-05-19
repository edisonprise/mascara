const inputCard = document.querySelector("#inputCard"); // aqui referenciamos los inputs
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = "####-####-####-####";
const maskDate = "##/##";
const maskCVV = "###";

let current = "";
let cardNumber = []; //aqui almacenamos los valores para despues mostrarlos en mi input
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    // no quiero aplicar ningun cambio
    return;
  }

  e.preventDefault(); // me permite cancelar la funcion
  handleInput(maskNumber, e.key, cardNumber); // funcion que no ha sido creada
  inputCard.value = cardNumber.join(""); // paso intermedio para darle formato y lo uno
});

inputDate.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    // no quiero aplicar ningun cambio
    return;
  }
  e.preventDefault(); // me permite cancelar la funcion
  handleInput(maskDate, e.key, dateNumber); // dateNumber es un arr
  inputDate.value = dateNumber.join("");
});

inputCVV.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    // no quiero aplicar ningun cambio
    return;
  }
  e.preventDefault(); // me permite cancelar la funcion
  handleInput(maskCVV, e.key, cvvNumber); // dateNumber es un arr
  inputCVV.value = cvvNumber.join("");
});

function handleInput(mask, key, arr) {
  // aca el arr era cardNumber
  // esta funcion se ejecuta cuando presiono una tecla, key: tecla presionando
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // procesa los numeros del teclado/teclas permitidas

  if (key === "Backspace" && arr.length > 0) {
    // aqui estamos simulando que estoy eliminando caracteres
    arr.pop();
    return;
  }
  if (numbers.includes(key) && arr.length + 1 <= mask.length) {
    // si yo estoy presionando una tecla que existe dentro de este arreglo numbers
    if (mask[arr.length] === "-" || mask[arr.length] === "/") {
      // aqui evaluamos en que posicion va el input con respecto al patron de separacion
      arr.push(mask[arr.length], key); // si la anterior condicion se cumple voy a ingresar 2 elementos: -, numero
    } else {
      arr.push(key); // si no se cumple solo agrego el numero
    }
  }
}
