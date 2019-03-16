<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Giftastic</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="katgiphy.css">
    
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<h1>GIPHY homework</h1>
<body>
    	
    <!-- Jumbotron -->
    <div class="container">
        <div class="jumbotron">
            <h1>Animal Gifs</h1>
        </div>   
<!-- div for movie buttons -->      
<div id="buttonArea">
</div>  
<!-- user input to add movies -->        
        <form id="addTopic">             
            <label for="topic-input">Animal Type: </label>
            <input type="text" id="topic-input" onfocus="this.value='';">                                  
            <input id="add-topic" type="submit" value="Submit topic">
        </form>     
<!-- div where GIFs go -->        
        <div id ="gifArea"></div>        
    </div>  <!--end container-->


	</div>
	
        <script src="katgiphytest.js"></script>
		
	

</body>
</html>