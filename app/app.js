/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(e){
    console.log(e);
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    $('.container-data').text(localStorage.getItem(keyData));
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.btn-delete').click(function(){
    localStorage.removeItem(keyData);
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
  });

});