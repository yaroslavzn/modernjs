// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();
  let val;
  val = e;

  // Event target
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}