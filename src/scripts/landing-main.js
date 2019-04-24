function showCookie () {
    if(Cookies.get('showCookieDialog') == null) {
        Cookies.set('showCookieDialog', 'yes', { expires: 7});
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