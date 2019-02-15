/*
Init app
interact with DOM
interact with localstorage

 */

 //function - if user input text equals == country name: display country information
  // create an array to hold the country names ? ['Thailand', 'Germany', 'Austria', 'Greece']


$(document).ready(function(){

var $body = $(".container-main");


var greeceInfo = `
<div class="info-border">
<h1> About </h1>
<p> With over 1,200 islands, this country is located in Southern Europe, bordering the Ionian and Mediterranean Sea. Greece is known for its beaches from the black sands of Santorinia to the party resorts of Mykonos</p>

<h1> Currency </h1>
<p>  Euro </p>

<h1> Popular Cities to Visit </h1>
<p> Santorini <br> Mykonos <br> Paros <br> Athens </p>


<h1> Tipping </h1>
<p> Tipping Taxi Drivers: Round Up 

<br>
  Tipping waitstaff: 5 - 10 %
  <br>
  Bartenders: Round Up
  </p> 
<h1 class="weather-title" style="center"> Best time to go </h1>
<p class="about-weather" style="center"> 
<strong> When to Go </strong> <br> April-June and September
<br>
<strong> Hot and Crowded </strong> <br> July and August
</p> 
</span>

<h1 class="visa-title" style="center"> Visa Required? </h1>
<p class="about-visa" style="center"> For US Citizens that are traveling for business or as a tourist can enter Greece for up to 90 days. </p>
</div>
`;
var thailandInfo = `
<div >

<h1 class="about-title"> About </h1>
<p class="about-info"> With intricately built temples and a strong cultural heritage, Thailand is home to incredible street food, and picture-perfect white sandy beaches. </p>

<h1 class="money-title"> Currency </h1>
<p class="about-thai-baht"> <strong> Thai Baht </strong> </p>

<h1 class="popular-cities"> Popular Cities to Visit </h1>
<p class="about-cities"> Bangkok <br> Phuket <br> Pattaya <br> Chiang Mai </p>


<h1 class="tip"> Tipping </h1>
<p class="about-tipping"> Tipping Taxi Drivers: Round Up 

<br>
  Tipping waitstaff: 10 - 15 %
  </p> 
<h1 class="weather-title" style="center"> Best time to go </h1>
<p class="about-weather" style="center"> Thailand's climate is typically humid and very warm. <br>
<strong> Best Weather: </strong> <br> November through February
<br>
<strong>Rainy: </strong> <br> May through October
<br>
<strong> Hot:</strong> <br> March through May</p> 
</span>

<h1 class="visa-title" style="center"> Visa Required? </h1>
<p class="about-visa" style="center"> For US Citizens that plan on staying in Thailand for less than 30 days will not be needing a visa to enter </p>
</div>
`

function filterCountry (input) { //turns input to lowercase 
  return input.toLowerCase();
}

function addThailand (element) {
  // $("body").css('background', 'url(https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)');
    $("body").css('background', '#6c8998');
  // $('body').addClass('background-container');

  var $element = $(`<div class='all-thai'></div>`);
  $element.append(thailandInfo)
  $element.addClass('active');
  // $('.container-second').append('')
  $('.gallery').addClass('active');
  $('.container-second').append(`<h1 class='thaititle'> Thailand </h1>`)
  // $('.container-second').append(`<img src="http://flags.fmcdn.net/data/flags/w580/th.png" alt="thaiflag" class="thaiflag">`);
  $('.container-second').append($element);
  $('.container-second').append(`<h2 class="gallery-title"> Gallery </h2>`);


}

function addGreece (element) {
  $("body").css('background', '#7b95a2');
  var $element = $(`<div 'all-greece'></div>`);
  $element.append(`<h1 class="greecetitle"> Greece </h1>`);
  $element.append(greeceInfo)
  $('.gallery-two').addClass('active2');

  $('.container-second').append($element);
  $('.container-second').append(`<h2 class="gallery-title"> Gallery </h2>`);
}



$('.btn-click').on('click', function(e){
  e.preventDefault();
  var userInput = $('#userInput').val(); //the text the user puts in
  $body.hide();

  
  if (filterCountry(userInput) === 'thailand') {
    addThailand(this, e)
  }
  if (filterCountry(userInput) === 'greece') {
    addGreece(this, e);
  }
   if (filterCountry(userInput) === 'austria') {
    addAustria(this, e);
  }



})


  
});