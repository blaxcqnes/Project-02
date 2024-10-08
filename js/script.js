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

let midOne = document.querySelector('#midOne');

let midTwo = document.querySelector('#midTwo');
// left midSection
let pMidTwoTwo = document.querySelector('#pMidTwoTwo');

// right midSection
let forSwitcherMidTwoOne = document.querySelector('#forSwitcherMidTwoOne');
let forSwitcherMidTwoTwo = document.querySelector('#forSwitcherMidTwoTwo');
let forSwitcherMidTwoThree = document.querySelector('#forSwitcherMidTwoThree');

let switcherMidTwoOne = document.querySelector('#switcherMidTwoOne');
let switcherMidTwoTwo = document.querySelector('#switcherMidTwoTwo');
let switcherMidTwoThree = document.querySelector('#switcherMidTwoThree');

let bottomMidTwo = document.querySelector('#bottomMidTwo');
let bottomMidTwoForAppartment = document.querySelector(
  '#bottomMidTwoForAppartment'
);
let bottomMidTwoForVilla = document.querySelector('#bottomMidTwoForVilla');
let bottomMidTwoForPentHouse = document.querySelector(
  '#bottomMidTwoForPentHouse'
);

let bottomOne = document.querySelector('#bottomOne');

///////////////////////////////////////////////////////

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

  navBarUl.style.margin = '20px 0 0 15px';

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
      }
    }
  } else {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
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

  midOne.addEventListener('click', function () {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
  });

  midTwo.addEventListener('click', function () {
    navBarJumpingListsAndSchedule.style.maxHeight = '0';
    navBarJumpingListsAndSchedule.style.opacity = '0';
    navBarUl.style.opacity = '0';
  });

  bottomOne.addEventListener('click', function () {
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
  let navBarScheduleLight =
    document.querySelector('#navBarSchedule').style.backgroundColor;

  document.querySelector('#navBarSchedule').style.backgroundColor =
    navBarScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';
});

lightModeToggle.addEventListener('click', function () {
  let holderNavBarScheduleLight = document.querySelector(
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
        navBarUl.style.margin = '20px 0 0 15px';
      }

      navBarSchedule.style.opacity = '1';
      navBarSchedule.style.maxHeight = '45px';
      navBarSchedule.style.margin = '0 0 25px 17px';
      holderNavBarSchedule.style.maxHeight = '45px';
      picNavBarSchedule.style.maxHeight = '25px';
      pNavBarSchedule.style.opacity = '1';
    } else {
      if (navBarJumpingListsAndSchedule.style.maxHeight === '320px') {
        navBarJumpingListsAndSchedule.style.maxHeight = '190px';
        navBarUl.style.margin = '20px 0 0 15px';
      }

      navBarSchedule.style.maxHeight = '0';
      navBarSchedule.style.margin = '0';
      navBarSchedule.style.opacity = '0';
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
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecThree').style.color =
    pTopTwoRightSecThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecFour').style.color =
    pTopTwoRightSecFourLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecFive').style.color =
    pTopTwoRightSecFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecSix').style.color =
    pTopTwoRightSecSixLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pTopTwoRightSecSeven').style.color =
    pTopTwoRightSecSevenLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pTopTwoRightSecEight').style.color =
    pTopTwoRightSecEightLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
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

// cardOneMidOne section

lightModeToggle.addEventListener('click', function () {
  let cardOneMidOneLight =
    document.querySelector('#cardOneMidOne').style.backgroundColor;
  let cardTextOneLight = document.querySelector('#cardTextOne').style.color;
  let cardTextTwoLight = document.querySelector('#cardTextTwo').style.color;
  let cardTextThreeLight = document.querySelector('#cardTextThree').style.color;

  let cardTwoMidOneLight =
    document.querySelector('#cardTwoMidOne').style.backgroundColor;
  let cardTextFourLight = document.querySelector('#cardTextFour').style.color;
  let cardTextFiveLight = document.querySelector('#cardTextFive').style.color;
  let cardTextSixLight = document.querySelector('#cardTextSix').style.color;

  let cardThreeMidOneLight =
    document.querySelector('#cardThreeMidOne').style.backgroundColor;
  let cardTextSevenLight = document.querySelector('#cardTextSeven').style.color;
  let cardTextEightLight = document.querySelector('#cardTextEight').style.color;
  let cardTextNineLight = document.querySelector('#cardTextNine').style.color;

  document.querySelector('#cardOneMidOne').style.backgroundColor =
    cardOneMidOneLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#cardTextOne').style.color =
    cardTextOneLight === 'rgb(255, 120, 75)'
      ? 'rgb(255, 175, 150)'
      : 'rgb(255, 120, 75)';

  document.querySelector('#cardTextTwo').style.color =
    cardTextTwoLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#cardTextThree').style.color =
    cardTextThreeLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#cardTwoMidOne').style.backgroundColor =
    cardTwoMidOneLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#cardTextFour').style.color =
    cardTextFourLight === 'rgb(255, 120, 75)'
      ? 'rgb(255, 175, 150)'
      : 'rgb(255, 120, 75)';

  document.querySelector('#cardTextFive').style.color =
    cardTextFiveLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#cardTextSix').style.color =
    cardTextSixLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#cardThreeMidOne').style.backgroundColor =
    cardThreeMidOneLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#cardTextSeven').style.color =
    cardTextSevenLight === 'rgb(255, 120, 75)'
      ? 'rgb(255, 175, 150)'
      : 'rgb(255, 120, 75)';

  document.querySelector('#cardTextEight').style.color =
    cardTextEightLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#cardTextNine').style.color =
    cardTextNineLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';
});
//////////////////////////////////////

// leftMidTwo

lightModeToggle.addEventListener('click', function () {
  let pMidTwoTwoColorLight = document.querySelector('#pMidTwoTwo').style.color;

  document.querySelector('#pMidTwoTwo').style.color =
    pMidTwoTwoColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

// rightMidTwo section

lightModeToggle.addEventListener('click', function () {
  let forSwitcherMidTwoOneLight = document.querySelector(
    '#forSwitcherMidTwoOne'
  ).style.backgroundColor;
  let forSwitcherMidTwoTwoLight = document.querySelector(
    '#forSwitcherMidTwoTwo'
  ).style.backgroundColor;
  let forSwitcherMidTwoThreeLight = document.querySelector(
    '#forSwitcherMidTwoThree'
  ).style.backgroundColor;

  let forSwitcherMidTwoOneLightColor = document.querySelector(
    '#forSwitcherMidTwoOne'
  ).style.color;
  let forSwitcherMidTwoTwoLightColor = document.querySelector(
    '#forSwitcherMidTwoTwo'
  ).style.color;
  let forSwitcherMidTwoThreeLightColor = document.querySelector(
    '#forSwitcherMidTwoThree'
  ).style.color;

  document.querySelector('#forSwitcherMidTwoOne').style.backgroundColor =
    forSwitcherMidTwoOneLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';

  document.querySelector('#forSwitcherMidTwoOne').style.color =
    forSwitcherMidTwoOneLightColor === 'rgb(0, 0, 0)'
      ? 'rgb(255, 255, 255)'
      : 'rgb(0, 0, 0)';

  document.querySelector('#forSwitcherMidTwoTwo').style.backgroundColor =
    forSwitcherMidTwoTwoLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';

  document.querySelector('#forSwitcherMidTwoTwo').style.color =
    forSwitcherMidTwoTwoLightColor === 'rgb(0, 0, 0)'
      ? 'rgb(255, 255, 255)'
      : 'rgb(0, 0, 0)';

  document.querySelector('#forSwitcherMidTwoThree').style.backgroundColor =
    forSwitcherMidTwoThreeLight === 'rgb(215, 215, 215)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(215, 215, 215)';

  document.querySelector('#forSwitcherMidTwoThree').style.color =
    forSwitcherMidTwoThreeLightColor === 'rgb(0, 0, 0)'
      ? 'rgb(255, 255, 255)'
      : 'rgb(0, 0, 0)';
});

switcherMidTwoOne.checked = true;
bottomMidTwoForVilla.style.opacity = '0';
bottomMidTwoForPentHouse.style.opacity = '0';

forSwitcherMidTwoOne.addEventListener('click', function () {
  switcherMidTwoTwo.checked = false;
  switcherMidTwoThree.checked = false;
  bottomMidTwoForVilla.style.opacity = '0';
  bottomMidTwoForPentHouse.style.opacity = '0';
  bottomMidTwoForAppartment.style.opacity = '1';
});

forSwitcherMidTwoTwo.addEventListener('click', function () {
  switcherMidTwoOne.checked = false;
  switcherMidTwoThree.checked = false;
  bottomMidTwoForAppartment.style.opacity = '0';
  bottomMidTwoForPentHouse.style.opacity = '0';
  bottomMidTwoForVilla.style.opacity = '1';
});

forSwitcherMidTwoThree.addEventListener('click', function () {
  switcherMidTwoOne.checked = false;
  switcherMidTwoTwo.checked = false;
  bottomMidTwoForAppartment.style.opacity = '0';
  bottomMidTwoForVilla.style.opacity = '0';
  bottomMidTwoForPentHouse.style.opacity = '1';
});

//////////////////////////////////////

// bottomMidTwo

lightModeToggle.addEventListener('click', function () {
  let bottomMidTwoForAppContainerLight = document.querySelector(
    '#bottomMidTwoForAppContainer'
  ).style.backgroundColor;

  let bottomMidTwoForAppHolderOneBbLight = document.querySelector(
    '#bottomMidTwoForAppHolderOne'
  ).style.borderBottom;
  let bottomMidTwoForAppHolderTwoBbLight = document.querySelector(
    '#bottomMidTwoForAppHolderTwo'
  ).style.borderBottom;
  let bottomMidTwoForAppHolderThreeBbLight = document.querySelector(
    '#bottomMidTwoForAppHolderThree'
  ).style.borderBottom;

  let pBottomMidTwoForAppOneColorLight = document.querySelector(
    '#pBottomMidTwoForAppOne'
  ).style.color;
  let pBottomMidTwoForAppTwoColorLight = document.querySelector(
    '#pBottomMidTwoForAppTwo'
  ).style.color;
  let pBottomMidTwoForAppThreeColorLight = document.querySelector(
    '#pBottomMidTwoForAppThree'
  ).style.color;
  let pBottomMidTwoForAppFourColorLight = document.querySelector(
    '#pBottomMidTwoForAppFour'
  ).style.color;
  let pBottomMidTwoForAppFiveColorLight = document.querySelector(
    '#pBottomMidTwoForAppFive'
  ).style.color;
  let pBottomMidTwoForAppSixColorLight = document.querySelector(
    '#pBottomMidTwoForAppSix'
  ).style.color;
  let pBottomMidTwoForAppSevenColorLight = document.querySelector(
    '#pBottomMidTwoForAppSeven'
  ).style.color;
  let pBottomMidTwoForAppEightColorLight = document.querySelector(
    '#pBottomMidTwoForAppEight'
  ).style.color;

  let pBmtForAppOneColorLight =
    document.querySelector('#pBmtForAppOne').style.color;
  let pBmtForAppTwoColorLight =
    document.querySelector('#pBmtForAppTwo').style.color;
  let pBmtForAppThreeColorLight =
    document.querySelector('#pBmtForAppThree').style.color;

  let bottomMidTwoForVillaContainerLight = document.querySelector(
    '#bottomMidTwoForVillaContainer'
  ).style.backgroundColor;

  let bottomMidTwoForVillaHolderOneBbLight = document.querySelector(
    '#bottomMidTwoForVillaHolderOne'
  ).style.borderBottom;
  let bottomMidTwoForVillaHolderTwoBbLight = document.querySelector(
    '#bottomMidTwoForVillaHolderTwo'
  ).style.borderBottom;
  let bottomMidTwoForVillaHolderThreeBbLight = document.querySelector(
    '#bottomMidTwoForVillaHolderThree'
  ).style.borderBottom;

  let pBottomMidTwoForVillaOneColorLight = document.querySelector(
    '#pBottomMidTwoForVillaOne'
  ).style.color;
  let pBottomMidTwoForVillaTwoColorLight = document.querySelector(
    '#pBottomMidTwoForVillaTwo'
  ).style.color;
  let pBottomMidTwoForVillaThreeColorLight = document.querySelector(
    '#pBottomMidTwoForVillaThree'
  ).style.color;
  let pBottomMidTwoForVillaFourColorLight = document.querySelector(
    '#pBottomMidTwoForVillaFour'
  ).style.color;
  let pBottomMidTwoForVillaFiveColorLight = document.querySelector(
    '#pBottomMidTwoForVillaFive'
  ).style.color;
  let pBottomMidTwoForVillaSixColorLight = document.querySelector(
    '#pBottomMidTwoForVillaSix'
  ).style.color;
  let pBottomMidTwoForVillaSevenColorLight = document.querySelector(
    '#pBottomMidTwoForVillaSeven'
  ).style.color;
  let pBottomMidTwoForVillaEightColorLight = document.querySelector(
    '#pBottomMidTwoForVillaEight'
  ).style.color;

  let pBmtForVillaOneColorLight =
    document.querySelector('#pBmtForVillaOne').style.color;
  let pBmtForVillaTwoColorLight =
    document.querySelector('#pBmtForVillaTwo').style.color;
  let pBmtForVillaThreeColorLight =
    document.querySelector('#pBmtForVillaThree').style.color;

  let bottomMidTwoForPentHouseContainerLight = document.querySelector(
    '#bottomMidTwoForPentHouseContainer'
  ).style.backgroundColor;

  let bottomMidTwoForPentHouseHolderOneBbLight = document.querySelector(
    '#bottomMidTwoForPentHouseHolderOne'
  ).style.borderBottom;
  let bottomMidTwoForPentHouseHolderTwoBbLight = document.querySelector(
    '#bottomMidTwoForPentHouseHolderTwo'
  ).style.borderBottom;
  let bottomMidTwoForPentHouseHolderThreeBbLight = document.querySelector(
    '#bottomMidTwoForPentHouseHolderThree'
  ).style.borderBottom;

  let pBottomMidTwoForPentHouseOneColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseOne'
  ).style.color;
  let pBottomMidTwoForPentHouseTwoColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseTwo'
  ).style.color;
  let pBottomMidTwoForPentHouseThreeColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseThree'
  ).style.color;
  let pBottomMidTwoForPentHouseFourColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseFour'
  ).style.color;
  let pBottomMidTwoForPentHouseFiveColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseFive'
  ).style.color;
  let pBottomMidTwoForPentHouseSixColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseSix'
  ).style.color;
  let pBottomMidTwoForPentHouseSevenColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseSeven'
  ).style.color;
  let pBottomMidTwoForPentHouseEightColorLight = document.querySelector(
    '#pBottomMidTwoForPentHouseEight'
  ).style.color;

  let pBmtForPentHouseOneColorLight = document.querySelector(
    '#pBmtForPentHouseOne'
  ).style.color;
  let pBmtForPentHouseTwoColorLight = document.querySelector(
    '#pBmtForPentHouseTwo'
  ).style.color;
  let pBmtForPentHouseThreeColorLight = document.querySelector(
    '#pBmtForPentHouseThree'
  ).style.color;

  let midTwoForAppScheduleLight = document.querySelector(
    '#midTwoForAppSchedule'
  ).style.backgroundColor;
  let holderMidTwoForAppScheduleLight = document.querySelector(
    '#holderMidTwoForAppSchedule'
  ).style.backgroundColor;
  let pMidTwoForAppScheduleLight = document.querySelector(
    '#pMidTwoForAppSchedule'
  ).style.color;

  let midTwoForVillaScheduleLight = document.querySelector(
    '#midTwoForVillaSchedule'
  ).style.backgroundColor;
  let holderMidTwoForVillaScheduleLight = document.querySelector(
    '#holderMidTwoForVillaSchedule'
  ).style.backgroundColor;
  let pMidTwoForVillaScheduleLight = document.querySelector(
    '#pMidTwoForVillaSchedule'
  ).style.color;

  let midTwoForPentHouseScheduleLight = document.querySelector(
    '#midTwoForPentHouseSchedule'
  ).style.backgroundColor;
  let holderMidTwoForPentHouseScheduleLight = document.querySelector(
    '#holderMidTwoForPentHouseSchedule'
  ).style.backgroundColor;
  let pMidTwoForPentHouseScheduleLight = document.querySelector(
    '#pMidTwoForPentHouseSchedule'
  ).style.color;

  document.querySelector('#bottomMidTwoForAppContainer').style.backgroundColor =
    bottomMidTwoForAppContainerLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#bottomMidTwoForAppHolderOne').style.borderBottom =
    bottomMidTwoForAppHolderOneBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#bottomMidTwoForAppHolderTwo').style.borderBottom =
    bottomMidTwoForAppHolderTwoBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#bottomMidTwoForAppHolderThree').style.borderBottom =
    bottomMidTwoForAppHolderThreeBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pBottomMidTwoForAppOne').style.color =
    pBottomMidTwoForAppOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForAppTwo').style.color =
    pBottomMidTwoForAppTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForAppThree').style.color =
    pBottomMidTwoForAppThreeColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForAppFour').style.color =
    pBottomMidTwoForAppFourColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForAppFive').style.color =
    pBottomMidTwoForAppFiveColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForAppSix').style.color =
    pBottomMidTwoForAppSixColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForAppSeven').style.color =
    pBottomMidTwoForAppSevenColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForAppEight').style.color =
    pBottomMidTwoForAppEightColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForAppOne').style.color =
    pBmtForAppOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBmtForAppTwo').style.color =
    pBmtForAppTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForAppThree').style.color =
    pBmtForAppThreeColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector(
    '#bottomMidTwoForVillaContainer'
  ).style.backgroundColor =
    bottomMidTwoForVillaContainerLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#bottomMidTwoForVillaHolderOne').style.borderBottom =
    bottomMidTwoForVillaHolderOneBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#bottomMidTwoForVillaHolderTwo').style.borderBottom =
    bottomMidTwoForVillaHolderTwoBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector(
    '#bottomMidTwoForVillaHolderThree'
  ).style.borderBottom =
    bottomMidTwoForVillaHolderThreeBbLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pBottomMidTwoForVillaOne').style.color =
    pBottomMidTwoForVillaOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForVillaTwo').style.color =
    pBottomMidTwoForVillaTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForVillaThree').style.color =
    pBottomMidTwoForVillaThreeColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForVillaFour').style.color =
    pBottomMidTwoForVillaFourColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForVillaFive').style.color =
    pBottomMidTwoForVillaFiveColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForVillaSix').style.color =
    pBottomMidTwoForVillaSixColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForVillaSeven').style.color =
    pBottomMidTwoForVillaSevenColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForVillaEight').style.color =
    pBottomMidTwoForVillaEightColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForVillaOne').style.color =
    pBmtForVillaOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBmtForVillaTwo').style.color =
    pBmtForVillaTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForVillaThree').style.color =
    pBmtForVillaThreeColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector(
    '#bottomMidTwoForPentHouseContainer'
  ).style.backgroundColor =
    bottomMidTwoForPentHouseContainerLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector(
    '#bottomMidTwoForPentHouseHolderOne'
  ).style.borderBottom =
    bottomMidTwoForPentHouseHolderOneBbLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector(
    '#bottomMidTwoForPentHouseHolderTwo'
  ).style.borderBottom =
    bottomMidTwoForPentHouseHolderTwoBbLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector(
    '#bottomMidTwoForPentHouseHolderThree'
  ).style.borderBottom =
    bottomMidTwoForPentHouseHolderThreeBbLight ===
    '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pBottomMidTwoForPentHouseOne').style.color =
    pBottomMidTwoForPentHouseOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForPentHouseTwo').style.color =
    pBottomMidTwoForPentHouseTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForPentHouseThree').style.color =
    pBottomMidTwoForPentHouseThreeColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForPentHouseFour').style.color =
    pBottomMidTwoForPentHouseFourColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForPentHouseFive').style.color =
    pBottomMidTwoForPentHouseFiveColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForPentHouseSix').style.color =
    pBottomMidTwoForPentHouseSixColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBottomMidTwoForPentHouseSeven').style.color =
    pBottomMidTwoForPentHouseSevenColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBottomMidTwoForPentHouseEight').style.color =
    pBottomMidTwoForPentHouseEightColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForPentHouseOne').style.color =
    pBmtForPentHouseOneColorLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBmtForPentHouseTwo').style.color =
    pBmtForPentHouseTwoColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#pBmtForPentHouseThree').style.color =
    pBmtForPentHouseThreeColorLight === 'rgb(150, 150, 150)'
      ? 'rgb(112, 112, 112)'
      : 'rgb(150, 150, 150)';

  document.querySelector('#midTwoForAppSchedule').style.backgroundColor =
    midTwoForAppScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';

  document.querySelector('#holderMidTwoForAppSchedule').style.backgroundColor =
    holderMidTwoForAppScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(55, 55, 55)'
      : 'rgb(175, 175, 175)';

  document.querySelector('#pMidTwoForAppSchedule').style.color =
    pMidTwoForAppScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#midTwoForVillaSchedule').style.backgroundColor =
    midTwoForVillaScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';

  document.querySelector(
    '#holderMidTwoForVillaSchedule'
  ).style.backgroundColor =
    holderMidTwoForVillaScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(55, 55, 55)'
      : 'rgb(175, 175, 175)';

  document.querySelector('#pMidTwoForVillaSchedule').style.color =
    pMidTwoForVillaScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#midTwoForPentHouseSchedule').style.backgroundColor =
    midTwoForPentHouseScheduleLight === 'rgb(207, 207, 207)'
      ? 'rgb(40, 40, 40)'
      : 'rgb(207, 207, 207)';

  document.querySelector(
    '#holderMidTwoForPentHouseSchedule'
  ).style.backgroundColor =
    holderMidTwoForPentHouseScheduleLight === 'rgb(175, 175, 175)'
      ? 'rgb(55, 55, 55)'
      : 'rgb(175, 175, 175)';

  document.querySelector('#pMidTwoForPentHouseSchedule').style.color =
    pMidTwoForPentHouseScheduleLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';
});

