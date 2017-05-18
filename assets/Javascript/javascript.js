//Pseudo Code
	// create an array of strings related to actors
	// take actor and append button for each string in the array
	// 	try using a loop that appends a button for each string in the array
	// when user grabs clicks button, page grabs 10 static, non animated gif images from Giphy API and places them on page
	// When user clicks giphy images, gif should animate. click again and goes static
	// all gifs have a rating
	// 	provided by Giphy API
	// start with getting images displayed with buttons then move on
	// Add a from to your page that takes the value from a user input box and adds it into your topics array
	// Then make a function call that takes each topic in the array remakes the buttons on the page.
	

var actors = ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"];

//function for displaying actor Gifs
function showGifs() {
	$("#actorTabs").empty();

//loop through array of actors
for (var i = 0; i < actors.length; i++) {

//Create buttons for each actor in array 
var b = $("<button>");
b.addClass("actor");
b.attr("data-actor", actors[i]);
b.text(actors[i]);
$("#actorTabs").append(b);
	}
}

//Event Click handler
$("#addActor").on("click", function(event) {
event.preventDefault();
var actorName = $("#search-input").val().trim();
actors.push(actorName);

// Call function 
showGifs();
      });
//Call to show initial array of actors
showGifs();

//This is the on click function for actor button(s)
function giphyAjaxCall() { 
	$("button").on("click", function() {
//setting variable actor equal to the value of "this" button
      var actor = $(this).attr("data-actor");
//set variable URl up so that actor is interchangable
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        actor + "&api_key=dc6zaTOxFJmzC&limit=10";
//ajax call using get method to retrieve JSON object from API
      $.ajax({
          url: queryURL,
          method: "GET"
        })
//Promise that indicates AJAX call has been executed and then respond in JSON format
        .done(function(response) {

//Results is an array of objects
 var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#actors").prepend(gifDiv);
          }

        });
     });
};
$(document).on('click', 'button', giphyAjaxCall);



var queryURL = "http://api.giphy.com/v1/gifs/search?q=monkey&limit=5&api_key=dc6zaTOxFJmzC ";