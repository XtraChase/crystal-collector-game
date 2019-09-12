var randomNum = []; //random number generated to achieve
var win = 0; //total number of wins
var lose = 0; //total number of loses
var btn1 = []; //button 1 random value
var btn2 = []; //button 2 random value
var btn3 = []; //button 3 random value
var btn4 = []; //button 4 random value
var yourNumber; // total user input amount

//function to start a new round
function startNewRound() {
  randomNum = Math.floor(Math.random() * 101) + 19; //new number to achieve is generated
  btn1 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn2 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn3 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn4 = Math.floor(Math.random() * 12) + 1; //new button number generated
  yourNumber = 0; //your number is reset
  $(".given-number").text(randomNum);
  $(".button1").val(btn1);
  $(".button2").val(btn2);
  $(".button3").val(btn3);
  $(".button4").val(btn4);
  $("#totalNum").text();
}

//  ********* Gameplay *********
$(".button").on("click", function() {
  var buttonPressed = $(this).val();
  var var2 = parseInt(buttonPressed);
  //console.log(typeof buttonPressed);
  result = $("#totalNum").text((yourNumber += var2));
  console.log("Button pressed =" + " " + buttonPressed);

  if (yourNumber === randomNum) {
    startNewRound();
    win++;
    $("#winAmount").text(win);
    console.log("WIN");
  } else if (yourNumber > randomNum) {
    startNewRound();
    lose++;
    $("#loseAmount").text(lose);
    console.log("LOSE");
  }
});

//Set CSS
$(".given-number").css({
  fontSize: "4em",
  color: "azure",
  margin: "50px 50px 0px 0px"
});

$(".total-amount").css({ fontSize: "2em", color: "azure" });
