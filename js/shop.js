$(document).ready(function(){


let categories = []
let suburbs = []

brands=[]
let location = ''
let page = 1;
let selCat =''
let selSub=''
let keyword=''
const state = {location,page,selCat,selSub,keyword}

const apiURl = 'https://edf6f0c232.execute-api.ap-southeast-2.amazonaws.com/prod/'
const getCategories = () => { 
    const url = `${apiURl}categories`

    var settings = {
      "async": true,
      "crossDomain": true,
      "url":url,
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      },
      // "processData": false,
      // "data":token ,
      success:(response) => { 
        console.log('Categories Success',response)
        categories = response
        $('#sub-category').append(`<option value=''>Select Subcategory</option>`)
        $('#mobile-sub-category').append(`<option value=''>Select Subcategory</option>`)
        $('#category').append(`<option value=''>Select Category</option>`)
        $('#mobile-category').append(`<option value=''>Select Category</option>`)
        response.map((c,i) => $('#category').append(`<option class='category-item' value=${c.categoryID}>${c.categoryName}</option>`))
        response.map((c,i) => $('#mobile-category').append(`<option class='category-item' value=${c.categoryID}>${c.categoryName}</option>`))
        // fillSubCategories(response)
      },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
}

const fillSubCategories = (id) => {
    const subs = categories.filter(x => x.categoryID === id)
    if(subs[0] === undefined){
        $('#sub-category').append(`<option value=''>Select Subcategory</option>`)
    }
    else{
        console.log(subs)
        $('#sub-category').append(`<option value=''>Select Subcategory</option>`)
        subs[0].subcategories.map((s,i) =>  $('#sub-category').append(`<option value=${s.categoryID}>${s.subCategoryName}</option>`))
        subs[0].subcategories.map((s,i) =>  $('#mobile-sub-category').append(`<option value=${s.categoryID}>${s.subCategoryName}</option>`))
    }
}

$('#category').change(function(){
    const cat = $(this).val()
    console.log('CAT',cat)
    $('#sub-category').find('option').remove().end()
    $('#mobile-sub-category').find('option').remove().end()

    if(cat !== typeof Number){
      console.log('NAN',typeof cat)
      selCat = parseInt(cat)
    }
    else{
      console.log('Setting selCat')
      selCat = parseInt(cat)
    }
    
    getBrands(location,cat,selSub,page,keyword,true)
    fillSubCategories(parseInt(cat))

})

$('#mobile-category').change(function(){
    const cat = $(this).val()
    $('#sub-category').find('option').remove().end()
    $('#mobile-sub-category').find('option').remove().end()
    selCat = parseInt(cat)
    getBrands(location,cat,selSub,page,keyword,true)
    fillSubCategories(parseInt(cat))
})

$('#sub-category').change(function(){
    const cat = $(this).val()
    // $('#sub-category').find('option').remove().end()
    // $('#mobile-sub-category').find('option').remove().end()
    selSub = parseInt(cat)
    getBrands(location,selCat,cat,page,keyword,true)
    

})

$('#mobile-sub-category').change(function(){
    const cat = $(this).val()
    // $('#sub-category').find('option').remove().end()
    // $('#mobile-sub-category').find('option').remove().end()
    selSub = parseInt(cat)
    getBrands(location,selCat,cat,page,keyword,true)
})

getCategories()

const getSuburbs = (string) => {
    const url = `${apiURl}suburbs?keyword=${string}`
    var settings = {
      "async": true,
      "crossDomain": true,
      "url":url,
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      },
      success:(response) => { 
        console.log('Suburb success Success',response)
        suburbs = response
      },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
}


$('#location-field').on('keyup',function(){
    console.log('SUBURBS',suburbs)
    const loc = $('#location-field').val()
    getSuburbs(loc)
    if(suburbs.length > 0){
        $('#suburbs').removeClass('hide')
        $('#suburbs').empty()
        suburbs.map((s,i) => $('#suburbs').append(`<li class='suburb-item' data=${s.postCode}>${s.suburbName}, ${s.state} ${s.postCode}</li>`))
    }
})

$(document).on('click',function(){
  $('#suburbs').addClass('hide')
})

$(document).on('click','.suburb-item',function(){
    var selected = $(this).attr('data')
    location = selected
    $('#location-field').val(selected)
    $('#suburbs').addClass('hide')
    getBrands(selected,selCat,selSub,page,keyword,true)
})

// const runLoading = () => {
//     $('.cards').empty()
//     $('.loading').removeClass('hide')
// }

// const stopLoading = () => {
//      $('.loading').addClass('hide')
// }

const getTopBrands = () => {
  $('.loading-cir').removeClass('hide')
    url = `${apiURl}Brands?Location=3000&PageNum=1&PageSize=105`

    var settings = {
      "async": true,
      "crossDomain": true,
      "url":url,
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      },
      success:(response) => { 
        const filter = response.filter(x => x.isAdvertised === true)
        console.log('Top Brands',filter)
        brands = filter
        $('.loading-cir').addClass('hide')
        renderCards(filter,true)
      },
      error: (err) => {
        console.log('Error',err)
      }
    }


    $.ajax(settings)
}

const getBrands = (loc,cat,sub,pn,key,reset) => {
  $('.loading-cir').removeClass('hide')
  var params = {loc,cat,sub,page,key}
  console.log('PARAMETERS',params)
  let url
  if(cat == NaN || sub == NaN){
    console.log('NOT A NUMNER')
      url = `${apiURl}Brands?Location=${loc}&PageNum=${pn}&PageSize=${24}&Keyword=${key}`

  }
  else{
      url = `${apiURl}Brands?Location=${loc}&PageNum=${page}&PageSize=${24}&CategoryID=${cat}&SubCategoryID=${sub === NaN ? '':sub}&Keyword=${key}`
  }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url":url,
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      },
      success:(response) => { 
        console.log('Brands',response)
        brands = response
        $('.loading-cir').addClass('hide')
        renderCards(response,reset)
      },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
}


