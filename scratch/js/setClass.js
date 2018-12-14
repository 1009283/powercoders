console.log('My code is running');

function greet(name) {
  console.log('Hello, ' + name);
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function setClassTip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = '';
}
