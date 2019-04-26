function triggeerMenu () {
    const btnTrigger = document.querySelector('.trigger-menu');
    const menuBlock = document.querySelector('.header-nav');
    const header = document.querySelector('.header-wrap');

    btnTrigger.addEventListener('click', () => {
        console.log();
        if(menuBlock.classList[1] === 'header-nav_disable') {
            menuBlock.classList.remove('header-nav_disable')
            header.style.cssText = "height: 200px"
        } else {
            menuBlock.classList.add('header-nav_disable')
            header.style.cssText = "height: 115px"
        }

    })
}

function showCookie () {
    const cookiesList = document.cookie.split('; ');
    if(!cookiesList.includes('showCookieDialog=yes')) {
        document.cookie = 'showCookieDialog=yes; max-age=604800';
        $('.cookie-popup').show();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    triggeerMenu();
    showCookie();
});

$(document).ready(function() {
    $('.cookie-popup__button').click(function() {
        $('.cookie-popup').hide();
    })
 });