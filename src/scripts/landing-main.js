function showCookie() {
  const cookiesList = document.cookie.split('; ');
  if (!cookiesList.includes('showCookieDialog=yes')) {
    document.cookie = 'showCookieDialog=yes; max-age=604800';
    const cookiePopup = document.querySelector('.cookie-popup');
    cookiePopup.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showCookie();
});

document
  .querySelector('.cookie-popup__button')
  .addEventListener('click', () => {
    document.querySelector('.cookie-popup').style.display = 'none';
  });
