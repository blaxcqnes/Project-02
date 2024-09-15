let toggleOne = document.querySelector('#toggleOne');
let lightModeToggleOne = document.querySelector('#lightModeOne');
let lightModeToggleTwo = document.querySelector('#lightModeTwo');
let header = document.querySelector('#header');
let navBar = document.querySelector('#navBar');

lightModeToggleOne.addEventListener('click', function () {
  let light = document.querySelector('body').style.backgroundColor;

  document.querySelector('body').style.backgroundColor =
    light === 'rgb(235, 235, 235)' ? 'rgb(25, 25, 25)' : 'rgb(235, 235, 235)';
});

lightModeToggleOne.addEventListener('click', function () {
  let pContLight = document.querySelector('#pCont').style.color;

  document.querySelector('#pCont').style.color =
    pContLight === 'rgb(130, 130, 130)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(130, 130, 130)';
});

lightModeToggleOne.addEventListener('click', function () {
  let pLocLight = document.querySelector('#pLoc').style.color;

  document.querySelector('#pLoc').style.color =
    pLocLight === 'rgb(130, 130, 130)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(130, 130, 130)';
});

lightModeToggleOne.addEventListener('click', function () {
  let headerBottomBorderLight =
    document.querySelector('#header').style.borderBottom;

  document.querySelector('#header').style.borderBottom =
    headerBottomBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(95, 95, 95)'
      : '0.5px solid rgb(200, 200, 200)';
});

lightModeToggleTwo.addEventListener('click', function () {
  let light = document.querySelector('body').style.backgroundColor;

  document.querySelector('body').style.backgroundColor =
    light === 'rgb(235, 235, 235)' ? 'rgb(25, 25, 25)' : 'rgb(235, 235, 235)';
});

lightModeToggleTwo.addEventListener('click', function () {
  let pContLight = document.querySelector('#pCont').style.color;

  document.querySelector('#pCont').style.color =
    pContLight === 'rgb(130, 130, 130)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(130, 130, 130)';
});

lightModeToggleTwo.addEventListener('click', function () {
  let pLocLight = document.querySelector('#pLoc').style.color;

  document.querySelector('#pLoc').style.color =
    pLocLight === 'rgb(130, 130, 130)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(130, 130, 130)';
});

lightModeToggleTwo.addEventListener('click', function () {
  let headerBottomBorderLight =
    document.querySelector('#header').style.borderBottom;

  document.querySelector('#header').style.borderBottom =
    headerBottomBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(95, 95, 95)'
      : '0.5px solid rgb(200, 200, 200)';
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 63) {
    header.style.display = 'none';
    navBar.style.width = '100%';
    navBar.style.position = 'fixed';
    navBar.style.padding = '0 2em';
    navBar.style.margin = '0';
  } else {
    header.style.display = 'flex';
    navBar.style.width = 'unset';
    navBar.style.position = 'unset';
    navBar.style.padding = 'unset';
    navBar.style.margin = '1.5em 0 0 2em';
  }
});

toggleOne.style.display = 'none'; //Remeber to remove when the final design is clear
