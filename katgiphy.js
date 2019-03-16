$(document).ready(function () {
   
    //kats api key= UACRBWubr10CWvmpb20IavCNirPCmMPN
      //variable of all the animal
      var topics = ["dog", "cat", "pig", "possum", "rabbit", "hamster", "koala", "dinosaur", "unicorn"]
    
      //button


 //function to add movie buttons
	
 function buttonGenerator() {                        
  $("#buttonArea").empty(); 

  for (var i = 0; i < topics.length; i++) {  
  var topicButton = $("<button>");  
  topicButton.addClass("topic");  
  topicButton.attr("data-name", topics[i]);  
  topicButton.text(topics[i]);  
  $("#buttonArea").append(topicButton);
  }  

  //end for 
  $("#topic-input").focus();  
}  

        //add button to add animal
        $("#addTopic").on("click", function(){

          // grabs the user show input
          var topic = $("#topic-input").val().trim();
          // that input is now added to the array
          topics.push(topic);
          // the makeButtons function is called, which makes buttons for all my shows plus the user show
          buttonGenerator();
          // this line is so users can hit "enter" instead of clicking the submit button
          return false; 
        })
    
    //giphy key thing
    function displayGifs(){
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit10&api_key=UACRBWubr10CWvmpb20IavCNirPCmMPN";
   
    //ajax thingie go here  
        $.ajax({
            url: queryURL,
            method: "GET"
            //console log the stuff
    }).done(function(response){
    console.log(response.data);
    //var results
    var results = response.data;
    
    for (var i = 0; i < results.length; i++) {
     // a div is created to hold a gif of any topic
        var gifDiv = $("<div class=gifs>");
        var topicImage = $("<img>");
       
       // add states of animate and still which will be toggled 
       topicImage.attr("src", results[i].images.fixed_height_still.url);
       topicImage.attr("data-still", results[i].images.fixed_height_still.url);
       topicImage.attr("data-animate", results[i].images.fixed_height.url);
       topicImage.attr("data-state", "still");
       topicImage.addClass("gif");
       topicImage.attr('title', "Rating: "+results[i].rating);

       // Under the gif, display the rating (this is the internet after all)
       
       
       
       
       // image is appended to the div
       gifDiv.append(topicImage);
       // rating is appended to the div below the gif
       gifDiv.append(topicImage); 			
       // new images will be placed at the beginning (top) of the containing gif area
       $("#gifArea").prepend(gifDiv);
    }
    })
    }
    
    
    // When the user clicks one of the still GIPHY images, and it animates. When the user clicks the gif again, it stops playing.
    $("#gifArea").on("click", ".gif", function(event){
    event.preventDefault();
    
    // gets the current state of the clicked gif 
    var state = $(this).attr("data-state");
    
    // according to the current state gifs toggle between animate and still 
    if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
    } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
    }
    
    })
    
  

    //Display gifs

    $(document).on("click", ".topic", displayGifs);
    // call the function that creates the new button
    buttonGenerator();
    })
