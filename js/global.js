$(document).ready(function(){

	const openStore = (url) => {
		var win = window.open(url, '_blank');
        win.focus();
	}

	$('.dl-app').on('click',() => {
		if(window.navigator.platform === 'MacIntel'){
			openStore('https://itunes.apple.com/au/app/openpay/id1166424403?mt=8')
		}
		else{
			openStore('https://play.google.com/store/apps/details?id=com.ocean.openpay')
		}
	})

	$('.download-close').on('click',function(){
		$('.download-banner').addClass('hide')
	})

	$('.hamburger-menu').on('click',function(){
		 console.log('asdas')
		$('.infoBox').addClass('hide')
		$('.side-menu').removeClass('hide')
	})

	$('.open-hamburger').on('click',function(){
		$('.infoBox').removeClass('hide')
		$('.side-menu').addClass('hide')
	})

	$('.slide').on('click', function(){
    $('#fade-in').toggleClass('show');
});



})