$(document).ready(function(){



	$(window).on("scroll", function () {
	    if ($(this).scrollTop() > ($(window).height() - 10)) {
	        $("#invis").removeClass('invis-header-container')
	        $("#invis").addClass('header-container')
	        $(".changing").removeClass('invis-links').addClass('links');
	        
	    }
	    else {
	        $("#invis").addClass("invis-header-container").removeClass('header-container');
	        $(".changing").removeClass('links').addClass('invis-links');
	    }
	});

	var TxtRotate = function(el, toRotate, period) {
			  this.toRotate = toRotate;
			  this.el = el;
			  this.loopNum = 0;
			  this.period = parseInt(period, 10) || 2000;
			  this.txt = '';
			  this.tick();
			  this.isDeleting = false;
		};

		TxtRotate.prototype.tick = function() {
			  var i = this.loopNum % this.toRotate.length;
			  var fullTxt = this.toRotate[i];

			  if (this.isDeleting) {
			    this.txt = fullTxt.substring(0, this.txt.length - 1);
			  } else {
			    this.txt = fullTxt.substring(0, this.txt.length + 1);
			  }

			  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			  var that = this;
			  var delta = 100 - Math.random() * 100;

			  if (this.isDeleting) { delta /= 1; }

			  if (!this.isDeleting && this.txt === fullTxt) {
			    delta = this.period;
			    this.isDeleting = true;
			  } else if (this.isDeleting && this.txt === '') {
			    this.isDeleting = false;
			    this.loopNum++;
			    delta = 10;
			  }

			  setTimeout(function() {
			    that.tick();
			  }, delta);
			};

			function runTyper(){
			  var elements = document.getElementsByClassName('txt-rotate');
			  for (var i=0; i<elements.length; i++) {
			    var toRotate = elements[i].getAttribute('data-rotate');
			    var period = elements[i].getAttribute('data-period');
			    if (toRotate) {
			      new TxtRotate(elements[i], JSON.parse(toRotate), period);
			    }
			  }
			  // INJECT CSS
			  var css = document.createElement("style");
			  css.type = "text/css";
			  css.innerHTML = ".txt-rotate > .wrap { border-right: 1px solid white; }";
			  document.body.appendChild(css);
		};
		runTyper()

		 // $('#instagram').remove()
		 //Config for ajax call
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url":'https://api.instagram.com/v1/users/self/media/recent/?access_token=3532006718.963a374.9d59629ecc2641ef9361f16bd356ec65',
		  "method": "GET",
		  success:(response) => { 
		  	console.log('Success',response)
		  	const filter = response.data.map(x => x.images.low_resolution.url)
		  	const photos = filter
		  	photos.map((p,i) =>  $('#instagram').append(`<img class='ig-tile' key=${i} src=${p}>`))
		  },
		  error: (err) => {
		  	console.log('Error',err)
		  }
		}
		
		$(document).on('click','.ig-tile',function(){
			window.open('https://www.instagram.com/openpay_', '_blank')
		})

		$(document).on('click','.facebook',function(){
			window.open('https://m.facebook.com/openpayau', '_blank')
		})

		//Initialize AJAX call
		$.ajax(settings)





const getBrands = () => {
    const url = `https://58ova173oj.execute-api.ap-southeast-2.amazonaws.com/v1/Brands?Location=${3000}&PageNum=${1}&PageSize=${30}`
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
        renderCards(response)
      },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
}

getBrands()

renderCards = (brands) => {
    $('#retail-slide').empty()
    brands.map((l,i) => {
        $('#retail-slide ,#home-slide ,#automotive-slide,#health-slide').append(`
                <div data=${l.brandID} name=${l.brandName} class='retail card-tile'>
                    <div style='background-image:url(${l.brandImage ? l.brandImage : './assets/images/placeholder.png'})' class='background'>
                        <div class='icon-box'>
                            <div class='icons'>
                                ${l.url ? `<a class='website' data='web' href=${l.url}><div></div></a>` : ''}
                                <a class='loc' href='Locations.html'><div></div></a>
                            </div>
                        </div>
                    </div>
                    <div class='image-container'>
                        <div class='image'>
                        	${
                        		l.brandLogo ? 
                        			`<img src=${l.brandLogo}/>`
                        			:
                        				`<h4>${l.brandName}</h4>`
                        	}
                            
                        </div>
                    </div>
                </div>`)
    })
}


$(document).on('click','.card-tile',function(){
    var data = $(this).attr('data')
    var name = $(this).attr('name')
    const url = `https://58ova173oj.execute-api.ap-southeast-2.amazonaws.com/v1/Brands/${data}`
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
            var string = JSON.stringify(response)
            console.log(response)
            if(response.length > 0){
                localStorage.setItem('name', name)
                localStorage.setItem('locations', string)
            }
                window.location.href='Locations.html'
            },
      error: (err) => {
        console.log('Error',err)
      }
    }
    $.ajax(settings)
})




})