document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const jokesCount = document.querySelector('input[type=number]').value;
  const jokesList = document.querySelector('.jokes');
  
  while (jokesList.firstElementChild) {
    jokesList.removeChild(jokesList.firstElementChild);
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${jokesCount}`, true);

  xhr.onload = function() {
    let output = '';

    if (this.status === 200) {
      const jokes = JSON.parse(this.responseText);
      
      if (jokes.type === 'success') {
        jokes.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        })
      }
    } else {
      output += '<li>Something get wrong</li>';
    }

    jokesList.innerHTML += output;
  }

  xhr.send();

  e.preventDefault();
}