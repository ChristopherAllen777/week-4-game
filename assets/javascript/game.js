 $(document).ready(function() {

  var targetNumber = 39;

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 5, 3, 7];

  imageRedgem.addClass("redgem-image")
  
  imageRedgem.attr("data-gemvalue", numberOptions[i]);

  $("#redgem").append(imageRedgem);



  $(".redgem-image").on("click", function() {

  var gemValue = ($(this).attr("data-gemvalue"));
  	  gemValue = parseInt(gemValue);

  	  counter += gemValue;

  	  alert("New score; " + counter);

  	  if (counter === targetNumber){
  	  	alert("You Win!");
  	  }
  	  else if (counter >= targetNumber) {
  	  	alert("You lose!!")
  	  }



});