  $(document).ready(function(){

    let payload = {}
    $(document).on('click',function(){
        console.log($('#merc-first').val())
    })

    $('.content').append(` 
      <div id='#step1' class="form-container">
          <h1>Merchant Details</h1>
          <div>
              <input id='merc-name' type="text" name="" placeholder="* Merchant name">
              <input id='merc-trader' type="text" name="" placeholder="Known trader names">
              <input id='merc-entity' type="text" name="" placeholder="Corporate entity name">
              <input id='merc-anb' type="text" name="" placeholder="ACN/ABN">
              <input id='merc-addy' type="text" name="" placeholder="Corporate entity address">
              <input id='merc-locations' type="number" name="" placeholder="* Number of store locations">
              <input id='merc-model' type="text" name="" placeholder="Store ownership model">
              <input id='merc-turnover' type="text" name="" placeholder="* Annual corporate turnover">
              <input id='merc-started' type="text" name="" placeholder="Date company started trading">
              <label>Do you have insurance?</label>
              <div class='checks'>
                  <input id='merc-liability' class='in cbx' type='checkbox'/>
              </div>
              <div class='checks'>
                  <input id='merc-indemnity' class='out cbx' type='checkbox'/>
              </div>
          </div>
           <div id='next' data=${1} class="next">Next</div>
      </div>`)



    const checkOne = () => {
      console.log('running')
        if($('#merc-name').val() === ''){
            $('#merc-name').addClass('error')
        }
        else if($('#merc-locations').val() === ''){
            $('#merc-locations').addClass('error')
        }
        else if($('#merc-turnover').val() === ''){
            $('#merc-turnover').addClass('error')
        }
        else if($('#merc-email').val() === ''){
          // console.log('merc error')
            $('#merc-email').addClass('error')
        }
        else{
            return true
        }
    }
   
    const checkEmail = () => {
      const email = $('#merc-email').val()
      console.log(email)
          var re = /^(([^<>()\[\]\\.,:\s@']+(\.[^<>()\[\]\\.,:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          console.log('RE',re.test(String(email).toLowerCase()))
          if(re.test(String(email).toLowerCase()) === true){
              console.log('PAYLOAD TO SEND',payload)
          }
          else{
              $('#merc-email').addClass('error')
          }
    }

    const goTo = (step) => {
      $('.content').empty()
      console.log(payload)
        if(step === 1){
          if(checkOne() === true){
               console.log('ONE')
                $('.content').append(` 
                <div id='#step1' class="form-container">
                    <h1>Merchant Details</h1>
                    <div>
                        <input id='merc-name' type="text" name="" placeholder="* Merchant name">
                        <input id='merc-trader' type="text" name="" placeholder="Known trader names">
                        <input id='merc-entity' type="text" name="" placeholder="Corporate entity name">
                        <input id='merc-anb' type="text" name="" placeholder="ACN/ABN">
                        <input id='merc-addy' type="text" name="" placeholder="Corporate entity address">
                        <input id='merc-locations' type="number" name="" placeholder="* Number of store locations">
                        <input id='merc-model' type="text" name="" placeholder="Store ownership model">
                        <input id='merc-turnover' type="text" name="" placeholder="* Annual corporate turnover">
                        <input id='merc-started' type="text" name="" placeholder="Date company started trading">
                        <div class='checks'>
                            <input id='merc-liability' class='in cbx' type='checkbox'/>
                          
                        </div>
                        <div class='checks'>
                            <input id='merc-indemnity' class='out cbx' type='checkbox'/>
                        </div>
                    </div>
                     <div data=${1} class="next">Next</div>
                </div>`)
          }
          else{
            console.log('NO')
          }
         
        }
        else if(step === 2){
          console.log('2')
            
            $('.content').append(`
              <div id='#step2' class="form-container">
                <h1>Product Details</h1>
                <div>
                    <input id='merc-products' type="text" name="" placeholder="Products sold by merchant">
                    <input id='merc-proposed' type="text" name="" placeholder="Products proposed to be financed by Openpay">
                    <input id='merc-excluded' type="text" name="" placeholder="Products excluded from Openpay financing">
                    <input id='merc-demo' type="text" name="" placeholder="Target demographic">
                    <label>Method of sale?</label>
                        <div class='checks'>
                            <input id='store' class='s1 cbx' type='checkbox'/>
                        </div>
                        <div class='checks'>
                            <input id='online'  class='s2 cbx' type='checkbox'/>
                        </div>
                        <div class='checks'>
                            <input id='phone'  class='s3 cbx' type='checkbox'/>
                        </div>
                    <input id='merc-dispatch' type="text" name="" placeholder="Estimated dispatch time">
                </div>
                <div class='btns'>
                  <div data=${0} class="next">Back</div>
                  <div data=${2} class="next">Next</div>
                </div>
            </div>`)
        }
        else{ 
          // console.log('3')
            $('.content').append(`
              <div id='#step3' class="form-container">
                <h1>Confirm Registration</h1>
                <div>
                    <input id='merc-first' type="text" name="" placeholder="First name">
                    <input id='merc-last' type="text" name="" placeholder="Last name">
                    <input id='merc-email' type="text" name="" placeholder="* Email">
                    <input id='merc-user-address' type="text" name="" placeholder="Address">
                    <div class='checks'>
                        <input class='agree' type='checkbox cbx'/>
                    </div>
                </div>
                <div class='btns'>
                  <div data=${2} class="back">Back</div>
                  <div data=${3} class="next">Submit</div>
                </div>
            </div>`)
        }
    }

    // $('.cbx').change(function(){
    //   cb = $(this)
    //   cb.val(cb.prop('checked'))
    // }
    $('.cbx').on('change',function(){
        var cb = $(this)
        cb.val(cb.prop('checked'))
    })
    


    $(document).on('click','.next',function(){
        var step = $(this).attr('data')
        // console.log($('merc-products').val())
        if(step === '1'){
              payload.merchant_name = $('#merc-name').val();
              payload.merchant_trader_name = $('#merc-trader').val();
              payload.merchant_entity_name = $('#merc-entity').val();
              payload.merchant_ABN = $('#merc-anb').val();
              payload.merchant_address = $('#merc-addy').val();
              payload.merchant_locations = $('#merc-locations').val();
              payload.merchant_ownership_model = $('#merc-model').val();
              payload.merchant_turnover = $('#merc-turnover').val();
              payload.merchant_start_date = $('#merc-started').val();
              payload.merchant_liability = $('#merc-liability').val();
              payload.merchant_indemnity = $('#merc-indemnity').val();

              if(checkOne() === true){
                  goTo(parseInt(step) + 1)
              }
              else{
                  console.log('NO')
              }
        }
        if(step === '2'){
              payload.products = $('#merc-products').val()
              payload.proposed = $('#merc-proposed').val()
              payload.excluded = $('#merc-excluded').val()
              payload.demographic = $('#merc-demo').val()
              payload.pay_by_store = $('#store').val()
              payload.pay_by_online = $('#online').val()
              payload.pay_by_phone = $('#phone').val()
              // if(checkOne() === true){
                  goTo(parseInt(step) + 1)
              // }
        }

        if(step === '3'){
             payload.first_name = $('#merc-first').val()
             payload.last_name = $('#merc-last').val()
             payload.merc_email = $('#merc-email').val()
             payload.user_address = $('#merc-user-address').val()
            checkEmail($('#merc-email').val())
        }
        
        
    })
    $(document).on('click','.back',function(){
        var step = $(this).attr('data')
        console.log(step)
        goTo(parseInt(step))
    })




 
})