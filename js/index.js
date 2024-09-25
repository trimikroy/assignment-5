
/// noakhali donate 

document.getElementById('btn-donate')
.addEventListener('click', function(){

    const addDonate = parseFloat(document.getElementById('add-donate').value);
    const mainBalance = parseFloat( document.getElementById('main-balance').innerText);
    const donateAmount = parseFloat(document.getElementById('donate-amount').innerText);
     console.log(addDonate , mainBalance , donateAmount);

    if ( Number(addDonate) && addDonate > 0  ){

       const remainingMainBalance = mainBalance - addDonate;
        const newDonateAmount = donateAmount + addDonate ;
      
           // console.log(remainingMainBalance);

       // update with dom 

        document.getElementById('main-balance').innerText = remainingMainBalance;
        document.getElementById('donate-amount').innerText =  newDonateAmount;
    }
    else{
        alert('Invalid Number !')
    }

});


// feni donate

document.getElementById('btn-donate-feni')
.addEventListener('click', function(){

    const addDonate = parseFloat(document.getElementById('add-donate-feni').value);
    const mainBalance = parseFloat( document.getElementById('main-balance').innerText);
    const donateAmount = parseFloat(document.getElementById('donate-amount-feni').innerText);
     console.log(addDonate , mainBalance , donateAmount);

    if ( Number(addDonate) && addDonate > 0  ){

       const remainingMainBalance = mainBalance - addDonate;
        const newDonateAmount = donateAmount + addDonate ;
      
           // console.log(remainingMainBalance);

       // update with dom 

        document.getElementById('main-balance').innerText = remainingMainBalance;
        document.getElementById('donate-amount-feni').innerText =  newDonateAmount;
    }
    else{
        alert('Invalid Number !')
    }

});


// donate injured

document.getElementById('btn-donate-injured')
.addEventListener('click', function(){

    const addDonate = parseFloat(document.getElementById('add-donate-injured').value);
    const mainBalance = parseFloat( document.getElementById('main-balance').innerText);
    const donateAmount = parseFloat(document.getElementById('donate-amount-injured').innerText);
     console.log(addDonate , mainBalance , donateAmount);

    if ( Number(addDonate) && addDonate > 0  ){

       const remainingMainBalance = mainBalance - addDonate;
        const newDonateAmount = donateAmount + addDonate ;
      
           // console.log(remainingMainBalance);

       // update with dom 

        document.getElementById('main-balance').innerText = remainingMainBalance;
        document.getElementById('donate-amount-injured').innerText =  newDonateAmount;
    }
    else{
        alert('Invalid Number !')
    }

});