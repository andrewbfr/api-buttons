//pseudocoding


// need to populate zoo-population with ten giphy images recalled through an ajax call
  //zoo-population divs are created dynamically.
  //on.click of the submit button does this
    //------>queries giphy api with query params
      // url,
      // api key, 
      // user-input,
      // limit 10
    // create new divs to display each returned gif individually
    // make sure to call the response.name correctly from the giphy JSON




//variables
var apiKey = "9BlNYmwgDWvberRjgJV9QfSnyt8O6fja"
var userInput = $("#zoo-input").val();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";

//functions



//main processes

$(document).ready({

});


$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);

      console.log(response);
    });

