let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;


function chequearResultado(){
  intentos++;
  intento.textContent = intentos
  let numeroIngresado = parseInt(numeroEntrada.value);

  if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
    mensaje.textContent = 'Por favor, introduce un número valido entre 1 y 100'
    return
  }if(numeroIngresado === numeroAzar){
    mensaje.textContent = '🎉 Felicitaciones, has adivinado el número 🎉';
    mensaje.style.color = 'white';
    numeroEntrada.disabled = true;
  }else if(numeroIngresado < numeroAzar){
    mensaje.textContent = '⛔ El número es mayor al que ingresaste ⛔';
    mensaje.style.color = 'red';
  }else{
    mensaje.textContent = '⛔ El número es menor al que ingresaste ⛔';
    mensaje.style.color = 'red';
  }
  
}