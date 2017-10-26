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


console.log("one");
//variables
var apiKey = "9BlNYmwgDWvberRjgJV9QfSnyt8O6fja"
var userInput = $("#zoo-input").val().trim();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=9BlNYmwgDWvberRjgJV9QfSnyt8O6fja&limit=10";

//functions
console.log(userInput);

console.log("two");
function createDisplay(){

};

function handleGifs(){
    $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);

        });
};

//main processes
$("#add-toast").click(function(){
  handleGifs();
  console.log(userInput);
  console.log("click-button-works");
});

console.log("function inside of your function");