renderCards = (brands,reset) => {
  // console.log('STATE',state)
    if(page < 1 || reset === false){
      null
    }else{
      $('.cards').empty()
    }

    brands.length === 0 ?
        $('.cards').append(`
                <div class='card-tile'>
                    <div class='image-container'>
                        <div class='image'>
                              <h5>No Results</h5>
                        </div>
                    </div>
                    <div style='background-image:url(./assets/images/placeholder.png)' class='background'>
                        <div class='icon-box'></div>

                    </div>
                </div>`)
    :
    brands.map((l,i) => {
        $('.cards').append(`
                <div data=${l.brandID} name=${l.brandName} class='card-tile'>
                    <div class='image-container'>
                        <div class='image'>
                          ${
                            // l.logo ? 
                            //   `<img src='https://s3-ap-southeast-2.amazonaws.com/retailer-static.openpay.com.au/retailer-logos/${l.logo}' />`
                            //   :
                                `<h5>${l.brandName}</h5>`
                          }
                        </div>
                    </div>
                    <div style='background-image:url(./assets/images/placeholder.png)' class='background'>
                        <div class='icon-box'>
                            <div class='icons'>
                                ${l.url ? `<a class='website launch'  data=${l.url} href='#'><div></div></a>` : ''}
                                ${l.isWebOnly ? '' : `<a class='loc'><div></div></a>`}
                            </div>
                        </div>

                    </div>
                </div>`)
    })
}



