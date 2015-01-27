
$(document).ready(function(){


    // BETWEEN COMPARE FUNCTION
    function between(x, min, max) {
      return x >= min && x <= max;
    }
  

    // GENERATE RANDOM NUMBER
    var randomInt = Math.floor((Math.random()*100)+1);


    // DISPLAY INFO MODAL
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});


  	// HIDE INFO MODAL
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


    // NEW GAME BUTTON
    $("a.new").click(function(e){
      e.preventDefault();
      randomInt = Math.floor((Math.random()*100)+1);

      $('#feedback').text('Make your Guess!');
      $('#count').text(0);
      $('#guessList').html('');
      $('#userGuess').val('');

    })


    // GUESS CLICK EVENT -----------------------------------------
    $('#guessButton').click(function(e){
      e.preventDefault();

      // SAVE USER INPUT TO VAR
      var value =  parseInt($('#userGuess').val());

      // VALIDATE NUMBER
      if(isNaN(value)) {
         $('#feedback').text('Please enter a number');
        return;
      }

      // VALIDATE OVER 100
      if(value > 100) {
        $('#feedback').text('Please enter a number under 100');
        return;
      }

      // VALIDATE UNDER 0
      if(value < 0) {
        $('#feedback').text('Please enter a number over 0');
        return;
      }

      // INCREMENT GUESS COUNT 
      $('#count').text( ( parseInt( $('#count').text() ) + 1));
      
      // ADD TO GUESS LIST
      $('#guessList').append( "<li>" + value + '</li>');

      // VALIDATE ANSWER
      if(value === randomInt) {
        $('#feedback').text('You Gueesed It! ' + value);
        return;
      }

      // VALIDATE RANGE OF 5 (FIRE)
      if(between(value, (randomInt - 5), (randomInt + 5))) {
        $('#feedback').text('You are on fire!');
        return;
      }

      // VALIDATE RANGE OF 10 (HOT)
      if(between(value, (randomInt - 10), (randomInt + 10))) {
        $('#feedback').text('You are hot');
        return;
      }

      // VALIDATE RANGE OF 20 (WARM)
      if(between(value, (randomInt - 20), (randomInt + 20))) {
        $('#feedback').text('You are warm');
        return;
      }

      // VALIDATE RANGE OF 30 (COOL)
      if(between(value, (randomInt - 30), (randomInt + 30))) {
        $('#feedback').text('You are cool');
        return;
      }

      // IF YOU AE HERE EYOU ARE FREEZING 
      $('#feedback').text('You are freezing');
      return;
    
    });



});


