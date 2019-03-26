function triggeerMenu () {
    const btnTrigger = document.querySelector('.trigger-menu');
    const menuBlock = document.querySelector('.header-nav');
    const header = document.querySelector('.header-wrap');

    btnTrigger.addEventListener('click', () => {
        console.log();
        if(menuBlock.classList[1] === 'header-nav_disable') {
            menuBlock.classList.remove('header-nav_disable')
            header.style.cssText = "height: 300px"
        } else {
            menuBlock.classList.add('header-nav_disable')
            header.style.cssText = "height: 115px"
        }

    })
}

document.addEventListener('DOMContentLoaded', () => {
    triggeerMenu();
});
