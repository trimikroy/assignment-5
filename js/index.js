
/// noakhali donate 

document.getElementById('btn-donate')
.addEventListener('click', function(){

    const addDonate = parseFloat(document.getElementById('add-donate').value);
    const mainBalance = parseFloat( document.getElementById('main-balance').innerText);
    const donateAmount = parseFloat(document.getElementById('donate-amount').innerText);
     //console.log(addDonate , mainBalance , donateAmount);
   

    if ( Number(addDonate) && addDonate > 0  ){

        const remainingMainBalance = mainBalance - addDonate;
        const newDonateAmount = donateAmount + addDonate ;
        

       // update with dom 

        document.getElementById('main-balance').innerText = remainingMainBalance;
        document.getElementById('donate-amount').innerText =  newDonateAmount;
        


         //history card 

         const historyItem = document.createElement('div');
         const currentDate = new Date();
         const formattedDate = currentDate.toString();
        historyItem.className = "bg-white w-full p-4 rounded-md border-2 border-gray-400";

         historyItem.innerHTML =`
         
        
              <p class = "text-lg font-bold  "> ${addDonate}  Taka is Donated for famine-2024 at Noakhali Bangladesh</p>

            <h3 class = " text-md text-gray-500">${formattedDate} </h3>
                 
         `;

         const historyContainer = document.getElementById("donate-history");
         historyContainer.insertBefore(historyItem, historyContainer.firstChild );
    }
    else{
        alert('Invalid Number !');
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

         //history card 

         const historyItem = document.createElement('div');
         const currentDate = new Date();
         const formattedDate = currentDate.toString();
        historyItem.className = "bg-white w-full p-4 rounded-md border-2 border-gray-400";

         historyItem.innerHTML =`
         
        
              <p class = "text-lg font-bold  "> ${addDonate}  Taka is Donated for famine-2024 at Feni Bangladesh</p>

            <h3 class = " text-md text-gray-500">${formattedDate} </h3>
                 
         `;

         const historyContainer = document.getElementById("donate-history");
         historyContainer.insertBefore(historyItem, historyContainer.firstChild )
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

    // console.log(addDonate , mainBalance , donateAmount);
    
    if ( Number(addDonate) && addDonate > 0){

       const remainingMainBalance = mainBalance - addDonate;
        const newDonateAmount = donateAmount + addDonate ;
      
           // console.log(remainingMainBalance);

       // update with dom 

        document.getElementById('main-balance').innerText = remainingMainBalance;
        document.getElementById('donate-amount-injured').innerText =  newDonateAmount;

         //history card 

         const historyItem = document.createElement('div');
         const currentDate = new Date();
         const formattedDate = currentDate.toString();
        historyItem.className = "bg-white w-full p-4 rounded-md border-2 border-gray-400";

         historyItem.innerHTML =`
         
        
              <p class = "text-lg font-bold  "> ${addDonate}  Taka is Donated for famine-2024 at injured Bangladesh</p>

            <h3 class = " text-md text-gray-500">${formattedDate} </h3>
                 
         `;

         const historyContainer = document.getElementById("donate-history");
         historyContainer.insertBefore(historyItem, historyContainer.firstChild )
    }
    else{
        alert('Invalid Number !');
    }




});



