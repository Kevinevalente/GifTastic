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
b.attr("data-name", actors[i]);
b.text(actors[i]);
$("#actorTabs").append(b);
	}
}

//Event Click handler
$("#addActor").on("click", function(event) {
event.preventDefault();

var search = $("#search-input").val().trim();
actors.push(search);

// Call function 
showGifs();
      });
//Call to show initial array of actors
showGifs();



var queryURL = "http://api.giphy.com/v1/gifs/search?q=monkey&limit=5&api_key=dc6zaTOxFJmzC ";