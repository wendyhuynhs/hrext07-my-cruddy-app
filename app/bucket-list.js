$(document).ready(function(){
	var theList = [];
 // $('#bucketList').hide();

  function bucketList() {

    var item = document.getElementById('userInputText').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.type = "checkbox";
    checkbox.className = 'item-list';
    var newItem = document.createElement("li");
    newItem.className = "delete"

    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    // newItem.appendChild(`<span class="delete"></span>`)
    document.getElementById("b-list").appendChild(newItem);
    
    theList.push(item); // This adds the item to theList
    localStorage.setItem("b-list", JSON.stringify(theList)); // Sets the localStorage object
    var storedBucketList = JSON.parse(localStorage.getItem("b-list")); // Gets the localStorage object


    checkbox.addEventListener('click', delTask);



  }

function delTask() {
    var item = $(this).parents("li");
    item.remove();
  }

  
    $(".add-btn").on('click', function(e){
    e.preventDefault();
    var input = $('#userInputText').val();
    bucketList(input);
  })




  // clear all 
  $('.delete-btn').on('click', function(e){
    localStorage.removeItem('b-list');
    $('.delete').remove();

  });


// document.getElementsByTagName("span").addEventListener("click",function(e) {
//     document.getElementByClassName("list-container").style.display="block";
//     e.preventDefault()
// });



});