//////////////////////////////////////

// bottomOne

lightModeToggle.addEventListener('click', function () {
  let pTitleBmOneTwoLight =
    document.querySelector('#pTitleBmOneTwo').style.color;

  let detailsBmOneOneLight =
    document.querySelector('#detailsBmOneOne').style.backgroundColor;

  let pLuxOneLight = document.querySelector('#pLuxOne').style.backgroundColor;
  let pLuxOneColorLight = document.querySelector('#pLuxOne').style.color;

  let detailsAddAndSpecsOneLight = document.querySelector(
    '#detailsAddAndSpecsOne'
  ).style.borderBottom;

  let pAddOneLight = document.querySelector('#pAddOne').style.color;

  let pBedOneLight = document.querySelector('#pBedOne').style.color;
  let spanBedOneLight = document.querySelector('#spanBedOne').style.color;

  let pBathOneLight = document.querySelector('#pBathOne').style.color;
  let spanBathOneLight = document.querySelector('#spanBathOne').style.color;

  let pAreaOneLight = document.querySelector('#pAreaOne').style.color;
  let spanAreaOneLight = document.querySelector('#spanAreaOne').style.color;

  let pFloorOneLight = document.querySelector('#pFloorOne').style.color;
  let spanFloorOneLight = document.querySelector('#spanFloorOne').style.color;

  let pParkingOneLight = document.querySelector('#pParkingOne').style.color;
  let spanParkingOneLight =
    document.querySelector('#spanParkingOne').style.color;

  let detailsBmOneOneButtonLight = document.querySelector(
    '#detailsBmOneOneButton'
  ).style.backgroundColor;
  let detailsBmOneOneButtonColorLight = document.querySelector(
    '#detailsBmOneOneButton'
  ).style.color;

  //////////////////////////////////////

  let detailsBmOneTwoLight =
    document.querySelector('#detailsBmOneTwo').style.backgroundColor;

  let pLuxTwoLight = document.querySelector('#pLuxTwo').style.backgroundColor;
  let pLuxTwoColorLight = document.querySelector('#pLuxTwo').style.color;

  let detailsAddAndSpecsTwoLight = document.querySelector(
    '#detailsAddAndSpecsTwo'
  ).style.borderBottom;

  let pAddTwoLight = document.querySelector('#pAddTwo').style.color;

  let pBedTwoLight = document.querySelector('#pBedTwo').style.color;
  let spanBedTwoLight = document.querySelector('#spanBedTwo').style.color;

  let pBathTwoLight = document.querySelector('#pBathTwo').style.color;
  let spanBathTwoLight = document.querySelector('#spanBathTwo').style.color;

  let pAreaTwoLight = document.querySelector('#pAreaTwo').style.color;
  let spanAreaTwoLight = document.querySelector('#spanAreaTwo').style.color;

  let pFloorTwoLight = document.querySelector('#pFloorTwo').style.color;
  let spanFloorTwoLight = document.querySelector('#spanFloorTwo').style.color;

  let pParkingTwoLight = document.querySelector('#pParkingTwo').style.color;
  let spanParkingTwoLight =
    document.querySelector('#spanParkingTwo').style.color;

  let detailsBmOneTwoButtonLight = document.querySelector(
    '#detailsBmOneTwoButton'
  ).style.backgroundColor;
  let detailsBmOneTwoButtonColorLight = document.querySelector(
    '#detailsBmOneTwoButton'
  ).style.color;

  //////////////////////////////////////

  let detailsBmOneThreeLight =
    document.querySelector('#detailsBmOneThree').style.backgroundColor;

  let pLuxThreeLight =
    document.querySelector('#pLuxThree').style.backgroundColor;
  let pLuxThreeColorLight = document.querySelector('#pLuxThree').style.color;

  let detailsAddAndSpecsThreeLight = document.querySelector(
    '#detailsAddAndSpecsThree'
  ).style.borderBottom;

  let pAddThreeLight = document.querySelector('#pAddThree').style.color;

  let pBedThreeLight = document.querySelector('#pBedThree').style.color;
  let spanBedThreeLight = document.querySelector('#spanBedThree').style.color;

  let pBathThreeLight = document.querySelector('#pBathThree').style.color;
  let spanBathThreeLight = document.querySelector('#spanBathThree').style.color;

  let pAreaThreeLight = document.querySelector('#pAreaThree').style.color;
  let spanAreaThreeLight = document.querySelector('#spanAreaThree').style.color;

  let pFloorThreeLight = document.querySelector('#pFloorThree').style.color;
  let spanFloorThreeLight =
    document.querySelector('#spanFloorThree').style.color;

  let pParkingThreeLight = document.querySelector('#pParkingThree').style.color;
  let spanParkingThreeLight =
    document.querySelector('#spanParkingThree').style.color;

  let detailsBmOneThreeButtonLight = document.querySelector(
    '#detailsBmOneThreeButton'
  ).style.backgroundColor;
  let detailsBmOneThreeButtonColorLight = document.querySelector(
    '#detailsBmOneThreeButton'
  ).style.color;

  //////////////////////////////////////

  let detailsBmOneFourLight =
    document.querySelector('#detailsBmOneFour').style.backgroundColor;

  let pLuxFourLight = document.querySelector('#pLuxFour').style.backgroundColor;
  let pLuxFourColorLight = document.querySelector('#pLuxFour').style.color;

  let detailsAddAndSpecsFourLight = document.querySelector(
    '#detailsAddAndSpecsFour'
  ).style.borderBottom;

  let pAddFourLight = document.querySelector('#pAddFour').style.color;

  let pBedFourLight = document.querySelector('#pBedFour').style.color;
  let spanBedFourLight = document.querySelector('#spanBedFour').style.color;

  let pBathFourLight = document.querySelector('#pBathFour').style.color;
  let spanBathFourLight = document.querySelector('#spanBathFour').style.color;

  let pAreaFourLight = document.querySelector('#pAreaFour').style.color;
  let spanAreaFourLight = document.querySelector('#spanAreaFour').style.color;

  let pFloorFourLight = document.querySelector('#pFloorFour').style.color;
  let spanFloorFourLight = document.querySelector('#spanFloorFour').style.color;

  let pParkingFourLight = document.querySelector('#pParkingFour').style.color;
  let spanParkingFourLight =
    document.querySelector('#spanParkingFour').style.color;

  let detailsBmOneFourButtonLight = document.querySelector(
    '#detailsBmOneFourButton'
  ).style.backgroundColor;
  let detailsBmOneFourButtonColorLight = document.querySelector(
    '#detailsBmOneFourButton'
  ).style.color;

  //////////////////////////////////////

  let detailsBmOneFiveLight =
    document.querySelector('#detailsBmOneFive').style.backgroundColor;

  let pLuxFiveLight = document.querySelector('#pLuxFive').style.backgroundColor;
  let pLuxFiveColorLight = document.querySelector('#pLuxFive').style.color;

  let detailsAddAndSpecsFiveLight = document.querySelector(
    '#detailsAddAndSpecsFive'
  ).style.borderBottom;

  let pAddFiveLight = document.querySelector('#pAddFive').style.color;

  let pBedFiveLight = document.querySelector('#pBedFive').style.color;
  let spanBedFiveLight = document.querySelector('#spanBedFive').style.color;

  let pBathFiveLight = document.querySelector('#pBathFive').style.color;
  let spanBathFiveLight = document.querySelector('#spanBathFive').style.color;

  let pAreaFiveLight = document.querySelector('#pAreaFive').style.color;
  let spanAreaFiveLight = document.querySelector('#spanAreaFive').style.color;

  let pFloorFiveLight = document.querySelector('#pFloorFive').style.color;
  let spanFloorFiveLight = document.querySelector('#spanFloorFive').style.color;

  let pParkingFiveLight = document.querySelector('#pParkingFive').style.color;
  let spanParkingFiveLight =
    document.querySelector('#spanParkingFive').style.color;

  let detailsBmOneFiveButtonLight = document.querySelector(
    '#detailsBmOneFiveButton'
  ).style.backgroundColor;
  let detailsBmOneFiveButtonColorLight = document.querySelector(
    '#detailsBmOneFiveButton'
  ).style.color;

  //////////////////////////////////////

  let detailsBmOneSixLight =
    document.querySelector('#detailsBmOneSix').style.backgroundColor;

  let pLuxSixLight = document.querySelector('#pLuxSix').style.backgroundColor;
  let pLuxSixColorLight = document.querySelector('#pLuxSix').style.color;

  let detailsAddAndSpecsSixLight = document.querySelector(
    '#detailsAddAndSpecsSix'
  ).style.borderBottom;

  let pAddSixLight = document.querySelector('#pAddSix').style.color;

  let pBedSixLight = document.querySelector('#pBedSix').style.color;
  let spanBedSixLight = document.querySelector('#spanBedSix').style.color;

  let pBathSixLight = document.querySelector('#pBathSix').style.color;
  let spanBathSixLight = document.querySelector('#spanBathSix').style.color;

  let pAreaSixLight = document.querySelector('#pAreaSix').style.color;
  let spanAreaSixLight = document.querySelector('#spanAreaSix').style.color;

  let pFloorSixLight = document.querySelector('#pFloorSix').style.color;
  let spanFloorSixLight = document.querySelector('#spanFloorSix').style.color;

  let pParkingSixLight = document.querySelector('#pParkingSix').style.color;
  let spanParkingSixLight =
    document.querySelector('#spanParkingSix').style.color;

  let detailsBmOneSixButtonLight = document.querySelector(
    '#detailsBmOneSixButton'
  ).style.backgroundColor;
  let detailsBmOneSixButtonColorLight = document.querySelector(
    '#detailsBmOneSixButton'
  ).style.color;

  document.querySelector('#pTitleBmOneTwo').style.color =
    pTitleBmOneTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#detailsBmOneOne').style.backgroundColor =
    detailsBmOneOneLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxOne').style.backgroundColor =
    pLuxOneLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxOne').style.color =
    pLuxOneColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsOne').style.borderBottom =
    detailsAddAndSpecsOneLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddOne').style.color =
    pAddOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedOne').style.color =
    pBedOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedOne').style.color =
    spanBedOneLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathOne').style.color =
    pBathOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathOne').style.color =
    spanBathOneLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaOne').style.color =
    pAreaOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaOne').style.color =
    spanAreaOneLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorOne').style.color =
    pFloorOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorOne').style.color =
    spanFloorOneLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingOne').style.color =
    pParkingOneLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingOne').style.color =
    spanParkingOneLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneOneButton').style.backgroundColor =
    detailsBmOneOneButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneOneButton').style.color =
    detailsBmOneOneButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';

  document.querySelector('#detailsBmOneTwo').style.backgroundColor =
    detailsBmOneTwoLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxTwo').style.backgroundColor =
    pLuxTwoLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxTwo').style.color =
    pLuxTwoColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsTwo').style.borderBottom =
    detailsAddAndSpecsTwoLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddTwo').style.color =
    pAddTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedTwo').style.color =
    pBedTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedTwo').style.color =
    spanBedTwoLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathTwo').style.color =
    pBathTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathTwo').style.color =
    spanBathTwoLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaTwo').style.color =
    pAreaTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaTwo').style.color =
    spanAreaTwoLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorTwo').style.color =
    pFloorTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorTwo').style.color =
    spanFloorTwoLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingTwo').style.color =
    pParkingTwoLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingTwo').style.color =
    spanParkingTwoLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneTwoButton').style.backgroundColor =
    detailsBmOneTwoButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneTwoButton').style.color =
    detailsBmOneTwoButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';

  document.querySelector('#detailsBmOneThree').style.backgroundColor =
    detailsBmOneThreeLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxThree').style.backgroundColor =
    pLuxThreeLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxThree').style.color =
    pLuxThreeColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsThree').style.borderBottom =
    detailsAddAndSpecsThreeLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddThree').style.color =
    pAddThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedThree').style.color =
    pBedThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedThree').style.color =
    spanBedThreeLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathThree').style.color =
    pBathThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathThree').style.color =
    spanBathThreeLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaThree').style.color =
    pAreaThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaThree').style.color =
    spanAreaThreeLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorThree').style.color =
    pFloorThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorThree').style.color =
    spanFloorThreeLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingThree').style.color =
    pParkingThreeLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingThree').style.color =
    spanParkingThreeLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneThreeButton').style.backgroundColor =
    detailsBmOneThreeButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneThreeButton').style.color =
    detailsBmOneThreeButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';

  document.querySelector('#detailsBmOneFour').style.backgroundColor =
    detailsBmOneFourLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxFour').style.backgroundColor =
    pLuxFourLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxFour').style.color =
    pLuxFourColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsFour').style.borderBottom =
    detailsAddAndSpecsFourLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddFour').style.color =
    pAddFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedFour').style.color =
    pBedFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedFour').style.color =
    spanBedFourLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathFour').style.color =
    pBathFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathFour').style.color =
    spanBathFourLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaFour').style.color =
    pAreaFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaFour').style.color =
    spanAreaFourLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorFour').style.color =
    pFloorFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorFour').style.color =
    spanFloorFourLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingFour').style.color =
    pParkingFourLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingFour').style.color =
    spanParkingFourLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneFourButton').style.backgroundColor =
    detailsBmOneFourButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneFourButton').style.color =
    detailsBmOneFourButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';

  document.querySelector('#detailsBmOneFive').style.backgroundColor =
    detailsBmOneFiveLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxFive').style.backgroundColor =
    pLuxFiveLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxFive').style.color =
    pLuxFiveColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsFive').style.borderBottom =
    detailsAddAndSpecsFiveLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddFive').style.color =
    pAddFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedFive').style.color =
    pBedFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedFive').style.color =
    spanBedFiveLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathFive').style.color =
    pBathFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathFive').style.color =
    spanBathFiveLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaFive').style.color =
    pAreaFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaFive').style.color =
    spanAreaFiveLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorFive').style.color =
    pFloorFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorFive').style.color =
    spanFloorFiveLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingFive').style.color =
    pParkingFiveLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingFive').style.color =
    spanParkingFiveLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneFiveButton').style.backgroundColor =
    detailsBmOneFiveButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneFiveButton').style.color =
    detailsBmOneFiveButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';

  document.querySelector('#detailsBmOneSix').style.backgroundColor =
    detailsBmOneSixLight === 'rgb(228, 228, 228)'
      ? 'rgb(28, 28, 28)'
      : 'rgb(228, 228, 228)';

  document.querySelector('#pLuxSix').style.backgroundColor =
    pLuxSixLight === 'rgb(255, 210, 180)'
      ? 'rgb(120, 65, 50)'
      : 'rgb(255, 210, 180)';

  document.querySelector('#pLuxSix').style.color =
    pLuxSixColorLight === 'rgb(95, 95, 95)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(95, 95, 95)';

  document.querySelector('#detailsAddAndSpecsSix').style.borderBottom =
    detailsAddAndSpecsSixLight === '0.5px solid rgb(200, 200, 200)'
      ? '0.5px solid rgb(55, 55, 55)'
      : '0.5px solid rgb(200, 200, 200)';

  document.querySelector('#pAddSix').style.color =
    pAddSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#pBedSix').style.color =
    pBedSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBedSix').style.color =
    spanBedSixLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pBathSix').style.color =
    pBathSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanBathSix').style.color =
    spanBathSixLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pAreaSix').style.color =
    pAreaSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanAreaSix').style.color =
    spanAreaSixLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pFloorSix').style.color =
    pFloorSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanFloorSix').style.color =
    spanFloorSixLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#pParkingSix').style.color =
    pParkingSixLight === 'rgb(110, 110, 110)'
      ? 'rgb(150, 150, 150)'
      : 'rgb(110, 110, 110)';

  document.querySelector('#spanParkingSix').style.color =
    spanParkingSixLight === 'rgb(100, 100, 100)'
      ? 'rgb(170, 170, 170)'
      : 'rgb(100, 100, 100)';

  document.querySelector('#detailsBmOneSixButton').style.backgroundColor =
    detailsBmOneSixButtonLight === 'rgb(180, 180, 180)'
      ? 'rgb(75, 75, 75)'
      : 'rgb(180, 180, 180)';

  document.querySelector('#detailsBmOneSixButton').style.color =
    detailsBmOneSixButtonColorLight === 'rgb(45, 45, 45)'
      ? 'rgb(220, 220, 220)'
      : 'rgb(45, 45, 45)';
});
