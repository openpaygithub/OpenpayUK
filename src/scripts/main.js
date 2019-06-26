function triggerMenu() {
  const btnTrigger = document.querySelector('.trigger-menu');
  const menuBlock = document.querySelector('.header-nav');
  const header = document.querySelector('.header-wrap');

  btnTrigger.addEventListener('click', () => {
    if (menuBlock.classList[1] === 'header-nav_disable') {
      menuBlock.classList.remove('header-nav_disable');
      btnTrigger.classList.add('trigger-menu--active');
      header.style.cssText = 'height: 260px';
    } else {
      menuBlock.classList.add('header-nav_disable');
      btnTrigger.classList.remove('trigger-menu--active');
      header.style.cssText = 'height: 90px';
    }
  });
}

function showCookie() {
  const cookiesList = document.cookie.split('; ');
  if (!cookiesList.includes('showCookieDialog=yes')) {
    document.cookie = 'showCookieDialog=yes; max-age=604800';
    const cookiePopup = document.querySelector('.cookie-popup');
    cookiePopup.style.display = 'block';
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
