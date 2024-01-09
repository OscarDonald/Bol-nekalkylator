let amount = document.getElementById("amount") as HTMLInputElement;
let interest = document.getElementById("interest") as HTMLInputElement;
let paybackTime = document.getElementById("paybackTime") as HTMLInputElement;
let calculateButton = document.getElementById("calculate") as HTMLButtonElement;
let results = document.getElementById("result") as HTMLHeadingElement;

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