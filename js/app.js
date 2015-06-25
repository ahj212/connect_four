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

// var column1 = [$("#a1"), [$("#a2"), [$("#a3"), [$("#a4"), [$("#a5"), [$("#a6")];
var a6 = $("#a6");


// start button
var startBut = function () {
  var playerOneName = prompt("Type in your name.");
  var humanOrCompOpp = confirm("Play against another human?"); //if true, playerTwo plays. if false, computer plays
}

// how to play button
var howToPlayBut = function() {
  alert("Line four of your discs together either vertically, horizontally, or diagnoally!");
}

// initial turn number
turn = 1;

// 
var columnBut1 = function() {
  console.log("columnBut1 clicked");

if ( $("#a1").hasClass("blank") || $("#a2").hasClass("blank") || $("#a3").hasClass("blank") || $("#a4").hasClass("blank") || $("#a5").hasClass("blank") || $("#a6").hasClass("blank") ) {

  if (turn%2 != 0) { // this if statement only runs for player one
  	turn++; // adds turn number

    if ( $("#a6").hasClass("blank") ) {  
  	  $("#a6").removeClass("blank").addClass("discRed");
    } else if ( $("#a5").hasClass("blank") ) {
	  $("#a5").removeClass("blank").addClass("discRed");
    } else if ( $("#a4").hasClass("blank") ) {
	  $("#a4").removeClass("blank").addClass("discRed");
    } else if ( $("#a3").hasClass("blank") ) {
	  $("#a3").removeClass("blank").addClass("discRed");
    } else if ( $("#a2").hasClass("blank") ) {
	  $("#a2").removeClass("blank").addClass("discRed");
    } else if ( $("#a1").hasClass("blank") ) {
	  $("#a1").removeClass("blank").addClass("discRed");
    }
  } else if (turn%2 == 0) { // this else if statement only runs for opponent
  	 turn++; // adds turn number

     if ( $("#a6").hasClass("blank") ) {
  	   $("#a6").removeClass("blank").addClass("discBlue");
     } else if ( $("#a5").hasClass("blank") ) {
	   $("#a5").removeClass("blank").addClass("discBlue");
     } else if ( $("#a4").hasClass("blank") ) {
	   $("#a4").removeClass("blank").addClass("discBlue");
     } else if ( $("#a3").hasClass("blank") ) {
	   $("#a3").removeClass("blank").addClass("discBlue");
     } else if ( $("#a2").hasClass("blank") ) {
	    $("#a2").removeClass("blank").addClass("discBlue");
     } else if ( $("#a1").hasClass("blank") ) {
	   $("#a1").removeClass("blank").addClass("discBlue");
     }
   }
} 

   //  if ( ( a6 !== $("#a6.discRed") ) || ( $("#a6") != $("#a6.discBlue") ) ) {
	  // a6 = $("#a6").attr("class", "discRed");
   //  } else if ( ( $("#a5") != $("#a5.discRed") ) || ( $("#a5") != $("#a5.discBlue") ) ) {
   //   $("#a5").attr("class", "discRed");
   //  }

}  
 //  if (turn == 2) {
 //  	turn = 1;
 //    if ( ( $("#a6") != $("#a6.discRed") ) || ( $("#a6") != $("#a6.discBlue") ) ) {
	//   $("#a6").attr("class", "discBlue");
 //    } else if ( ( $("#a5") != $("#a5.discRed") ) || ( $("#a5") != $("#a5.discBlue") ) ) {
 //      $("#a5").attr("class", "discBlue");
	// }
 //  }
