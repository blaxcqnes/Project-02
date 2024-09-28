let body = document.querySelector('body');
let smallAndMobScreens = window.matchMedia(
  '(min-width: 300px) and (max-width: 766.9px)'
);
let smallScreen = window.matchMedia(
  '(min-width: 300px) and (max-width: 399px)'
);
let mobileScreen = window.matchMedia(
  '(min-width: 399px) and (max-width: 767px)'
);
let tabletScreen = window.matchMedia(
  '(min-width: 767px) and (max-width: 1023px'
);
let backToTop = document.querySelector('#backToTop');
let backToTopSymbol = document.querySelector('#backToTopSymbol');

let header = document.querySelector('#header');

let navBar = document.querySelector('#navBar');
let lightModeToggle = document.querySelector('#lightMode');
let navBarButton = document.querySelector('#navBarButton');
let navBarSchedule = document.querySelector('#navBarSchedule');

let topOne = document.querySelector('#topOne');
let topOnePrevButton = document.querySelector('#topOnePrevButton');
let topOneSliderContainer = document.querySelector('#topOneSliderContainer');
let topOneslide = document.querySelector('#topOneslide');
let topOneNextButton = document.querySelector('#topOneNextButton');

let topTwo = document.querySelector('#topTwo');
let pTopTwoMidSecThreeShown = document.querySelector(
  '#pTopTwoMidSecThreeShown'
);

let showMidSecThreeHolder = document.querySelector('#showMidSecThreeHolder');
let hideMidSecThreeHolder = document.querySelector('#hideMidSecThreeHolder');
let pTopTwoMidSecThreeHidden = document.querySelector(
  '#pTopTwoMidSecThreeHidden'
);

let pTopTwoMidSecFourShown = document.querySelector('#pTopTwoMidSecFourShown');
let showMidSecFourHolder = document.querySelector('#showMidSecFourHolder');
let hideMidSecFourHolder = document.querySelector('#hideMidSecFourHolder');
let pTopTwoMidSecFourHidden = document.querySelector(
  '#pTopTwoMidSecFourHidden'
);

let pTopTwoMidSecFiveShown = document.querySelector('#pTopTwoMidSecFiveShown');
let showMidSecFiveHolder = document.querySelector('#showMidSecFiveHolder');
let hideMidSecFiveHolder = document.querySelector('#hideMidSecFiveHolder');
let pTopTwoMidSecFiveHidden = document.querySelector(
  '#pTopTwoMidSecFiveHidden'
);

lightModeToggle.addEventListener('click', function () {
  let light = document.querySelector('body').style.backgroundColor;

  document.querySelector('body').style.backgroundColor =
    light === 'rgb(235, 235, 235)' ? 'rgb(25, 25, 25)' : 'rgb(235, 235, 235)';
});

window.onbeforeunload = function () {
  location.reload();
  window.scrollTo(0, 0);
};

// backToTop section

window.addEventListener('scroll', function () {
  if (window.scrollY >= 400) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});

function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

lightModeToggle.addEventListener('click', function () {
  let backToTop = document.querySelector('#backToTop').style.backgroundColor;

  document.querySelector('#backToTop').style.backgroundColor =
    backToTop === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';
});

//////////////////////////////////////

// header section

lightModeToggle.addEventListener('click', function () {
  let headerBottomBorderLight =
    document.querySelector('#header').style.borderBottom;

  document.querySelector('#header').style.borderBottom =
    headerBottomBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});

//////////////////////////////////////

// pHeaderCont & pHeaderLoc section

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

//////////////////////////////////////

// headerSchedule, holderHeaderSchedule & pHeaderSchedule

lightModeToggle.addEventListener('click', function () {
  let = headerScheduleLight =
    document.querySelector('#headerSchedule').style.backgroundColor;

  document.querySelector('#headerSchedule').style.backgroundColor =
    headerScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';
});

lightModeToggle.addEventListener('click', function () {
  let = holderHeaderScheduleLight = document.querySelector(
    '#holderHeaderSchedule'
  ).style.backgroundColor;

  document.querySelector('#holderHeaderSchedule').style.backgroundColor =
    holderHeaderScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(55, 55, 55)'
      : 'rgb(175, 175, 175)';
});

