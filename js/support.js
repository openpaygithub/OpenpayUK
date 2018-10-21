$(document).ready(function(){
	const general = 
	`<div class='help-text-container'>
		<div class='text-block'>
			<h2>How do I sign up for Openpay?</h2>
			<p>Openpay is offered online at checkout, or you can visit one of our participating merchants in-store. Simple tell a staff member you want to use Openpay and you'll be guided through the process. You can also sign up anytime using our App.</p>
		</div>
		<div class='text-block'>
			<h2>What is required to use Openpay?</h2>
			<p>To sign up with Openpay you must:</p>
	    	<ul>
	    		 <li>1. Be 18 years or older</li>
	    		 <li>2. Provide a valid Australian ID (or New Zealand ID if a resident there)</li>
	    		 <li>3. Provide a valid email address and two contact phone numbers</li>
	    		 <li>4. Provide a valid Visa or MasterCard, both credit or debit cards are acceptable.</li>
	    	</ul>
		</div>
		<div class='text-block'>
			<h2>Is Openpay a credit card?</h2>
			<p>No. Openpay make buy now, pay later, payment plans available. You do not need to hold and manage another credit or store card. You do however need an existing Visa or Mastercard to use Openpay.</p>
		</div>
		<div class='text-block'>
			<h2>Another Question?</h2>
			<p>For any addition queries, fill in the relevant contact form and we will get in touch.</p>
		</div>
	</div>
	`
	const where = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>Where data</h2>
			<p>Openpay is offered online at checkout, or you can visit one of our participating merchants in-store. Simple tell a staff member you want to use Openpay and you'll be guided through the process. You can also sign up anytime using our App.</p>
		</div>
	</div>`
	const app = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>App data</h2>
			<p>Openpay is offered online at checkout, or you can visit one of our participating merchants in-store. Simple tell a staff member you want to use Openpay and you'll be guided through the process. You can also sign up anytime using our App.</p>
		</div>
	</div>`
	const online = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>Online data</h2>
			<p>Openpay is offered online at checkout, or you can visit one of our participating merchants in-store. Simple tell a staff member you want to use Openpay and you'll be guided through the process. You can also sign up anytime using our App.</p>
		</div>
	</div>`
	const contact = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>Contact data</h2>
			<p>Openpay is offered online at checkout, or you can visit one of our participating merchants in-store. Simple tell a staff member you want to use Openpay and you'll be guided through the process. You can also sign up anytime using our App.</p>
		</div>
	</div>`

	const options = [general,where,app,online,contact]

	const generalContact = 'www.google.com'
	const customerContact = 'www.google.com'
	const merchantContact = 'www.google.com'

	const contactOptions= [generalContact,customerContact,merchantContact]

	const getActiveTab = () => {
		var active = $('.active-help').attr('data')
		var content = options[active]
		$('#help-text').empty()
		$('#help-text').append(content)
	}
	getActiveTab()

	$('.optionDiv').on('click',function(){
		$('.optionDiv').removeClass('active-help')
		$(this).addClass('active-help')
		getActiveTab()
	})

	$('.contact').on('click',function(){
		$('.contact').removeClass('activeContact')
		$(this).addClass('activeContact')
	})

	$('#submit').on('click',function(){
		var activeTab = $('.activeContact').attr('data')
		console.log(activeTab)
		var url = contactOptions[activeTab]
		console.log(url)
		// make ajax call for appropriate route
	})

})