// donate history button
const btnHistory = document.getElementById('btn-history');
const btnDonation = document.getElementById('btn-donation');
    btnHistory.addEventListener('click', function(){
    
    btnHistory.classList.add("bg-lime-300");

    btnDonation.classList.remove("bg-lime-300");

    document.getElementById("donation").classList.add('hidden');
    document.getElementById("donate-history").classList.remove('hidden');
});


btnDonation.addEventListener('click', function(){
    btnDonation.classList.add("bg-lime-300" );
    btnHistory.classList.remove("bg-lime-300");
    document.getElementById("donation").classList.remove('hidden');
    document.getElementById("donate-history").classList.add('hidden');

});

