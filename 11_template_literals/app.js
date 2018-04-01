const name = 'Yaroslav';
const age = 25;
const job = 'Web Developer';
const city = 'Poltava';
let html;

// Without template literals (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

function hello() {
  return 'Hello World';
}

// With template literals
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 4}</li>
    <li>${hello()}</li>
    <li>${age >= 25 ? 'Over or equal 25' : 'Under 25'}</li>
  </ul>
`;

document.body.innerHTML = html;