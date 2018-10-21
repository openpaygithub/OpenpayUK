$(document).ready(function(){


	const brands = ['./assets/images/CommerceVision.png','./assets/images/DemandWare.png','./assets/images/EPages.png','./assets/images/Estar.png',
	'./assets/images/Magento.png','./assets/images/Magento2.png','./assets/images/Pronto.png','./assets/images/shopify.png','./assets/images/ShopifyPLus.png','./assets/images/WooCommerce.png','./assets/images/Seams.png','./assets/images/Opencart.png']
	const blank = 
	`<div class='blank-brand'></div>
	`
	
	brands.map((t,i) => $('#brand-row').append(`<img class='logos' src=${t}>`))

	document.getElementById('bran')

	$('#go').on('click',function(){
		window.location.href='Form.html'
	})


})