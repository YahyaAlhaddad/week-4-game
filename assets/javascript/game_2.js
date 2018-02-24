// Generate the target number by generating a random number between 19 and 120
 var targetNumber= Math.floor(Math.random() * 100)+19;
  console.log(targetNumber);
  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  // Create an array to hold the generated crystal values
  var crystalValues = [];
  var imageCrystal;  
  function initiate(){
  // A loop to generate the crystal values
  for (var i = 0; i < 4; i++) {
    crystalValues[i] = Math.floor(Math.random() * 12) + 1;
    console.log("the index is   " + i);
    console.log(crystalValues[i]);
      // For each iteration, we will create an imageCrystal
    
    imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    if (i==0) {
      imageCrystal.attr("src", "assets/images/green.jpg");
    }
      else if (i==1) {
        imageCrystal.attr("src", "assets/images/Purple.jpg");
      }
       else if (i==2) {
        imageCrystal.attr("src", "assets/images/Red.jpg");
      }
       else if (i==3) {
        imageCrystal.attr("src", "assets/images/yellow.jpg");
      }

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("value", crystalValues[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }
}
initiate();
  // This time, our click event applies to every single crystal on the page. Not just one.
  // $(".crystal-image").on("click", function() {  

   $("#crystals").on("click", ".crystal-image", function() {
      
      var temp = $(this).attr("value");
      var tempInt= parseInt(temp);
      console.log(temp);
      // var number= crystalValues[tempInt];
      
      // console.log(number);
      counter += tempInt;
      alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      counter= 0;
      crystalValues= [];
      $("#crystals").empty();
      initiate();
      targetNumber= Math.floor(Math.random() * 100)+19;
      console.log(targetNumber);
      $("#number-to-guess").text(targetNumber);
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      counter=0;
      crystalValues=[];
      $("#crystals").empty();
      initiate();
      targetNumber= Math.floor(Math.random() * 100)+19;
      console.log(targetNumber);
      $("#number-to-guess").text(targetNumber);
    }

  });
 