function showCookie () {
    const cookiesList = document.cookie.split('; ');
    if(!cookiesList.includes('showCookieDialog=yes')) {
        document.cookie = 'showCookieDialog=yes; max-age=604800';
        $('.cookie-popup').show();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showCookie();
});

$(document).ready(function() {
    $('.cookie-popup__button').click(function() {
        $('.cookie-popup').hide();
    })
 });