lightModeToggle.addEventListener('click', function () {
  let pHeaderScheduleLight =
    document.querySelector('#pHeaderSchedule').style.color;

  document.querySelector('#pHeaderSchedule').style.color =
    pHeaderScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

//////////////////////////////////////

// navBar section

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

//////////////////////////////////////

// Responsive elements mainly for navBar section 1

window.addEventListener('scroll', function () {
  if (window.scrollY >= 63) {
    header.style.opacity = '0';
    header.style.visibility = 'hidden';
    navBar.style.width = 'inherit';
    navBar.style.position = 'fixed';
    topOne.style.margin = '120px 20px 20px 20px';

    if (smallAndMobScreens.matches) {
      topOne.style.margin = '30px 0 0 0';
    }
  } else {
    header.style.opacity = '1';
    header.style.visibility = 'visible';
    navBar.style.width = 'auto';
    navBar.style.position = 'unset';
    navBar.style.backgroundColor = 'unset';
    navBar.style.borderBottom = 'unset';
    topOne.style.margin = '30px 20px 20px 20px';

    if (smallAndMobScreens.matches) {
      topOne.style.margin = '20px 0 0 0';
    }
  }
});

//////////////////////////////////////

// navBarButton section

if (smallAndMobScreens.matches) {
  navBarButton.style.display = 'inline';
} else {
  navBarButton.style.display = 'none';
}

lightModeToggle.addEventListener('click', function () {
  let navBarButtonLight =
    document.querySelector('#navBarButton').style.backgroundColor;

  document.querySelector('#navBarButton').style.backgroundColor =
    navBarButtonLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';
});

function expand() {
  let navBarJumpingListsAndSchedule = document.querySelector(
    '#navBarJumpingListsAndSchedule'
  );
  let navBarUl = document.querySelector('#navBarUl');
  let navBarSchedule = document.querySelector('#navBarSchedule');

  if (navBarJumpingListsAndSchedule.style.opacity === '0') {
    navBarJumpingListsAndSchedule.style.opacity = '1';
    navBarUl.style.opacity = '1';

    if (navBarJumpingListsAndSchedule.style.maxHeight === '190px') {
      navBarJumpingListsAndSchedule.style.maxHeight = '320px';
    } else {
      navBarJumpingListsAndSchedule.style.maxHeight = '190px';

      if (window.scrollY >= 63) {
        navBarJumpingListsAndSchedule.style.maxHeight = '320px';
      } else {
        navBarJumpingListsAndSchedule.style.maxHeight = '190px';
        navBarUl.style.marginTop = '60px';
      }
    }
  } else {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.marginTop = '15px';
    navBarUl.style.opacity = '0';
  }

  // closing navBar on smaller screens

  topOne.addEventListener('click', function () {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
  });

  topTwo.addEventListener('click', function () {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
  });
}

// navBarLi's section

lightModeToggle.addEventListener('click', function () {
  let pLiOneLocationLight =
    document.querySelector('#pLiOneLocation').style.color;
  let pLiTwoLocationLight =
    document.querySelector('#pLiTwoLocation').style.color;
  let pLiThreeLocationLight =
    document.querySelector('#pLiThreeLocation').style.color;
  let pLiFourLocationLight =
    document.querySelector('#pLiFourLocation').style.color;

  document.querySelector('#pLiOneLocation').style.color =
    pLiOneLocationLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pLiTwoLocation').style.color =
    pLiTwoLocationLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pLiThreeLocation').style.color =
    pLiThreeLocationLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pLiFourLocation').style.color =
    pLiFourLocationLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

//////////////////////////////////////

// navBarSchedule, holderNavBarSchedule & pNavBarSchedule section

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

//////////////////////////////////////

// Responsive elements mainly for navBar section 2

window.addEventListener('scroll', function () {
  let holderNavBarSchedule = document.querySelector('#holderNavBarSchedule');
  let picNavBarSchedule = document.querySelector('#picNavBarSchedule');
  let pNavBarSchedule = document.querySelector('#pNavBarSchedule');

  if (smallAndMobScreens.matches) {
    if (window.scrollY >= 63) {
      if (navBarJumpingListsAndSchedule.style.maxHeight === '190px') {
        navBarJumpingListsAndSchedule.style.maxHeight = '320px';
        navBarUl.style.marginTop = '10px';
      }

      navBarSchedule.style.maxHeight = '45px';
      navBarSchedule.style.margin = '0 0 25px 17px';
      navBarSchedule.style.opacity = '1';
      holderNavBarSchedule.style.maxHeight = '45px';
      picNavBarSchedule.style.maxHeight = '25px';
      pNavBarSchedule.style.opacity = '1';
    } else {
      if (navBarJumpingListsAndSchedule.style.maxHeight === '320px') {
        navBarJumpingListsAndSchedule.style.maxHeight = '190px';
        navBarUl.style.marginTop = '40px';
      }

      navBarSchedule.style.maxHeight = '0';
      navBarSchedule.style.margin = '0';
      holderNavBarSchedule.style.maxHeight = '0';
      picNavBarSchedule.style.maxHeight = '0';
      pNavBarSchedule.style.opacity = '0';
    }
  }
});

//////////////////////////////////////

// topOnePrevButton and topOneNextButton section

topOnePrevButton.addEventListener('click', function () {
  let slideWidth = topOneslide.clientWidth;
  topOneSliderContainer.scrollLeft -= slideWidth;
});

topOneNextButton.addEventListener('click', function () {
  let slideWidth = topOneslide.clientWidth;
  topOneSliderContainer.scrollLeft += slideWidth;
});

lightModeToggle.addEventListener('click', function () {
  let topOnePrevButtonLight =
    document.querySelector('#topOnePrevButton').style.backgroundColor;

  document.querySelector('#topOnePrevButton').style.backgroundColor =
    topOnePrevButtonLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';
});

lightModeToggle.addEventListener('click', function () {
  let topOneNextButtonLight =
    document.querySelector('#topOneNextButton').style.backgroundColor;

  document.querySelector('#topOneNextButton').style.backgroundColor =
    topOneNextButtonLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';
});

lightModeToggle.addEventListener('click', function () {
  let topOneBorderBottomLight =
    document.querySelector('#topOne').style.borderBottom;

  document.querySelector('#topOne').style.borderBottom =
    topOneBorderBottomLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});

//////////////////////////////////////

// topTwoMidSec section

pTopTwoMidSecThreeShown.addEventListener('click', function () {
  if (pTopTwoMidSecThreeHidden.style.opacity === '0') {
    showMidSecThreeHolder.style.opacity = '0';
    hideMidSecThreeHolder.style.opacity = '1';
    pTopTwoMidSecThreeHidden.style.height = '135px';
    pTopTwoMidSecThreeHidden.style.padding = '15px 10px';
    pTopTwoMidSecThreeHidden.style.opacity = '1';

    if (smallScreen.matches) {
      pTopTwoMidSecThreeHidden.style.height = '175px';
      pTopTwoMidSecThreeHidden.style.padding = '28px 10px';
    }

    if (mobileScreen.matches) {
      pTopTwoMidSecThreeHidden.style.height = '120px';
      pTopTwoMidSecThreeHidden.style.padding = '20px 10px';
    }

    if (tabletScreen.matches) {
      pTopTwoMidSecThreeHidden.style.height = '110px';
      pTopTwoMidSecThreeHidden.style.padding = '18px 10px';
    }

    ///////////////////////////////////////////////////
    // remaining Four and Five

    showMidSecFourHolder.style.opacity = '1';
    hideMidSecFourHolder.style.opacity = '0';
    pTopTwoMidSecFourHidden.style.height = '0';
    pTopTwoMidSecFourHidden.style.padding = '0';
    pTopTwoMidSecFourHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFiveHolder.style.opacity = '1';
    hideMidSecFiveHolder.style.opacity = '0';
    pTopTwoMidSecFiveHidden.style.height = '0';
    pTopTwoMidSecFiveHidden.style.padding = '0';
    pTopTwoMidSecFiveHidden.style.opacity = '0';
  } else {
    // main Three
    showMidSecThreeHolder.style.opacity = '1';
    hideMidSecThreeHolder.style.opacity = '0';
    pTopTwoMidSecThreeHidden.style.height = '0';
    pTopTwoMidSecThreeHidden.style.padding = '0';
    pTopTwoMidSecThreeHidden.style.opacity = '0';

    ///////////////////////////////////////////////////
    // remaining Four and Five

    showMidSecFourHolder.style.opacity = '1';
    hideMidSecFourHolder.style.opacity = '0';
    pTopTwoMidSecFourHidden.style.height = '0';
    pTopTwoMidSecFourHidden.style.padding = '0';
    pTopTwoMidSecFourHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFiveHolder.style.opacity = '1';
    hideMidSecFiveHolder.style.opacity = '0';
    pTopTwoMidSecFiveHidden.style.height = '0';
    pTopTwoMidSecFiveHidden.style.padding = '0';
    pTopTwoMidSecFiveHidden.style.opacity = '0';
  }
});

pTopTwoMidSecFourShown.addEventListener('click', function () {
  if (pTopTwoMidSecFourHidden.style.opacity === '0') {
    showMidSecFourHolder.style.opacity = '0';
    hideMidSecFourHolder.style.opacity = '1';
    pTopTwoMidSecFourHidden.style.height = '135px';
    pTopTwoMidSecFourHidden.style.padding = '20px 10px';
    pTopTwoMidSecFourHidden.style.opacity = '1';

    if (smallScreen.matches) {
      pTopTwoMidSecFourHidden.style.height = '175px';
      pTopTwoMidSecFourHidden.style.padding = '12px 10px';
    }

    if (mobileScreen.matches) {
      pTopTwoMidSecFourHidden.style.height = '135px';
      pTopTwoMidSecFourHidden.style.padding = '20px 10px';
    }

    if (tabletScreen.matches) {
      pTopTwoMidSecFourHidden.style.height = '120px';
      pTopTwoMidSecFourHidden.style.padding = '24px 10px';
    }

    ///////////////////////////////////////////////////
    // remaining Three and Five

    showMidSecThreeHolder.style.opacity = '1';
    hideMidSecThreeHolder.style.opacity = '0';
    pTopTwoMidSecThreeHidden.style.height = '0';
    pTopTwoMidSecThreeHidden.style.padding = '0';
    pTopTwoMidSecThreeHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFiveHolder.style.opacity = '1';
    hideMidSecFiveHolder.style.opacity = '0';
    pTopTwoMidSecFiveHidden.style.height = '0';
    pTopTwoMidSecFiveHidden.style.padding = '0';
    pTopTwoMidSecFiveHidden.style.opacity = '0';
  } else {
    // main Four
    showMidSecFourHolder.style.opacity = '1';
    hideMidSecFourHolder.style.opacity = '0';
    pTopTwoMidSecFourHidden.style.height = '0';
    pTopTwoMidSecFourHidden.style.padding = '0';
    pTopTwoMidSecFourHidden.style.opacity = '0';

    ///////////////////////////////////////////////////
    // remaining Three and Five

    showMidSecThreeHolder.style.opacity = '1';
    hideMidSecThreeHolder.style.opacity = '0';
    pTopTwoMidSecThreeHidden.style.height = '0';
    pTopTwoMidSecThreeHidden.style.padding = '0';
    pTopTwoMidSecThreeHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFiveHolder.style.opacity = '1';
    hideMidSecFiveHolder.style.opacity = '0';
    pTopTwoMidSecFiveHidden.style.height = '0';
    pTopTwoMidSecFiveHidden.style.padding = '0';
    pTopTwoMidSecFiveHidden.style.opacity = '0';
  }
});

pTopTwoMidSecFiveShown.addEventListener('click', function () {
  if (pTopTwoMidSecFiveHidden.style.opacity === '0') {
    showMidSecFiveHolder.style.opacity = '0';
    hideMidSecFiveHolder.style.opacity = '1';
    pTopTwoMidSecFiveShown.style.borderBottom = '0.5px solid rgb(55, 55, 55)';
    pTopTwoMidSecFiveShown.style.borderRadius = 'unset';
    pTopTwoMidSecFiveHidden.style.height = '135px';
    pTopTwoMidSecFiveHidden.style.padding = '20px 10px';
    pTopTwoMidSecFiveHidden.style.opacity = '1';

    if (pTopTwoMidSecFiveShown.style.backgroundColor === 'rgb(242, 242, 242)') {
      pTopTwoMidSecFiveShown.style.borderBottom =
        '0.5px solid rgb(200, 200, 200)';
    }

    if (smallScreen.matches) {
      pTopTwoMidSecFiveHidden.style.height = '175px';
      pTopTwoMidSecFiveHidden.style.padding = '12px 10px';
    }

    if (mobileScreen.matches) {
      pTopTwoMidSecFiveHidden.style.height = '135px';
      pTopTwoMidSecFiveHidden.style.padding = '20px 10px';
    }

    if (tabletScreen.matches) {
      pTopTwoMidSecFiveHidden.style.height = '120px';
      pTopTwoMidSecFiveHidden.style.padding = '24px 10px';
    }

    ///////////////////////////////////////////////////
    // remaining Three and Four
    showMidSecThreeHolder.style.opacity = '1';
    hideMidSecThreeHolder.style.opacity = '0';
    pTopTwoMidSecThreeHidden.style.height = '0';
    pTopTwoMidSecThreeHidden.style.padding = '0';
    pTopTwoMidSecThreeHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFourHolder.style.opacity = '1';
    hideMidSecFourHolder.style.opacity = '0';
    pTopTwoMidSecFourHidden.style.height = '0';
    pTopTwoMidSecFourHidden.style.padding = '0';
    pTopTwoMidSecFourHidden.style.opacity = '0';
  } else {
    // main Five
    showMidSecFiveHolder.style.opacity = '1';
    hideMidSecFiveHolder.style.opacity = '0';
    pTopTwoMidSecFiveShown.style.borderRadius = '0px 0px 10px 10px';
    pTopTwoMidSecFiveShown.style.borderBottom = 'unset';
    pTopTwoMidSecFiveHidden.style.height = '0';
    pTopTwoMidSecFiveHidden.style.padding = '0';
    pTopTwoMidSecFiveHidden.style.opacity = '0';

    ///////////////////////////////////////////////////
    // remaining Three and Four
    showMidSecThreeHolder.style.opacity = '1';
    hideMidSecThreeHolder.style.opacity = '0';
    pTopTwoMidSecThreeHidden.style.height = '0';
    pTopTwoMidSecThreeHidden.style.padding = '0';
    pTopTwoMidSecThreeHidden.style.opacity = '0';
    ///////////////////////////////////////////////////
    showMidSecFourHolder.style.opacity = '1';
    hideMidSecFourHolder.style.opacity = '0';
    pTopTwoMidSecFourHidden.style.height = '0';
    pTopTwoMidSecFourHidden.style.padding = '0';
    pTopTwoMidSecFourHidden.style.opacity = '0';
  }
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecTwoLight =
    document.querySelector('#pTopTwoMidSecTwo').style.color;

  document.querySelector('#pTopTwoMidSecTwo').style.color =
    pTopTwoMidSecTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecThreeHolderLight = document.querySelector(
    '#pTopTwoMidSecThreeHolder'
  ).style.backgroundColor;
  let pTopTwoMidSecThreeShownLight = document.querySelector(
    '#pTopTwoMidSecThreeShown'
  ).style.backgroundColor;
  let pTopTwoMidSecThreeShownBorderLight = document.querySelector(
    '#pTopTwoMidSecThreeShown'
  ).style.borderBottom;

  document.querySelector('#pTopTwoMidSecThreeHolder').style.backgroundColor =
    pTopTwoMidSecThreeHolderLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pTopTwoMidSecThreeShown').style.backgroundColor =
    pTopTwoMidSecThreeShownLight === 'rgb(242, 242, 242)'
      ? 'rgb(32, 32, 32)'
      : 'rgb(242, 242, 242)';

  document.querySelector('#pTopTwoMidSecThreeShown').style.borderBottom =
    pTopTwoMidSecThreeShownBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecThreeHiddenLight = document.querySelector(
    '#pTopTwoMidSecThreeHidden'
  ).style.color;

  document.querySelector('#pTopTwoMidSecThreeHidden').style.color =
    pTopTwoMidSecThreeHiddenLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let showMidSecThreeHolderLight = document.querySelector(
    '#showMidSecThreeHolder'
  ).style.color;
  let hideMidSecThreeHolderLight = document.querySelector(
    '#hideMidSecThreeHolder'
  ).style.color;

  document.querySelector('#showMidSecThreeHolder').style.color =
    showMidSecThreeHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#hideMidSecThreeHolder').style.color =
    hideMidSecThreeHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let showMidSecFourHolderLight = document.querySelector(
    '#showMidSecFourHolder'
  ).style.color;
  let hideMidSecFourHolderLight = document.querySelector(
    '#hideMidSecFourHolder'
  ).style.color;

  document.querySelector('#showMidSecFourHolder').style.color =
    showMidSecFourHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#hideMidSecFourHolder').style.color =
    hideMidSecFourHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecFourHolderLight = document.querySelector(
    '#pTopTwoMidSecFourHolder'
  ).style.backgroundColor;
  let pTopTwoMidSecFourShownLight = document.querySelector(
    '#pTopTwoMidSecFourShown'
  ).style.backgroundColor;
  let pTopTwoMidSecFourShownBorderLight = document.querySelector(
    '#pTopTwoMidSecFourShown'
  ).style.borderBottom;

  document.querySelector('#pTopTwoMidSecFourHolder').style.backgroundColor =
    pTopTwoMidSecFourHolderLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pTopTwoMidSecFourShown').style.backgroundColor =
    pTopTwoMidSecFourShownLight === 'rgb(242, 242, 242)'
      ? 'rgb(32, 32, 32)'
      : 'rgb(242, 242, 242)';

  document.querySelector('#pTopTwoMidSecFourShown').style.borderBottom =
    pTopTwoMidSecFourShownBorderLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecFourHiddenLight = document.querySelector(
    '#pTopTwoMidSecFourHidden'
  ).style.color;

  document.querySelector('#pTopTwoMidSecFourHidden').style.color =
    pTopTwoMidSecFourHiddenLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let showMidSecFiveHolderLight = document.querySelector(
    '#showMidSecFiveHolder'
  ).style.color;
  let hideMidSecFiveHolderLight = document.querySelector(
    '#hideMidSecFiveHolder'
  ).style.color;

  document.querySelector('#showMidSecFiveHolder').style.color =
    showMidSecFiveHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#hideMidSecFiveHolder').style.color =
    hideMidSecFiveHolderLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecFiveHolderLight = document.querySelector(
    '#pTopTwoMidSecFiveHolder'
  ).style.backgroundColor;
  let pTopTwoMidSecFiveShownLight = document.querySelector(
    '#pTopTwoMidSecFiveShown'
  ).style.backgroundColor;
  let pTopTwoMidSecFiveShownBorderBottomLight = document.querySelector(
    '#pTopTwoMidSecFiveShown'
  ).style.borderBottom;
  let pTopTwoMidSecFiveShownBorderBottomDark = document.querySelector(
    '#pTopTwoMidSecFiveShown'
  ).style.borderBottom;

  document.querySelector('#pTopTwoMidSecFiveHolder').style.backgroundColor =
    pTopTwoMidSecFiveHolderLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pTopTwoMidSecFiveShown').style.backgroundColor =
    pTopTwoMidSecFiveShownLight === 'rgb(242, 242, 242)'
      ? 'rgb(32, 32, 32)'
      : 'rgb(242, 242, 242)';

  if (
    pTopTwoMidSecFiveShown.style.borderBottom === '0.5px solid rgb(55, 55, 55)'
  ) {
    document.querySelector('#pTopTwoMidSecFiveShown').style.borderBottom =
      pTopTwoMidSecFiveShownBorderBottomLight ===
      '0.5px solid rgb(200, 200, 200)'
        ? '0.5px solid rgb(55, 55, 55)'
        : '0.5px solid rgb(200, 200, 200)';
  } else {
    if (
      pTopTwoMidSecFiveShown.style.borderBottom ===
      '0.5px solid rgb(200, 200, 200)'
    ) {
      document.querySelector('#pTopTwoMidSecFiveShown').style.borderBottom =
        pTopTwoMidSecFiveShownBorderBottomDark === '0.5px solid rgb(55, 55, 55)'
          ? '0.5px solid rgb(200, 200, 200)'
          : '0.5px solid rgb(55, 55, 55)';
    }
  }
});

lightModeToggle.addEventListener('click', function () {
  let pTopTwoMidSecFiveHiddenLight = document.querySelector(
    '#pTopTwoMidSecFiveHidden'
  ).style.color;

  document.querySelector('#pTopTwoMidSecFiveHidden').style.color =
    pTopTwoMidSecFiveHiddenLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});
//////////////////////////////////////

// topTwoRightSec section
lightModeToggle.addEventListener('click', function () {
  let topTwoRightSecLight =
    document.querySelector('#topTwoRightSec').style.backgroundColor;
  let pTopTwoRightSecOneLight = document.querySelector('#pTopTwoRightSecOne')
    .style.color;
  let pTopTwoRightSecTwoLight = document.querySelector('#pTopTwoRightSecTwo')
    .style.color;
  let pTopTwoRightSecThreeLight = document.querySelector(
    '#pTopTwoRightSecThree'
  ).style.color;
  let pTopTwoRightSecFourLight = document.querySelector('#pTopTwoRightSecFour')
    .style.color;
  let pTopTwoRightSecFiveLight = document.querySelector('#pTopTwoRightSecFive')
    .style.color;
  let pTopTwoRightSecSixLight = document.querySelector('#pTopTwoRightSecSix')
    .style.color;
  let pTopTwoRightSecSevenLight = document.querySelector(
    '#pTopTwoRightSecSeven'
  ).style.color;
  let pTopTwoRightSecEightLight = document.querySelector(
    '#pTopTwoRightSecEight'
  ).style.color;
  let topTwoRightSecHolderOneBorderBottomLight = document.querySelector(
    '#topTwoRightSecHolderOne'
  ).style.borderBottom;
  let topTwoRightSecHolderTwoBorderBottomLight = document.querySelector(
    '#topTwoRightSecHolderTwo'
  ).style.borderBottom;
  let topTwoRightSecHolderThreeBorderBottomLight = document.querySelector(
    '#topTwoRightSecHolderThree'
  ).style.borderBottom;

  document.querySelector('#topTwoRightSec').style.backgroundColor =
    topTwoRightSecLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pTopTwoRightSecOne').style.color =
    pTopTwoRightSecOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecTwo').style.color =
    pTopTwoRightSecTwoLight === 'rgb(150, 150, 150)'
      ? 'rgb(120, 120, 120)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecThree').style.color =
    pTopTwoRightSecThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecFour').style.color =
    pTopTwoRightSecFourLight === 'rgb(150, 150, 150)'
      ? 'rgb(120, 120, 120)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecFive').style.color =
    pTopTwoRightSecFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecSix').style.color =
    pTopTwoRightSecSixLight === 'rgb(150, 150, 150)'
      ? 'rgb(120, 120, 120)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecSeven').style.color =
    pTopTwoRightSecSevenLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecEight').style.color =
    pTopTwoRightSecEightLight === 'rgb(150, 150, 150)'
      ? 'rgb(120, 120, 120)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#topTwoRightSecHolderOne').style.borderBottom =
    topTwoRightSecHolderOneBorderBottomLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#topTwoRightSecHolderTwo').style.borderBottom =
    topTwoRightSecHolderTwoBorderBottomLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#topTwoRightSecHolderThree').style.borderBottom =
    topTwoRightSecHolderThreeBorderBottomLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';
});
//////////////////////////////////////
