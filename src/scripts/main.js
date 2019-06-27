function triggerMenu() {
  const btnTrigger = document.querySelector('.trigger-menu');
  const menuBlock = document.querySelector('.header-nav');
  const headerWrap = document.querySelector('.header-wrap');
  const header = document.querySelector('.header');
  const page = document.querySelector('body');

  btnTrigger.addEventListener('click', () => {
    if (menuBlock.classList[1] === 'header-nav_disable') {
      menuBlock.classList.remove('header-nav_disable');
      btnTrigger.classList.add('trigger-menu--active');
      header.classList.add('header--border');
      page.classList.add('page--mobile');
      headerWrap.style.cssText = 'height: 100vh';
    } else {
      menuBlock.classList.add('header-nav_disable');
      btnTrigger.classList.remove('trigger-menu--active');
      header.classList.remove('header--border');
      page.classList.remove('page--mobile');
      headerWrap.style.cssText = 'height: 60px';
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
