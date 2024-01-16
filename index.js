"use strict";
let amount = document.getElementById("amount");
let interest = document.getElementById("interest");
let paybackTime = document.getElementById("paybackTime");
let calculateButton = document.getElementById("calculate");
let results = document.getElementById("result");
calculateButton.addEventListener("click", calculateMonthlyCost);
function calculateMonthlyCost() {
    const maxAmount = 100000000;
    const maxInterest = 5000;
    const maxYears = 50;
    let P = parseInt(amount.value);
    let r = parseInt(interest.value) / 1200;
    let n = parseInt(paybackTime.value) * 12;
    if (P > maxAmount) {
        alert("Ogiltig insatt summa");
        return;
    }
    else if (r > maxInterest / 1200) {
        alert("Ogiltig räntesats");
        return;
    }
    else if (n > maxYears * 12) {
        alert("Du kan inte låna för mer än 50 år.");
        return;
    }
    const M = Math.round((P * (r * (1 + r) ** n)) / ((1 + r) ** n - 1));
    const totalCost = M * n;
    const totalInterest = totalCost - P;
    results.innerHTML = `
  <div>Månadskostnad: ${M.toString()} kr/månaden</div>
  <div>Total räntekostnad: ${totalInterest}kr</div>
  <div>Totala kostnaden efter ${n / 12} år: ${totalCost}</div>`;
}
