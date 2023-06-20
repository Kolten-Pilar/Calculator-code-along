 // added an alert to show viewers my message
 alert('Thank you for viewing! I followed along YouTuber SuperSimpleDev before any formal classes with PerScholas. The only thing I did myself was the CSS Styling')
     
 let calculation = localStorage.getItem('calculation') || '';

 // Display the calculation when the page first loads.
 displayCalculation();

 function updateCalculation(value) {
   calculation += value;

   // Display the calculation on the page
   // instead of console.log
   displayCalculation();

   localStorage.setItem('calculation', calculation);
 }

 function displayCalculation() {
   document.querySelector('.js-calculation').innerHTML = calculation;
 }
