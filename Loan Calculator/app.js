// Add form event
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.querySelector('.results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResult, 2000);


  e.preventDefault();
});

// Calculate result function
function calculateResult() {
  // Get UI elements
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    // Show results
    document.querySelector('.results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    calcError('Please check you numbers');
  }
}

function calcError(errorMsg) {
  // Hide results
  document.querySelector('.results').style.display = 'none';
  // Hide loader
  document.getElementById('loading').style.display = 'none';
  // Create error div
  const errorDiv = document.createElement('div');
  // Add classes
  errorDiv.className = 'alert alert-danger';
  // Add error message
  errorDiv.appendChild(document.createTextNode(errorMsg));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Insert error div into card
  card.insertBefore(errorDiv, heading);

  setTimeout(removeError, 3000);
}

function removeError() {
  const errorDiv = document.querySelector('.alert');

  errorDiv.remove();
}