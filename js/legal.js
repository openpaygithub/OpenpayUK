$(document).ready(function(){
// `<div class='text-block'>
// 			<h2>Why should I use Openpay?</h2>
// 			<p>To sign up with Openpay you must:</p>
// 	    	<ul>
// 	    		 <li>1. Be 18 years or older</li>
// 	    		 <li>2. Provide a valid Australian ID (or New Zealand ID if a resident there)</li>
// 	    		 <li>3. Provide a valid email address and two contact phone numbers</li>
// 	    		 <li>4. Provide a valid Visa or MasterCard, both credit or debit cards are acceptable.</li>
// 	    	</ul>
// 		</div>`

	const general = 
	`<div class='help-text-container'>
		<div class='text-block'>
			<h2>What is Openpay?</h2>
			<p>Openpay is a buy now pay later option that gives you back control. We’re not a credit card and we’re not here to get you into debt. We’re like a layby that lets you take home what you need today, and pay over time to help manage your cashflow and live your best life.</p>
		</div>
		
		<div class='text-block'>
			<h2>Why should I use Openpay?</h2>
			<p>Longer terms, flexible payment schedules and a sets us apart from the rest. Terms vary based on retailer, which means we don’t put unrealistic expectations on you to make your payments, and you can dictate when you start paying and how often you do so. Don’t fit yourself into a cookie cutter budgeting program, build your very own gingerbread house that fits in with your schedule. </p>
		</div>
		<div class='text-block'>
			<h2>Can I use Openpay anywhere?</h2>
			<p>Not yet! Openpay is available at 4000 locations across a variety of industries in Australia, including retail, home improvement, automotive and health. Whether it be pet supplies, a car service, a dental fix, a home DIY job – there’s probably a merchant to suit what you need. And if not, be sure to mention it next time you’re instore paying for something that you’d rather use Openpay to pay off in your own time.</p>
		</div>
		<div class='text-block'>
			<h2>How do I use Openpay?</h2>
			<p>Search for a participating merchant here. </p>
			<p>Online, simply select Openpay at checkout – you’ll be redirected to Openpay to set up your account and personalise your payment plan. You can then download the Openpay app to manage your payments, update payment information, and see other merchants that offer Openpay.</p>
			<p>Instore, ask to use Openpay and you’ll be guided through setup. To make things quicker instore, you can download the Openpay app and setup your account at any time.</p>
		</div>
		<div class='text-block'>
			<h2>Is Openpay a credit card?</h2>
			<p>Openpay is not a credit card! We’re like a layby that lets you take home today and pay off in manageable installments. This means you don’t need to have another credit card to apply. The only thing you’ll need is a Visa or Mastercard for your payments, as we do not offer direct debit. </p>
		</div>
		<div class='text-block'>
			<h2>Are there any fees or interest?</h2>
			<p>There will be late fees if your payment isn’t made by the scheduled date, and there may be a small plan management fee applicable per instalment. Whether this plan management fee applies will depend  on the place you’re shopping at and how long your plan is. Just ask, and all costs will be disclosed to you before you commit to your purchase.  </p>
		</div>
		<div class='text-block'>
			<h2>Is my personal information secure with Openpay?</h2>
			<p>Absolutely. All sensitive information is encrypted, and we maintain stringent precautionary measures to protect your information, as Openpay is a Level 1 PCI DSS Compliant Provider. Our privacy policy can be viewed here. </p>
		</div>
		<div class='text-block'>
			<h2>How long are repayment lengths?</h2>
			<p>Much like gingerbread houses, each of our merchants are unique – so each have their own maximum term lengths. The easiest way to find out is to call the merchant directly or to visit them instore. </p>
		</div>
	</div>
	`


	const payments = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>What do I need to use Openpay?</h2>
			<p>Our signup process asks for a few things to qualify your application. You’ll need to be at least 18 years old and be an Australian or New Zealand resident with valid government issued photo ID. We’ll also ask for your email and home address, the Visa or Mastercard you want payments to be taken from, and a phone number. </p>
		</div>
		<div class='text-block'>
			<h2>Do I need to pay anything upfront?</h2>
			<p>Yes, you will need to pay an initial payment which is usually around 20% of your total purchase price. You can ask the merchant before purchasing to check exactly what the upfront payment will be.</p>
		</div>
		<div class='text-block'>
			<h2>When do I need a credit check?</h2>
			<p>Retailers require a credit check for certain amounts to ensure that we encourage responsible spending. The limit that prompts a credit check varies from retailer to retailer, and you will always be asked to confirm your consent before a credit check is performed. Generally, purchases over $1000 will require a credit check, though some retailers require a credit check for any purchase.</p>
		</div>
		<div class='text-block'>
			<h2>How can I do a credit check or pre-approval?</h2>
			<p>If checking out with the Openpay app, you will be prompted to confirm your credit check during the pre-approval process. If your sales staff member is performing checkout manually, they will ask for your consent to credit check during your application process.</p>
		</div>
		<div class='text-block'>
			<h2>What is my available limit?</h2>
			<p>Your available limit is the amount you can spend today at a particular retailer. It is a unique combination of your personal credit history and statistical underwriting, which helps us ensure that we only lend amounts  that our customers are capable of repaying. Sometimes, in order to calculate this limit, a credit check will be required.</p>
		</div>
	</div>`




	const fees = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>How do I make a payment?</h2>
			<p>During checkout, you get to choose which date your payments will come out. When that day comes we will directly debit the money from your account. Want to get in early and make a payment before the due date? Go you good thing! You can do that in the app too. </p>
		</div>
		<div class='text-block'>
			<h2>How often can I make payments?</h2>
			<p>You can make manual payments as often as you like, but scheduled payments (aka what you choose when you’re setting up your plan) need to be weekly or fortnightly.</p>
		</div>
		<div class='text-block'>
			<h2>How do I update my card details?</h2>
			<p>You guessed it – in the app! If you’d prefer speaking with a human, we have some nice ones you can telephone here at Openpay on 1300 168 359 during business hours (Monday to Friday, 9am-5pm AEST). If your card is lost or stolen, please update your details or get in touch to arrange a payment date that works. NOTE: Please never email us your card details or leave them on our messaging service. But do leave us a message with your name and contact details and a customer service member will get back to you.</p>
		</div>
		<div class='text-block'>
			<h2>Can I pay out my plan in advance?</h2>
			<p>Sure can! Look at you, kicking goals! Get in touch with our customer service team to pay off your entire plan by calling us on 1300 168 359 or emailing us at info@openpay.com.au. You won’t be charged extra fees for paying early either! </p>
		</div>
		<div class='text-block'>
			<h2>What will my bank statement show?</h2>
			<p>No matter where you shop, there’ll be a reference to Openpay on your bank statement. </p>
		</div>
		<div class='text-block'>
			<h2>I chose “X” day for my payments, but they show up on my bank account on different days?</h2>
			<p>Okay so we take payment on the date you choose, but sometimes some banks can take 3-5 business days to process your funds. Your statement will reflect the date the funds clear, and in the interim your transaction could be shown as ‘pending’. If you’re unsure if your payment has cleared, you can always call your bank to confirm. </p>
		</div>
		<div class='text-block'>
			<h2>Oh no! I’ve spent all my money and/or need more time to pay! What do I do?!</h2>
			<p>Like we said, we want to ensure that you’re able to make your repayments and helping rather than hindering when it comes to your budgeting is an important part of that Give us a call on 1300 168 359 or email us at info@openpay.com.au and we’ll see what we can do to assist. Don’t ignore the issue – you could get charged by your bank if a payment is attempted and declined, and if a payment is missed, a late fee will apply.</p>
		</div>
		<div class='text-block'>
			<h2>Uh-oh, I missed a payment or have another payment-related matter!</h2>
			<p>Hey, it’s okay, we’re all human here. Except our office dog, Bollo. But even he makes mistakes sometimes! If you have any payment related matters you need to discuss, our customer service humans are here to assist, Monday to Friday, 9am till 5pm AEST. Call us on 1300 168 359 or email us at info@openpay.com.au for any late payment or other payment-related matters.</p>
		</div>
	</div>`
	
	const cancel = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>What happens if I don’t make my payments?</h2>
			<p>Okay, let’s put this simply: Payments that are one day late will attract a $9.50 fee. Payments that are more than 8 days late will attract an additional $19.50 fee. If we attempt to take another payment and it also can’t be debited, this process will continue. We will send you emails, attempt to call you, and if we can’t get through to you we will leave a message. If we do not hear from you, we will eventually attempt to take the entire outstanding plan amount from your card. If the remainder of your payments cannot be debited, the full amount will be referred to a debt collection agency and this could impact your credit rating. There is an escalation fee of $19.50 that will be charged in this instance. We really don’t like doing this and would much prefer if you gave us a call before these things happen so that we can try to assist. </p>
		</div>
		<div class='text-block'>
			<h2>Are there fees?</h2>
			<p>For some merchants we charge fees based on the purchase amount and/or plan duration. These are called Plan Management Fee’s and differ from merchant to merchant. These  will be disclosed before your plan is finalised so please familiarize yourself with these so you know exactly what you’ll need to pay. Most of the time, if there are fees, these are a few dollars per transaction a late fee (also known as a default fee) of $9.50 is automatically charged if a scheduled payment is 1 day late. If that payment is more than 8 days late, a further late fee of $19.50 will be charged. To help you avoid late fees, we will send you out an upcoming payment reminder email. If you haven’t received this email, please check that your contact details are up to date. Also check your junk mail! Sometimes email servers mix up what’s important and what’s spam. If something is really wrong and for any reason you know you won’t be able to make a payment on time, just get in touch before the scheduled payment date to talk it through and reschedule, because once the date has passed, you will get charged a fee.</p>
		</div>
	</div>`
	const promo = `
	<div class='help-text-container'>
		<div class='text-block'>
			<h2>Can I cancel my plan?</h2>
			<p>A plan is cancelled if you refund your purchase. Refunds are completely at the discretion of the retailer, so we go by whatever their returns policy is and will refund you accordingly, therefore cancelling your plan.</p>
		</div>
		<div class='text-block'>
			<h2>Can I close my Openpay account?</h2>
			<p>Sure, it’ll make us very sad and Emma our customer service manager sheds a tear every time it happens but you can close your account at any time. If you have no pending/active plans, just contact us via phone or email. It costs nothing to keep your account active; we’re here for when you need us.</p>
		</div>
		<div class='text-block'>
			<h2>What if I want to return my purchase?</h2>
			<p>Full returns and partial refunds are available with Openpay, but it depends on the retailer. Please return your goods to the merchant you purchased them from, and they will organise a refund for you back onto your nominated card. All future instalments will be cancelled, or adjusted in the case of a partial refund. All returns are subject to the merchant’s return policy.</p>
		</div>
		<div class='text-block'>
			<h2>My refund has been processed, but the funds aren’t in my account yet?</h2>
			<p>Openpay processes your refund immediately. As with all retailers, sometimes banks can take a few days to clear the funds back into your account. </p>
		</div>
	</div>`

	const options = [general,payments,fees,cancel,promo]

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

	$(document).on('click','.c-block',function(){
		console.log('adas')
		var country = $(this).attr('data')
		$('.t-country').html(country)
	})

	// $('#submit').on('click',function(){
	// 	var activeTab = $('.activeContact').attr('data')
	// 	console.log(activeTab)
	// 	var url = contactOptions[activeTab]
	// 	console.log(url)
	// 	// make ajax call for appropriate route
	// })

})