const form = document.getElementById("interestForm");
const interestOutput = document.getElementById("interest");
const totalOutput = document.getElementById("total");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(time) ||
    principal < 0 ||
    rate < 0 ||
    time < 0
  ) {
    alert("Please enter valid non-negative values.");
    return;
  }

  const simpleInterest = (principal * rate * time) / 100;
  const totalAmount = principal + simpleInterest;

  interestOutput.textContent = `₹${simpleInterest.toFixed(2)}`;
  totalOutput.textContent = `₹${totalAmount.toFixed(2)}`;
});
