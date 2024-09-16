let lightModeToggle = document.querySelector('#lightMode');
let header = document.querySelector('#header');
let navBar = document.querySelector('#navBar');

lightModeToggle.addEventListener('click', function () {
  let light = document.querySelector('body').style.backgroundColor;

  document.querySelector('body').style.backgroundColor =
    light === 'rgb(235, 235, 235)' ? 'rgb(25, 25, 25)' : 'rgb(235, 235, 235)';
});

lightModeToggle.addEventListener('click', function () {
  let pHeaderContLight = document.querySelector('#pHeaderCont').style.color;

  document.querySelector('#pHeaderCont').style.color =
    pHeaderContLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let pHeaderLocLight = document.querySelector('#pHeaderLoc').style.color;

  document.querySelector('#pHeaderLoc').style.color =
    pHeaderLocLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let headerBottomBorderLight =
    document.querySelector('#header').style.borderBottom;

  document.querySelector('#header').style.borderBottom =
    headerBottomBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});

window.addEventListener('scroll', function () {
  if (window.scrollY >= 63) {
    header.style.visibility = 'hidden';
    navBar.style.width = 'inherit';
    navBar.style.position = 'fixed';
    navBar.style.borderBottom = '0.5px solid rgb(55, 55, 55)';
  } else {
    header.style.visibility = 'visible';
    navBar.style.width = 'auto';
    navBar.style.position = 'unset';
    navBar.style.borderBottom = 'unset';
  }
});

lightModeToggle.addEventListener('click', function () {
  let navBarBbLight = document.querySelector('#navBar').style.borderBottom;

  document.querySelector('#navBar').style.borderBottom =
    navBarBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  if (window.scrollY < 63) {
    navBar.style.borderBottom = 'unset';
  }
});

lightModeToggle.addEventListener('click', function () {
  let navBarLiOneLight = document.querySelector('#navBarLiOne').style.color;
  let navBarLiTwoLight = document.querySelector('#navBarLiTwo').style.color;
  let navBarLiThreeLight = document.querySelector('#navBarLiThree').style.color;
  let navBarLiFourLight = document.querySelector('#navBarLiFour').style.color;

  document.querySelector('#navBarLiOne').style.color =
    navBarLiOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#navBarLiTwo').style.color =
    navBarLiTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#navBarLiThree').style.color =
    navBarLiThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#navBarLiFour').style.color =
    navBarLiFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let = navBarScheduleLight =
    document.querySelector('#navBarSchedule').style.backgroundColor;

  document.querySelector('#navBarSchedule').style.backgroundColor =
    navBarScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(35, 35, 35)'
      : 'rgb(207, 207, 207)';
});

lightModeToggle.addEventListener('click', function () {
  let = holderNavBarScheduleLight = document.querySelector(
    '#holderNavBarSchedule'
  ).style.backgroundColor;

  document.querySelector('#holderNavBarSchedule').style.backgroundColor =
    holderNavBarScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(52, 52, 52)'
      : 'rgb(175, 175, 175)';
});

lightModeToggle.addEventListener('click', function () {
  let pNavBarScheduleLight =
    document.querySelector('#pNavBarSchedule').style.color;

  document.querySelector('#pNavBarSchedule').style.color =
    pNavBarScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(180, 180, 180)'
      : 'rgb(110, 110, 110)';
});
