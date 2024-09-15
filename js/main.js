let body = document.querySelector('body');
let lightModeToggle = document.querySelector('#lightMode');

lightModeToggle.addEventListener('click', function () {
  let light = document.body.style.backgroundColor;

  document.body.style.backgroundColor =
    light === 'rgb(235, 235, 235)' ? 'rgb(25, 25, 25)' : 'rgb(235, 235, 235)';
});

lightModeToggle.addEventListener('click', function () {
  let pContLight = document.querySelector('#pCont').style.color;

  document.querySelector('#pCont').style.color =
    pContLight === 'rgb(115, 115, 115)'
      ? 'rgb(255, 228, 196)'
      : 'rgb(115, 115, 115)';
});

lightModeToggle.addEventListener('click', function () {
  let pLocLight = document.querySelector('#pLoc').style.color;

  document.querySelector('#pLoc').style.color =
    pLocLight === 'rgb(115, 115, 115)'
      ? 'rgb(255, 228, 196)'
      : 'rgb(115, 115, 115)';
});
