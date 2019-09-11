var randomNum = []; //random number generated to achieve
var win = 0; //total number of wins
var lose = 0; //total number of loses
var btn1 = []; //button 1 random value
var btn2 = []; //button 2 random value
var btn3 = []; //button 3 random value
var btn4 = []; //button 4 random value
var yourNumber = []; // total user input amount

//function to start a new round
function startNewRound() {
  randomNum = Math.floor(Math.random() * 120) + 19; //new number to achieve is generated
  btn1 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn2 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn3 = Math.floor(Math.random() * 12) + 1; //new button number generated
  btn4 = Math.floor(Math.random() * 12) + 1; //new button number generated
  yourNumber = 0; //total score is reset
}
