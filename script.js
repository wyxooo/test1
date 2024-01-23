function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
  display.focus();
}

function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('display').focus();
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Chyba';
  }
  document.getElementById('display').focus();
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Escape') {
    clearDisplay();
  }
}

/* kod pro odmocninu */
function calculateSqrt() {
  let number = parseFloat(document.getElementById('display').value);
  document.getElementById('display').value = Math.sqrt(number);
  document.getElementById('display').focus();
}
 
/* kod pro mocninu */
function calculatePower() {
  let base = parseFloat(document.getElementById('display').value);
  let exponent = parseFloat(prompt('Vlož exponent:'));
  document.getElementById('display').value = Math.pow(base, exponent);
  document.getElementById('display').focus();
}

/* generátor náhodných slov */
function myFunction() {


var slova = ["Úžasný" , "Úžasná" , "Hezká" , "Hezký", "Chytrý", "Chytrá" ]
var slova2 = slova[Math.floor(Math.random() * slova.length)];

alert("Si " + slova2)}


/* Výpočet s konstantami (poloměr) */

const PI = 3.14;
const GRAVITACE = 9.81;

function plochakruhu(r) {
  return PI * r ** 2;
}

function plocha() {
  let polomer1 = parseFloat(document.getElementById("polomer1").value);
  let polomer2 = parseFloat(document.getElementById("polomer2").value);

  let vysledek1 = plochakruhu(polomer1);
  let vysledek2 = plochakruhu(polomer2);

  document.getElementById("vysledekpolomer1").textContent = vysledek1;
  document.getElementById("vysledekpolomer2").textContent = vysledek2;
  
}
/* Výpočet s obvodu čtverce */
function vypocetObvodu(){
  var strana = parseFloat(document.getElementById("strana").value);
              var obvod = 4 * strana;



document.getElementById("vysledek").innerHTML="Obvod je: " + obvod;

}

/* Aritmetický průměr */
function ARprumer() {
  let numString = document.getElementById('cisla').value;
  let numArray = numString.split(",");
  let sum = 0;
  for (let num of numArray) {
    sum += parseFloat(num);
  }
  let average = sum / numArray.length;
  document.getElementById('averageResult').textContent = average;
}




