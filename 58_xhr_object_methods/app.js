document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector('.output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.send();

  xhr.onerror = function() {
    console.log('Some error...');
  }

  // HTTP STATUSES
  // 200 - OK
  // 403 - FORBIDDEN
  // 404 - NOT FOUND

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}