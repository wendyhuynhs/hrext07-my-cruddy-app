/*
Init app
interact with DOM
interact with localstorage

 */

 //function - if user input text equals == country name: display country information
  // create an array to hold the country names ? ['Thailand', 'Germany', 'Austria', 'Greece']


$(document).ready(function(){

var $body = $(".container-main");

var thailandInfo = ` <h1 class='thaititle'> Thailand </h1>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWemW7CjN0zT9Ovmo31KIn7Y_b1SGyDh5-N5jag8I_FUqGKzsAjA" alt="hammockonabeach">
<h2> About </h2>
<p> With intricately built temples and a strong cultural heritage, Thailand is home to incredible street food, and picture-perfect white sandy beaches. </p>
<h2> Popular Cities to Visit </h2>
<p> Bangkok, Phuket, Pattaya, Chiang Mai </p>
<h2> Tipping </h2>
<p> Tipping Taxi Drivers: Round Up 
<br>
  Tipping waitstaff: 10 - 15 %
  </p> 
<h1> Best time to go </h1>
<p>
Best Weather: November through February
<br>
Rainy: May through October
<br>
Hot: March through May</p>
`

function filterCountry (input) {
  return input.toLowerCase();
}

function addThailand (element) {
  $("body").css('background-image', 'none');
  $('body').addClass('background-container');

  // $("body").css({ 'background-color': '#ffffff' });
  //    $("#myDiv").css('background-image', 'none');

  var $element = $(`<div></div>`);
  $element.append(thailandInfo)
  $element.addClass('active');

  $('.container-second').append($element);
}

function addGreece (element) {
  $("body").css('background-image', 'none');
  $('body').addClass('background-container');
  var $element = $(`<div></div>`);
  $element.append(`<h1> Greece </h1>`);
  $element.append(`<img src="https://moneyweek.com/wp-content/uploads/2018/08/910-Greece-634.jpg" alt="santorini">`);
  $element.addClass('active');
  $('.container-second').append($element);
}


function addAustria (element) {
  $("body").css('background-image', 'none');
  $('body').addClass('background-container');
  var $element = $(`<div></div>`);
  $element.append(`<h1> Austria </h1>`);
  $element.append(`<img src="http://t.wallpaperweb.org/wallpaper/known_places/1600x1200/Inn_River_Innsbruck_Austria.jpg" alt="innsbruck">`);
  $element.addClass('active');

  $('.container-second').append($element);
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





  // $('.btn-add').on('click', function(e){
  //   console.log(e);
  //   var keyData = $('.input-key').val();
  //   var valueData = $('.input-value').val();
  //   // write to db
  //   localStorage.setItem(keyData, valueData);
  //   // read from db
  //   var displayText = keyData + ' | ' + localStorage.getItem(keyData);
  //   // this only displays the last one? might want to switch to html
  //   // and append a div
  //   // <div class="display-data-item" data-keyValue="keyData">valueData</div>
  //   // if you use backticks ` you can use ${templateLiterals}
  //   // TODO make this vars make sense across the app
  //   $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
  //   $('.input-key').val('');
  //   $('.input-value').val('');
  // });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  // $('.container-data').on('click', '.display-data-item', function(e){
  //   console.log(e.currentTarget.dataset.keyvalue);
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });
  // // delete all?
  // $('.btn-clear').click(function(){
  //   localStorage.clear();
  //   $('.container-data').text('');
  // });

});