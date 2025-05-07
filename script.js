const paragraphs = document.querySelectorAll("p");
const F = paragraphs[0];
const K = paragraphs[1];
const R = paragraphs[2];

let Farenheit = null;
let Kelvin = null;
let Reamur = null;
let result = null;

function convertSuhu(C, num1, num2, num3) {
  if (num1 === "F") {
    result = C * 1.8 + 32;
    Farenheit = `Hasil Suhu yang anda konversi dari C ke F adalah ${result}`;
  }

  if (num2 === "K") {
    result = C + 273.15;
    Kelvin = `Hasil Suhu yang anda konversi dari C ke K adalah ${result}`;
  }

  if (num3 === "R") {
    result = (C * 4) / 5;
    Reamur = `Hasil Suhu yang anda konversi dari C ke R adalah ${result}`;
  }

  F.textContent = Farenheit;
  K.textContent = Kelvin;
  R.textContent = Reamur;
}

convertSuhu(62, "F", "K", "R");
