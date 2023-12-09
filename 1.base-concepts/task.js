"use strict";

let a;
let b;
let c;

function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  };

  return arr;
}

let percent;
let contribution;
let amount;
let countMonths;

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = (S * (P + (P / (((1 + P) ** n) - 1))));
  let totalAmount = monthlyPayment * countMonths;

  return(Number(totalAmount.toFixed(2)));
}