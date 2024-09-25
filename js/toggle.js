//show the donate history
document.getElementById('btn-history')
.addEventListener('click', function(){
  
    
            // show donation history button clicked
            document.getElementById('donate-history').classList.remove('hidden');

            // hidden donate button show
            document.getElementById('donation').classList.add('hidden');
});
// show the donate 

document.getElementById('btn-donation')
.addEventListener('click', function(){
   
    document.getElementById('donation').classList.remove('hidden');

    document.getElementById('donate-history').classList.add('hidden');
});