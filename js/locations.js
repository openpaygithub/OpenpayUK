$(document).ready(function(){


// window.localStorage.clear()
var string = localStorage.getItem('locations')
console.log('STRING',string)
var parsed = JSON.parse(string)
var name = localStorage.getItem('name')
var isOnline = localStorage.getItem('online')
console.log('PARSED',parsed)
// $('#location-title').html(name)

const locationsGet = (array,id) => {
	console.log('ARRAY',array)
    $('#location-title').val(id)

    array.map((l,i) => $('.location-tiles').append(`
                <div class='card-tile'>
                    <div class='info-section'>
                        <p class='category'>${isOnline === false ? 'In-store' : 'Online'}</p>
                        <p>${l.storeAddress1 ? l.storeAddress1 : ''}</p>
                        <p>${l.storeSuburb ? l.storeSuburb : ''},${l.storeState ? l.storeState : ''} ${l.storePostCode ? l.storePostCode :''}</p>
                        <p>${l.phoneNumber ? l.phoneNumber : ''}</p>
                        <div class='icons'>
                            ${l.phoneNumber ? `<a class='phone' data='web' href=${l.phoneNumber}><div></div></a>` : ''}
                            ${l.url ? `<a class='website launch' data=${l.url} href='#'><div></div></a>` : ''}
                            ${l.location ? `<a target="_blank" class='loc' href='https://www.google.com/maps/?q=${l.location.latitude},${l.location.longitude}'><div></div></a>` : ''}
                        </div>
                    </div>
                    <div class='image'>
                        	${
                        		// l.brandLogo ? 
                        		// 	`<img src=https://s3-ap-southeast-2.amazonaws.com/retailer-static.openpay.com.au/retailer-logos/${l.brandLogo}/>`
                        		// 	:
                        				`<h4>${l.brandName}</h4>`
                        	}
                    </div>
                </div>`))
}

locationsGet(parsed)

// if(parsed[0].brandImage){
// 	$('#loc-hero').attr('style',`background-image:url(${parsed[0].brandImage})`)
// }
// else{
// 	$('#loc-hero').attr('style','background: linear-gradient(140.11deg, #2864FF 0%, #00E1B4 100%)')
// }


$('#location-info').append(`
    <div style='background-image:url(${parsed[0].brandImage ? parsed[0].brandImage : ''})' class="b-image">${parsed[0].brandImage ? '' : `<h4>${parsed[0].brandName}</h4>`}</div>
        <div class='l-info-box'>
            
            <h3>${parsed.length} locations</h3>
            <a class='launch' data=${parsed[0].url} href=$'#'>
                <img src='./assets/site.svg'
                <h3>Shop online</h3>
            </a>
        </div>
        `)


$(document).on('click','.launch',function(){
    var site = $(this).attr('data')
    console.log('SITE',site)
    if(site.startsWith('http')){
        window.open(site,"_blank")
    }
    else if(site.startsWith('www')){
        window.open(`https://${site}`,"_blank")
    }
    else{
        window.open(`https://www.${site}`,"_blank")
    }
    
})

})