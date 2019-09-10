function triggerMenu() {
  const btnTrigger = document.querySelector('.trigger-menu');
  const menuBlock = document.querySelector('.header-nav');
  const headerWrap = document.querySelector('.header-wrap');
  const header = document.querySelector('.header');
  const page = document.querySelector('body');
  const navList = document.querySelector('.nav-list');

  btnTrigger.addEventListener('click', () => {
    if (menuBlock.classList[1] === 'header-nav_disable') {
      menuBlock.classList.remove('header-nav_disable');
      btnTrigger.classList.add('trigger-menu--active');
      header.classList.add('header--border');
      page.classList.add('page--mobile');
      navList.classList.add('nav-list--active');
      headerWrap.style.cssText = 'height: 100vh';
    } else {
      menuBlock.classList.add('header-nav_disable');
      btnTrigger.classList.remove('trigger-menu--active');
      header.classList.remove('header--border');
      page.classList.remove('page--mobile');
      navList.classList.remove('nav-list--active');
      headerWrap.style.cssText = 'height: 60px';
    }
  });
}

function sendEvent({ eventCategory, eventAction, eventLabel } = {}) {
  if ('ga' in window) {
    ga(function() {
      const tracker = ga.create('UA-84225706-10', 'auto');

      if (tracker) {
        console.log(eventAction, eventCategory, eventLabel);
        debugger;
        tracker.send('event', eventCategory, eventAction, eventLabel);
      }
    });
  }
}

function showCookie() {
  const cookiesList = document.cookie.split('; ');
  if (!cookiesList.includes('showCookieDialog=yes')) {
    document.cookie = 'showCookieDialog=yes; max-age=604800';
    const cookiePopup = document.querySelector('.cookie-popup');
    cookiePopup.style.display = 'block';
  }
}

function preventRedirect() {
    const thankYouMessage = document.querySelector(".thankyou");
    const form = document.querySelector(".feedback_form");
    if (thankYouMessage) {
      form.style.display = "none";
      thankYouMessage.style.display = "block";
      window.location.href = "https://www.myopenpay.co.uk/"
    }
}

document.addEventListener('DOMContentLoaded', () => {
  triggerMenu();
  showCookie();
});

document
  .querySelector('.cookie-popup__button')
  .addEventListener('click', () => {
    document.querySelector('.cookie-popup').style.display = 'none';
  });

function addEventOnClick (selector, event) {
  Array.from(document.querySelectorAll(selector)).forEach((el) => {
    el.addEventListener('click', () => {
      sendEvent(event);
    });
  });
}

addEventOnClick('[href="https://consumer.myopenpay.co.uk/login"', {
  eventCategory: 'Login',
  eventAction: 'Click',
  eventLabel: 'Login clicked header'
});

addEventOnClick('[href="https://consumer.myopenpay.co.uk/signup-customer"', {
  eventCategory: 'Signup',
  eventAction: 'Click',
  eventLabel: 'Signup clicked header'
});

addEventOnClick('[href="https://consumer.myopenpay.co.uk/signup-customer"', {
  eventCategory: 'Signup',
  eventAction: 'Click',
  eventLabel: 'Signup clicked header'
});

addEventOnClick('[href="https://consumer.myopenpay.co.uk/signup-customer"', {
  eventCategory: 'Signup',
  eventAction: 'Click',
  eventLabel: 'Signup clicked header'
});
