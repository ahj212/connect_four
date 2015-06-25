$(document).ready(function() {
  $('#startBut').on("click", startBut);
  $('#howToPlayBut').on("click", howToPlayBut);
  $("#column1").on("click", columnBut1);
  $("#column2").on("click", columnBut);
  $("#column3").on("click", columnBut);
  $("#column4").on("click", columnBut);
  $("#column5").on("click", columnBut);
  $("#column6").on("click", columnBut);
  $("#column7").on("click", columnBut);
});

// start button
var startBut = function () {
  var playerOneName = prompt("Type in your name.");
  var humanOrCompOpp = confirm("Play against another human?"); //if true, playerTwo plays. if false, computer plays
}

// how to play button
var howToPlayBut = function() {
  alert("Line four of your discs together either vertically, horizontally, or diagnoally!");
}

// column button that allows players to place their disc inside board and alternate turns
var columnBut1 = function() {
  console.log("columnBut1 clicked");
  
  if ( ( $("#a6") != $("#a6.discRed") ) || ( $("#a6") != $("#a6.discBlue") ) ) {
	$("#a6").attr("class", "discRed");
	//turn = 2;
  } else if ( ( $("#a5") != $("#a5.discRed") ) || ( $("#a5") != $("#a5.discBlue") ) ) {
  	$("#a5").attr("class", "discRed");
  	//turn = 2;
  }
}  
