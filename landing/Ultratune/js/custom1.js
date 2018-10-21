function validateQty(event) {
		var value = $('#price_val').val()
		if(value > 5000){
			if(event.keyCode !== 8){
				event.preventDefault()
			}
		}
		var key = window.event ? event.keyCode : event.which;
		//console.log(event.keyCode);
		if (event.keyCode == 8 || event.keyCode == 110
		 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 190 || event.keyCode == 46 ) {
		    return true;
		}
		else if ( (key < 48 || key > 57) && (key < 96 || key > 105) ) {
		    return false;
		}
		
		else return true;
		
 
}
function totalResult(numfirst, numsecond, numthird)
	{
		if(numthird === undefined)
		{
			result = numfirst + numsecond;
			results = result.toFixed(2);

		}else{
			result = numfirst + numsecond + numthird;
			results = result.toFixed(2);
		}
		return results;
	}
	function percentage(num, per)
	{
	  return (num/100)*per;
	}
	function calculatePlan(serviceprice, per)
	{
		
		 depositPercentage = percentage(serviceprice, 20).toFixed(2);
		 serviceRestval = (serviceprice - depositPercentage).toFixed(2);
		 if(per == 12){
		 	 weekEqualpayment = (serviceRestval/12).toFixed(2);
		 }else{
		 	 weekEqualpayment = (serviceRestval/6).toFixed(2);
		 }
		
		 return [depositPercentage, weekEqualpayment];
	}

$(document).ready(function(){


		function outbound() {
			  ga('send', 'event', {
			    eventCategory: 'Outbound Link',
			    eventAction: 'click',
			    eventLabel: 'Download from Ultra tune'
			  });
		}
		$('#enter-amount').on('focus',function(){
			ga('send', 'event', {
			    eventCategory: 'Ultra Tune Calculator',
			    eventAction: 'click',
			    eventLabel: 'Calculator being used'
			  });
		})

		$('.fa-android').on('click',function(){
			console.log('clicked')
			outbound()
		})

		$('.fa-apple').on('click',function(){
			console.log('clicked')
			outbound()
		})

		ga('send', 'pageview', 'Ultra Tune')



		$("#price_val").keyup(function () {

				var servicePrice = $(this).val();

				// if (servicePrice) {
				// 	if(servicePrice > 99 && servicePrice < 5001 )
				// 	{
				// 	 	console.log('yes');
					var weekPlanvals = calculatePlan(servicePrice,12);
					$('#week_dep').html(weekPlanvals[0]);
					$('#week_12_ep').html(weekPlanvals[1]);
					var weekEsfee = parseFloat($('#week_pef').text());
					var weekDepo = parseFloat($('#week_dep').text());
					var weekPmfee = parseFloat($('.week_pmf').val());
					var weeklyApproval = totalResult(weekEsfee, weekDepo, weekPmfee);
					$('#week_dep_total').html(weeklyApproval);
					var weekTweelveep = parseFloat($('#week_12_ep').text());
					var weekPertotal = totalResult(weekTweelveep, weekPmfee);
					$('#week_per_total').html(weekPertotal);
					var fortPlanvals = calculatePlan(servicePrice,6);
					
					$('#fort_dep').html(fortPlanvals[0]);
					$('#fort_6_ep').html(fortPlanvals[1]);
					var fortEsfee = parseFloat($('#fort_pef').text());
					var fortDepo = parseFloat($('#fort_dep').text());
					var fortPmfee = parseFloat($('.fort_pmf').val());
					var fortApproval = totalResult(fortEsfee, fortDepo, fortPmfee);
					$('#fort_dep_total').html(fortApproval);
					var fortsixep = parseFloat($('#fort_6_ep').text());
					var fortPertotal = totalResult(fortsixep, fortPmfee);
					$('#fort_per_total').html(fortPertotal);
				// } else {
				// 	console.log('no');
				// } }
		});

	});