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


console.log("one");
//variables
var apiKey = "9BlNYmwgDWvberRjgJV9QfSnyt8O6fja"
// var userInput = $( "#zoo-input" ).val();
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";
var things = [];

//functions
// 

console.log("two");

function createDisplay(){

        $("#zoo-population").empty();

        // Looping through the array of movies
        for (var i = 0; i < things.length; i++) {

          // Then dynamicaly generating buttons for each thing in array
          var a = $("<button>");
          // Adding classes to our button
          a.addClass("thing-button btn btn-info text-center");
          // Adding a data-attribute
          a.attr("data-name", things[i]);
          // Providing the initial button text
          a.text(things[i]);
          // Adding the button to the buttons-view div
          $("#zoo-population").append(a);
        }
};

// function handleGifs(){

//         var thingItself = $(this).attr("data-name");
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thingItself + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";

//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).done(function(response) {
//           console.log(response);

//           // Creating a div to hold the gifs
//           var newThingDiv = $("<div class='newGif'>");

//           // Storing the rating data
//           var rating = response.rating;

//           // Creating an element to have the rating displayed
//           var pOne = $("<p>").text("Rating: " + rating);

//           // Displaying the rating
//           newThingDiv.append(pOne);

//           // Retrieving the URL for the image
//           var imgURL = response.images.fixed_height.url;

//           // Creating an element to hold the image
//           var image = $("<img>").attr("src", imgURL);

//           // Appending the image
//           newThing.append(image);

//           // Putting the entire movie above the previous movies
//           $("#zoo-population").prepend(newThingDiv);
//         });

//       };

function alterList(){
  if ($("#zoo-input").val() === ""){
    alert("type something fun");
  } else {
  things.push($("#zoo-input").val());
  }
};


//main processes

$("#add-things").click(function(){
  //this keeps the divs from disappearing, and the console from freaking out.
  event.preventDefault();

  alterList();

  console.log(things);

  // handleGifs();


  console.log("click-button-works");

  createDisplay();

  $("#zoo-input").val("");

});

//have this function outside of the on.click for now, will move into the click when able to push new items into the array.
// createDisplay();

console.log("function inside of your function");



