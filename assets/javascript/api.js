//pseudocoding


// need to populate zoo-population with ten giphy images recalled through an ajax call
  //zoo-population divs are created dynamically.
  //on.click of the submit button does this
    //------>queries giphy api with query params
      // url,
      // api key, 
      // user-input,
      // limit 10
    // function to create new divs to display each returned gif individually and display the rating
    // function to call the giphy api on a click
    // make sure to call the response.name correctly from the giphy JSON
    // ajax

    // make some code to prevent duplicate buttons!!!!!


//checking
console.log("one");

//variables

var apiKey = "9BlNYmwgDWvberRjgJV9QfSnyt8O6fja"
var userInput = $( "#zoo-input" ).val();
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";
var master = [];

//functions

console.log("two");

function createButtons(){

        //this should prevent recreating items in the list...
        $("#zoo-population").empty();

        // Looping through the array of buttons and doing classes, etc. all at once.
        for (var i = 0; i < master.length; i++) {

          // Then dynamicaly generating buttons for each thing in array
          var a = $("<button>");
          // Adding classes to our button
          a.addClass("thing-button btn btn-info text-center");
          // Adding a data-attribute
          a.attr("data-name", master[i]);
          // Providing the initial button text
          a.text(master[i]);
          // Adding the button to the buttons-view div
          $("#zoo-population").append(a);
        }
};


// look at this!!!
// $(this).attr("data-name")
// so useful!!!


function alterMasterList(){
  //if input is blank
  if ($("#zoo-input").val() === ""){
    alert("type something fun!");
  } //otherwise do what I actually want this function to do
    else {
  master.push($("#zoo-input").val());
  }
};



//main processes



//main addition of buttons from the input
$("#add-things").click(function(){

  //this keeps the divs from disappearing, and the console from freaking out.
  event.preventDefault();

  alterMasterList();

  createButtons();

  $("#zoo-input").val("");

});




//.on click for displaying gifs
$("#zoo-population").on("click","button.thing-button", function(){
    
    //trying to clear the div of previous gif images, too many will make super slow page

    $("#gif-population").empty();

    //NICE

    //this is important to know, you need to make sure that when your gif/new.div image display function is called, it can reference the correct value with "this" and use it in its response.data, etc.
      console.log($(this).attr("data-name"));

      console.log("inside handler");

        var newButton = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newButton + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";

        console.log($(this).attr("data-name"));

        // calling AJAX and displaying the 10 gifs per button click. the .on() means it will access newly created elements, while a .click(function()) does not bind itself to dynamically created elements.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          
          console.log(response);
          console.log(newButton);

          var newGif = response.data;

          for (var i = 0; i < newGif.length; i++) {

           
            console.log(newGif[i]);
 //this newGif class is what you will listen for when calling the still and animated versions of the gif files
            var newThingDiv = $("<div class='newGif'>");

             // Storing the rating data
            var rating = newGif[i].rating;

            // Creating an element to have the rating displayed
            var pOne = $("<p>").text("Rating: " + rating);

            // Displaying the rating
            newThingDiv.append(pOne);

            // Retrieving the URL for the image
            var stillURL = newGif[i].images.fixed_height_still.url;
            var animatedURL = newGif[i].images.fixed_height.url;

            // Creating an element to hold the image
            var image = $("<img>").attr("src", stillURL).attr("data-still", stillURL).attr("data-animate", animatedURL);

            // to find the images later and be able to select their still and animated versions. this might be where to pick up on Saturday, make sure this is really a good way to reference the individual images, you may need to do it all here instead of another on.click function call. how can you add the super nice data-name attribute to the newly created images with their search title as the value?

            image.addClass(newButton + " clickImg");
            $( "div.demo-container" ).text();
            // Appending the image
            newThingDiv.append(image);

            // Putting the gifs above the previous gifs
            $("#gif-population").prepend(newThingDiv);
        
        }
    });

});

 // $(".gif").on("click", function() {
 //      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
 //      var state = $(this).attr("data-state");
 //      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
 //      // Then, set the image's data-state to animate
 //      // Else set src to the data-still value
 //      if (state === "still") {
 //        $(this).attr("src", $(this).attr("data-animate"));
 //        $(this).attr("data-state", "animate");
 //      } else {
 //        $(this).attr("src", $(this).attr("data-still"));
 //        $(this).attr("data-state", "still");
 //      }
 //    });


//function for changing the source of the image from the fixed_height_still to the fixed_height_url
  // add an attr with the value of the still in the for-loop
  // add if, else in an onlclick that changes the img src if the image is one or the other.
  // so you will be redefining the img src with the animated version.
//on.click for "pausing"

$("#gif-population").on("click","img.clickImg", function(){
  console.log("you clicked a dynamically created image")

  var still = $(this).attr("src");
  console.log(still);

  var animated = $(this).attr("data-animate");
  console.log(animated);

    if ($(this).attr("src") === still){
      $(this).attr("src", animated);

    } else if ($(this).attr("src") === animated) { 
      $(this).attr("src", ($(this).attr("data-still")))

    }

});







