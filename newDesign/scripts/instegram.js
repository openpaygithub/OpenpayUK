

$(document).on('click','.ig-tile',function(){
    window.open('https://www.instagram.com/openpay_', '_blank')
})

$(document).on('click','.facebook',function(){
    window.open('https://facebook.com/openpayau', '_blank')
})

//Initialize AJAX call
$.ajax({
    "async": true,
    "crossDomain": true,
    "url":'https://api.instagram.com/v1/users/self/media/recent/?access_token=3532006718.963a374.9d59629ecc2641ef9361f16bd356ec65',
    "method": "GET",
    success:(response) => {
        var noOfItems = response.data.length;
        $('#instagram').css({"width": (noOfItems * 144) + 'px'})
        var photos = response.data.map(x => x.images.low_resolution.url);
        photos.map((p,i) =>  $('#instagram').append(`<img class='ig-tile' key=${i} src=${p}>`))
    }
});