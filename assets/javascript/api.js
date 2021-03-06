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
//----TO DO
    // make some code to prevent duplicate buttons!!!!!
    // center gifs or float into a grid
    //maybe make one clicked into animation turn off all other animations


//---------- variables

var apiKey = "9BlNYmwgDWvberRjgJV9QfSnyt8O6fja"
var master = [];

//---------- functions


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


function alterMasterList(){
  //if input is blank
  if ($("#zoo-input").val() === ""){
    alert("type something fun!");
  } //otherwise do what I actually want this function to do
    else {
  master.push($("#zoo-input").val());
  }
};

//---------- MAIN PROCESSES
//main addition of buttons from the input
$("#add-things").click(function(){

  //this keeps the divs from disappearing, and the console from freaking out.
  event.preventDefault();

  alterMasterList();
  $(".for-hiding").removeAttr("hidden");
  createButtons();

  $("#zoo-input").val("");

});

//.on click for displaying gifs
$("#zoo-population").on("click","button.thing-button", function(){
    
    //trying to clear the div of previous gif images, too many will make super slow page

    $("#gif-population").empty();
    // show more instructions for users.
    $("#hide-em").removeAttr("hidden");

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
          
          var newGif = response.data;

          for (var i = 0; i < newGif.length; i++) {

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

            image.addClass("clickImg");
            $( "div.demo-container" ).text();
            // Appending the image
            newThingDiv.append(image);

            // Putting the gifs above the previous gifs
            $("#gif-population").prepend(newThingDiv);
        
        }
    });

});

// on.click of new gifs to allow animation toggling
$("#gif-population").on("click","img.clickImg", function(){
  
  console.log("you clicked a dynamically created image")

  var still = $(this).attr("data-still");

  var animated = $(this).attr("data-animate");

    if ($(this).attr("src") === still){
      $(this).attr("src", animated);

    } else if ($(this).attr("src") === animated) { 
      $(this).attr("src", still)

    }

});