$(document).on('click','.card-tile',function(){
    var data = $(this).attr('data')
    var name = $(this).attr('name')
    const url = `${apiURl}Brands/${data}`
    var settings = {
      "async": true,
      "crossDomain": true,
      "url":url,
      "method": "GET",
      "headers": {
        "content-type": "application/json"
      },
      success:(response) => { 
        console.log('Locations',response)
          
            var string = JSON.stringify(response.retailerLocations)
            console.log('STRING',response.retailerLocations)
                if(response.retailerLocations.length === 1){
                    var lat = response.retailerLocations[0].location.latitude
                    var long = response.retailerLocations[0].location.longitude
                    console.log(lat,long)
                    var win = window.open(`https://www.google.com/maps/?q=${lat},${long}`,'_blank')
                    win.focus()
                }
                else{
                    localStorage.setItem('name', name)
                    localStorage.setItem('locations', string)
                    // localStorage.setItem('online', response.isWebOnly)
                    console.log(name,string)
                    window.location.href='Locations.html'
                }
            },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
})


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

$('#keyword').on('input',function(e){
    const search = $(this).val()
    getBrands(location,selCat,selCat,page,search,true)
})




// const getLocation = () => {
//  window.navigator.geolocation.getCurrentPosition((location) =>{
//      const settings = {
//        "async": true,
//        "crossDomain": true,
//        "url":`http://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&sensor=true`,
//        "method": "GET",
//        "processData": false,
//        success:(response) => { 
//          console.log('Success',response)
//          const extract = response.results[0].address_components.filter(x => x.types[0] === 'postal_code')
//             const postcode = parseInt(extract[0].short_name)
//             console.log(postcode)
//             $('#postcode').val(postcode)
//             $('#location-field').val(postcode)
//             $('.modal-overlay').removeClass('hide-modal')
//        },
//        error: (err) => {
//          console.log('Error',err)
//        }
//      }
//      $.ajax(settings)
//  })
// }

const ipLookUp = () => {
    console.log('ip running')
    var storedLoc = window.localStorage.getItem('saved-post')
    var ppc = JSON.parse(storedLoc)
    if(storedLoc){
        console.log('stored')
        getBrands(ppc,selCat,selSub,page,keyword,true)
    }
  else{
      $.ajax('https://ip-api.com/json')
      .then(
          function success(response) {
              console.log('User\'s Location Data is ', response);
              console.log('User\'s Country', response.country);
              postcode = response.zip
              var pc = JSON.stringify(postcode)
              window.localStorage.setItem('saved-post',pc)
              $('#postcode').val(postcode)
              $('#location-field').val(postcode)
              $('.modal-overlay').removeClass('hide-modal')
              // getBrands(postcode,selCat,selSub,page,keyword,true)

                $('.close-modal').on('click',function(){
                    $('.modal-overlay').addClass('hide-modal')
                    $('#location-field').val('')
                    getTopBrands()
                })
                $('.activeBtn').on('click',function(){
                    $('.modal-overlay').addClass('hide-modal')
                    getBrands(postcode,selCat,selSub,page,keyword,true)
                })
          },
          function fail(data, status) {
              console.log('Request failed.  Returned status of',status);
              console.log('Running top brands');
              // getBrands(3000,selCat,selSub,page,keyword,true)
              getTopBrands()
          }
      );
  }
}

ipLookUp()



const filterType = (t) => {
	console.log(t)
	if(t === 'online'){
		const onlineOnly = brands.filter(x => x.retailerAvailability === 0)
		renderCards(onlineOnly)
	}
	else if( t === 'store'){
		const storeOnly = brands.filter(x => x.retailerAvailability === 1)
		renderCards(storeOnly)
	}
	else{
		renderCards(brands)
	}
}



// const typeItem = `<div class='active'></div>`


$('.list-item').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active').addClass('inactive')
	const type = $(this).attr('data')
    console.log(type)
    filterType(type)
})


$('#more').on('click',function(){
	console.log('asdas')
	$('.mobileSearchBoxes').toggleClass('hideBoxes')
})




//INFINITE SCROLL

// $(window).scroll(function() {
//     if ($(window).scrollTop() == $(document).height() - $('.cardContainer').height()) {
//       console.log('NEW PAGE',++page);
//       getBrands(location,selCat,selSub,page + 1,keyword)
//       $(".sub-content").append('<div class="cardContainer"></div>');
      
//     }
// })

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       page = page + 1
       getBrands(location,selCat,selSub,page,keyword,false)
   }
});




})








