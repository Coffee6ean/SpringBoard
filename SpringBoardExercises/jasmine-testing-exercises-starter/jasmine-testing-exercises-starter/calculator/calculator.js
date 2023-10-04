window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 10000, years: 10, rate: 4.5};
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = values["amount"];
  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values["years"];
  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values["rate"];
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(updatedValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values["amount"];
  const rate = values["rate"];
  const years = values["years"];
  let i = (rate/100) / 12;
  let n = years * 12;

  let monthlyPayment = ((principle * i)/(1 - Math.pow((1 + i), -n))).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const string = "$" + monthly;
  const span = document.querySelector("#monthly-payment");

  span.innerText = string;
}
