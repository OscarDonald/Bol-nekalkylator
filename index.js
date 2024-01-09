"use strict";
let amount = document.getElementById("amount");
let interest = document.getElementById("interest");
let paybackTime = document.getElementById("paybackTime");
let calculateButton = document.getElementById("calculate");
let results = document.getElementById("result");
calculateButton.addEventListener("click", () => {
    calculateMonthlyCost();
});
function calculateMonthlyCost() {
    const P = parseInt(amount.value);
    const r = parseInt(interest.value) / 100 / 12;
    const n = parseInt(paybackTime.value) * 12;
    const M = Math.round((P * (r * (1 + r) ** n)) / ((1 + r) ** n - 1));
    const totalCost = M * n;
    const totalInterest = totalCost - P;
    results.innerHTML = `
  <div>Månadskostnad: ${M.toString()} kr/månaden</div>
  <div>Total räntekostnad: ${totalInterest}kr</div>
  <div>Totala kostnaden efter ${n / 12} år: ${totalCost}</div>`;
}
