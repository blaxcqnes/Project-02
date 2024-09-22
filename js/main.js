let body = document.querySelector('body');
let smallScreens = window.matchMedia(
  '(min-width: 300px) and (max-width: 1022.99px)'
);

let header = document.querySelector('#header');

let navBar = document.querySelector('#navBar');
let lightModeToggle = document.querySelector('#lightMode');
let navBarButton = document.querySelector('#navBarButton');
let navBarSchedule = document.querySelector('#navBarSchedule');

let slideWrapper = document.querySelector('#slideWrapper');
let sliderBttnNext = document.querySelector('#sliderBttnNext');
let sliderBttnPrev = document.querySelector('#sliderBttnPrev');
let sliderContainer = document.querySelector('#sliderContainer');
let slide = document.querySelector('#slide');

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

lightModeToggle.addEventListener('click', function () {
  let = headerScheduleLight =
    document.querySelector('#headerSchedule').style.backgroundColor;

  document.querySelector('#headerSchedule').style.backgroundColor =
    headerScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(35, 35, 35)'
      : 'rgb(207, 207, 207)';
});

lightModeToggle.addEventListener('click', function () {
  let = holderHeaderScheduleLight = document.querySelector(
    '#holderHeaderSchedule'
  ).style.backgroundColor;

  document.querySelector('#holderHeaderSchedule').style.backgroundColor =
    holderHeaderScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(52, 52, 52)'
      : 'rgb(175, 175, 175)';
});

lightModeToggle.addEventListener('click', function () {
  let pHeaderScheduleLight =
    document.querySelector('#pHeaderSchedule').style.color;

  document.querySelector('#pHeaderSchedule').style.color =
    pHeaderScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(180, 180, 180)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  if (window.scrollY >= 63) {
    if (body.style.backgroundColor == 'rgb(235, 235, 235)') {
      navBar.style.backgroundColor = 'rgb(228, 228, 228)';
      navBar.style.borderBottom = '0.5px solid rgb(200, 200, 200)';
    } else {
      navBar.style.backgroundColor = 'rgb(28, 28, 28)';
      navBar.style.borderBottom = '0.5px solid rgb(55, 55, 55)';
    }
  }
});

window.addEventListener('scroll', function () {
  if (
    (window.scrollY >= 63, body.style.backgroundColor == 'rgb(235, 235, 235)')
  ) {
    navBar.style.backgroundColor = 'rgb(228, 228, 228)';
    navBar.style.borderBottom = '0.5px solid rgb(200, 200, 200)';
  } else {
    navBar.style.backgroundColor = 'rgb(28, 28, 28)';
    navBar.style.borderBottom = '0.5px solid rgb(55, 55, 55)';
  }
});

window.addEventListener('scroll', function () {
  if (window.scrollY >= 63) {
    header.style.opacity = '0';
    header.style.visibility = 'hidden';
    navBar.style.width = 'inherit';
    navBar.style.position = 'fixed';
  } else {
    header.style.opacity = '1';
    header.style.visibility = 'visible';
    navBar.style.width = 'auto';
    navBar.style.position = 'unset';
    navBar.style.backgroundColor = 'unset';
    navBar.style.borderBottom = 'unset';
  }
});

if (smallScreens.matches) {
  navBarButton.style.display = 'inline';
} else {
  navBarButton.style.display = 'none';
}

function expand() {
  let navBarUl = document.querySelector('#navBarUl');
  let navBarSchedule = document.querySelector('#navBarSchedule');

  if (navBarJumpingListsAndSchedule.style.opacity === '0') {
    navBarJumpingListsAndSchedule.style.opacity = '1';
    navBarJumpingListsAndSchedule.style.maxHeight = '320px';
    navBarUl.style.opacity = '1';
    navBarSchedule.style.opacity = '1';
  } else {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
    navBarSchedule.style.opacity = '0';
  }

  slideWrapper.addEventListener('click', function () {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
    navBarSchedule.style.opacity = '0';
  });
}

lightModeToggle.addEventListener('click', function () {
  let navBarButtonLight =
    document.querySelector('#navBarButton').style.backgroundColor;

  document.querySelector('#navBarButton').style.backgroundColor =
    navBarButtonLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';
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
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';
});

lightModeToggle.addEventListener('click', function () {
  let = holderNavBarScheduleLight = document.querySelector(
    '#holderNavBarSchedule'
  ).style.backgroundColor;

  document.querySelector('#holderNavBarSchedule').style.backgroundColor =
    holderNavBarScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(55, 55, 55)'
      : 'rgb(175, 175, 175)';
});

lightModeToggle.addEventListener('click', function () {
  let pNavBarScheduleLight =
    document.querySelector('#pNavBarSchedule').style.color;

  document.querySelector('#pNavBarSchedule').style.color =
    pNavBarScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

window.addEventListener('scroll', function () {
  let holderNavBarSchedule = document.querySelector('#holderNavBarSchedule');
  let picNavBarSchedule = document.querySelector('#picNavBarSchedule');
  let pNavBarSchedule = document.querySelector('#pNavBarSchedule');

  if (window.scrollY >= 63) {
    navBarUl.style.marginLeft = '117px';
    navBarSchedule.style.maxHeight = '45px';
    navBarSchedule.style.margin = '0 0 25px 17px';
    holderNavBarSchedule.style.maxHeight = '45px';
    picNavBarSchedule.style.maxHeight = '25px';
    pNavBarSchedule.style.opacity = '1';
  } else {
    navBarSchedule.style.maxHeight = '0';
    navBarSchedule.style.margin = '0';
    holderNavBarSchedule.style.maxHeight = '0';
    picNavBarSchedule.style.maxHeight = '0';
    pNavBarSchedule.style.opacity = '0';
  }
});

sliderBttnNext.addEventListener('click', function () {
  let slideWidth = slide.clientWidth;
  sliderContainer.scrollLeft += slideWidth;
});

sliderBttnPrev.addEventListener('click', function () {
  let slideWidth = slide.clientWidth;
  sliderContainer.scrollLeft -= slideWidth;
});

lightModeToggle.addEventListener('click', function () {
  let sliderBttnPrevLight =
    document.querySelector('#sliderBttnPrev').style.backgroundColor;

  let sliderBttnPrevTextLight =
    document.querySelector('#sliderBttnPrev').style.color;

  document.querySelector('#sliderBttnPrev').style.backgroundColor =
    sliderBttnPrevLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';

  document.querySelector('#sliderBttnPrev').style.color =
    sliderBttnPrevTextLight === 'rgb(135, 135, 135)'
      ? '(150, 150, 150)'
      : 'rgb(135, 135, 135)';
});

lightModeToggle.addEventListener('click', function () {
  let sliderBttnNextLight =
    document.querySelector('#sliderBttnNext').style.backgroundColor;

  let sliderBttnNextTextLight =
    document.querySelector('#sliderBttnNext').style.color;

  document.querySelector('#sliderBttnNext').style.backgroundColor =
    sliderBttnNextLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';

  document.querySelector('#sliderBttnNext').style.color =
    sliderBttnNextTextLight === 'rgb(135, 135, 135)'
      ? '(150, 150, 150)'
      : 'rgb(135, 135, 135)';
});
