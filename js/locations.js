$(document).ready(function(){

var string = localStorage.getItem('locations')
// console.log('STRING',string)
var parsed = JSON.parse(string)
var name = localStorage.getItem('name')
// console.log('PARSED',parsed)
// $('#location-title').html(name)

const locationsGet = (array,id) => {
	console.log('ARRAY',array)
    $('#location-title').val(id)

    array.map((l,i) => $('.location-tiles').append(`
                <div class='card-tile'>
                    <div class='info-section'>
                        <p class='category'>category placeholder</p>
                        <p>${l.storeAddress1}</p>
                        <p>${l.storeSuburb},${l.storeState} ${l.storePostCode}</p>
                        <p>${l.phoneNumber ? l.phoneNumber : ''}</p>
                        <div class='icons'>
                            ${l.phoneNumber ? `<a class='phone' data='web' href=${l.phoneNumber}><div></div></a>` : ''}
                            ${l.url ? `<a class='website' href=${url}><div></div></a>` : ''}
                            ${l.location ? `<a target="_blank" class='loc' href='https://www.google.com/maps/?q=${l.location.latitude},${l.location.longitude}'><div></div></a>` : ''}
                        </div>
                    </div>
                    <div class='image'>
                        	${
                        		l.brandLogo ? 
                        			`<img src=${l.brandLogo}/>`
                        			:
                        				`<h4>${l.brandName}</h4>`
                        	}
                    </div>
                </div>`))
}

locationsGet(parsed)

if(parsed[0].brandImage){
	$('#loc-hero').attr('style',`background-image:url(${parsed[0].brandImage})`)
}
else{
	$('#loc-hero').attr('style','background: linear-gradient(140.11deg, #2864FF 0%, #00E1B4 100%)')
}


$('#location-info').append(`
    <div style='background-image:url(${parsed[0].brandImage ? parsed[0].brandImage : ''})' class="b-image">${parsed[0].brandImage ? '' : `<h4>${parsed[0].brandName}</h4>`}</div>
        <div class='l-info-box'>
            <label>online - totes</label>
            <h3>${parsed.length} locations</h3>
        </div>
        <a href=${parsed[0].url}>
            <img src='./assets/site.svg'
            <h3>Shop online</h3>
        </>`)

})