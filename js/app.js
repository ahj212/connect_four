console.log("app.js loaded.")

$(document).ready(function() {
  $('#startBut').on("click", startBut);
  $('#howToPlayBut').on("click", howToPlayBut);
  $("#resetBut").on("click", resetBut);
  $("#column1").on("click", function() {
  	columnBut1();
  	checkWin();
   });
  $("#column2").on("click", function() {
  	columnBut2();
  	checkWin();
  });
  $("#column3").on("click", function() {
  	columnBut3();
  	checkWin();
  });
  $("#column4").on("click", function() {
  	columnBut4();
  	checkWin();
  });
  $("#column5").on("click", function() {
  	columnBut5();
  	checkWin();
  });
  $("#column6").on("click", function() {
  	columnBut6();
  	checkWin();
  });
  $("#column7").on("click", function() {
  	columnBut7();
  	checkWin();
  });
});

//audio that prompts once a player wins
var audioVictory = new Audio('FF7Victory.mp3');

// initial turn number
var turn = 1;

// initial turn display for resultContainer, for some reason, needs to have +1 value more than turn to display correctly
var turnDisplay = 2;

// displays initial turn number in #resultContainer
$(".turnDisplay").text("Turn: 1");

// initial blank value for player names
var playerOneName = "";
var playerTwoName = "";

// initial win values for win record
var playerOneWinCount = 0;
var playerTwoWinCount = 0;

// column 1 button: clicking will alter cells' class inside column 1
var columnBut1 = function() {
  console.log("columnBut1 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) { // prevents game from starting if player names are empty

  if ( $("#a1").hasClass("blank") || $("#a2").hasClass("blank") || $("#a3").hasClass("blank") || $("#a4").hasClass("blank") || $("#a5").hasClass("blank") || $("#a6").hasClass("blank") ) {

    if (turn%2 != 0) { // this if statement only runs for player one
  	turn++; // adds turn number

      if ( $("#a6").hasClass("blank") ) {  // checking #a6 first b/c it is located on the "bottom" 
  	    $("#a6").removeClass("blank").addClass("discRed"); // removes blank class and adds discRed class that has red background color
  	    $(".turnDisplay").text("Turn: " + turnDisplay++); // updates #resultContainer turn number
      } else if ( $("#a5").hasClass("blank") ) {
	      $("#a5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#a4").hasClass("blank") ) {
	      $("#a4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#a3").hasClass("blank") ) {
	      $("#a3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#a2").hasClass("blank") ) {
	      $("#a2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#a1").hasClass("blank") ) {
	      $("#a1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) { // this else if statement only runs for opponent
  	 turn++; 

       if ( $("#a6").hasClass("blank") ) {
  	     $("#a6").removeClass("blank").addClass("discBlue"); // removes blank class and adds discBlue class that has blue background color
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#a5").hasClass("blank") ) {
	       $("#a5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#a4").hasClass("blank") ) {
	       $("#a4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#a3").hasClass("blank") ) {
	       $("#a3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#a2").hasClass("blank") ) {
	       $("#a2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#a1").hasClass("blank") ) {
	      $("#a1").removeClass("blank").addClass("discBlue");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
};  

// column 2 button
var columnBut2 = function() {
  console.log("columnBut2 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#b1").hasClass("blank") || $("#b2").hasClass("blank") || $("#b3").hasClass("blank") || $("#b4").hasClass("blank") || $("#b5").hasClass("blank") || $("#b6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#b6").hasClass("blank") ) {  
  	    $("#b6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#b5").hasClass("blank") ) {
	      $("#b5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#b4").hasClass("blank") ) {
	      $("#b4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#b3").hasClass("blank") ) {
	      $("#b3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#b2").hasClass("blank") ) {
	      $("#b2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#b1").hasClass("blank") ) {
	      $("#b1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#b6").hasClass("blank") ) {
  	     $("#b6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#b5").hasClass("blank") ) {
	       $("#b5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#b4").hasClass("blank") ) {
	       $("#b4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#b3").hasClass("blank") ) {
	       $("#b3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#b2").hasClass("blank") ) {
	       $("#b2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#b1").hasClass("blank") ) {
	       $("#b1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
};  

// column button 3
var columnBut3 = function() {
  console.log("columnBut3 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#c1").hasClass("blank") || $("#c2").hasClass("blank") || $("#c3").hasClass("blank") || $("#c4").hasClass("blank") || $("#c5").hasClass("blank") || $("#c6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#c6").hasClass("blank") ) {  
  	    $("#c6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#c5").hasClass("blank") ) {
	      $("#c5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#c4").hasClass("blank") ) {
	      $("#c4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#c3").hasClass("blank") ) {
	      $("#c3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#c2").hasClass("blank") ) {
	      $("#c2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#c1").hasClass("blank") ) {
	      $("#c1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#c6").hasClass("blank") ) {
  	     $("#c6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#c5").hasClass("blank") ) {
	       $("#c5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#c4").hasClass("blank") ) {
	       $("#c4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#c3").hasClass("blank") ) {
	       $("#c3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#c2").hasClass("blank") ) {
	       $("#c2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#c1").hasClass("blank") ) {
	       $("#c1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
};  

// column button 4
var columnBut4 = function() {
  console.log("columnBut4 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#d1").hasClass("blank") || $("#d2").hasClass("blank") || $("#d3").hasClass("blank") || $("#d4").hasClass("blank") || $("#d5").hasClass("blank") || $("#d6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#d6").hasClass("blank") ) {  
  	    $("#d6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#d5").hasClass("blank") ) {
	      $("#d5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#d4").hasClass("blank") ) {
	      $("#d4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#d3").hasClass("blank") ) {
	      $("#d3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#d2").hasClass("blank") ) {
	      $("#d2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#d1").hasClass("blank") ) {
	      $("#d1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#d6").hasClass("blank") ) {
  	     $("#d6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#d5").hasClass("blank") ) {
	       $("#d5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#d4").hasClass("blank") ) {
	       $("#d4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#d3").hasClass("blank") ) {
	       $("#d3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#d2").hasClass("blank") ) {
	       $("#d2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#d1").hasClass("blank") ) {
	       $("#d1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
}; 

// column button 5
var columnBut5 = function() {
  console.log("columnBut5 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#e1").hasClass("blank") || $("#e2").hasClass("blank") || $("#e3").hasClass("blank") || $("#e4").hasClass("blank") || $("#e5").hasClass("blank") || $("#e6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#e6").hasClass("blank") ) {  
  	    $("#e6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#e5").hasClass("blank") ) {
	      $("#e5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#e4").hasClass("blank") ) {
	      $("#e4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#e3").hasClass("blank") ) {
	      $("#e3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#e2").hasClass("blank") ) {
	      $("#e2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#e1").hasClass("blank") ) {
	      $("#e1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#e6").hasClass("blank") ) {
  	     $("#e6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#e5").hasClass("blank") ) {
	       $("#e5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#e4").hasClass("blank") ) {
	       $("#e4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#e3").hasClass("blank") ) {
	       $("#e3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#e2").hasClass("blank") ) {
	       $("#e2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#e1").hasClass("blank") ) {
	       $("#e1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
}; 

// column button 6
var columnBut6 = function() {
  console.log("columnBut6 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#f1").hasClass("blank") || $("#f2").hasClass("blank") || $("#f3").hasClass("blank") || $("#f4").hasClass("blank") || $("#f5").hasClass("blank") || $("#f6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#f6").hasClass("blank") ) {  
  	    $("#f6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#f5").hasClass("blank") ) {
	      $("#f5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#f4").hasClass("blank") ) {
	      $("#f4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#f3").hasClass("blank") ) {
	      $("#f3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#f2").hasClass("blank") ) {
	      $("#f2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#f1").hasClass("blank") ) {
	      $("#f1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#f6").hasClass("blank") ) {
  	     $("#f6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#f5").hasClass("blank") ) {
	       $("#f5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#f4").hasClass("blank") ) {
	       $("#f4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#f3").hasClass("blank") ) {
	       $("#f3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#f2").hasClass("blank") ) {
	       $("#f2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#f1").hasClass("blank") ) {
	       $("#f1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
}; 

// column button 7
var columnBut7 = function() {
  console.log("columnBut7 clicked");

  if ( (playerOneName != "") && (playerTwoName != "") ) {

  if ( $("#g1").hasClass("blank") || $("#g2").hasClass("blank") || $("#g3").hasClass("blank") || $("#g4").hasClass("blank") || $("#g5").hasClass("blank") || $("#g6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#g6").hasClass("blank") ) {  
  	    $("#g6").removeClass("blank").addClass("discRed");
  	    $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#g5").hasClass("blank") ) {
	      $("#g5").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#g4").hasClass("blank") ) {
	      $("#g4").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#g3").hasClass("blank") ) {
	      $("#g3").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#g2").hasClass("blank") ) {
	      $("#g2").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      } else if ( $("#g1").hasClass("blank") ) {
	      $("#g1").removeClass("blank").addClass("discRed");
	      $(".turnDisplay").text("Turn: " + turnDisplay++);
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#g6").hasClass("blank") ) {
  	     $("#g6").removeClass("blank").addClass("discBlue");
  	     $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#g5").hasClass("blank") ) {
	       $("#g5").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#g4").hasClass("blank") ) {
	       $("#g4").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#g3").hasClass("blank") ) {
	       $("#g3").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#g2").hasClass("blank") ) {
	       $("#g2").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       } else if ( $("#g1").hasClass("blank") ) {
	       $("#g1").removeClass("blank").addClass("discBlue");
	       $(".turnDisplay").text("Turn: " + turnDisplay++);
       }
     }
  }
  } else {
  	  alert("Press start to play.");
  }   
}; 


// attached checkWin function to each columnBut clicks to determine winner after every turn
var checkWin = function() {
  if ( (checkTie() == true) || ( checkHorizontal() == true ) || ( checkVertical() == true ) ||  (checkDiagonal() == true) ) {
	$(".column").children().attr("class", "blank"); // removes all the cells' classes and replaces it with class "blank"
	turn = 1; // resets turn to 1
	$(".turnDisplay").text("Turn: 1"); // resets turn text in resultContainer
    turnDisplay = 2; // resets turn display to 1
	}
  // updates total player wins in #resultContainer
  $("#playerOneDisplay").text(playerOneName + ": " + playerOneWinCount);
  $("#playerTwoDisplay").text(playerTwoName + ": " + playerTwoWinCount);
};

var checkHorizontal = function  () {
  console.log("checking horizontal WC");
  //array of all the rows
  var row1 = [ $("#a1"), $("#b1"), $("#c1"), $("#d1"), $("#e1"), $("#f1"), $("#g1") ];
  var row2 = [ $("#a2"), $("#b2"), $("#c2"), $("#d2"), $("#e2"), $("#f2"), $("#g2") ];
  var row3 = [ $("#a3"), $("#b3"), $("#c3"), $("#d3"), $("#e3"), $("#f3"), $("#g3") ];
  var row4 = [ $("#a4"), $("#b4"), $("#c4"), $("#d4"), $("#e4"), $("#f4"), $("#g4") ];
  var row5 = [ $("#a5"), $("#b5"), $("#c5"), $("#d5"), $("#e5"), $("#f5"), $("#g5") ];
  var row6 = [ $("#a6"), $("#b6"), $("#c6"), $("#d6"), $("#e6"), $("#f6"), $("#g6") ];
  // all the rows in one array
  var rows =  [ row1, row2, row3, row4, row5, row6 ];

  for(var i = 0; i < rows.length; i++){
  	var currentRowString = "";
  	var currentRow = rows[i];
  	//console.log(currentRow[0]);

  	for (var j = 0; j < currentRow.length; j++) {
  	  //console.log(currentRow[j]);
  	  var horizontalClassName = currentRow[j].attr('class');
  	  //console.log(horizontalClassName);
  	  currentRowString += horizontalClassName;
  	  //console.log(currentRowString);
  	  if (currentRowString.indexOf("discBluediscBluediscBluediscBlue") != -1) {
  	    // audio victory triggers before alert pops
  	    audioVictory.play();
  	    alert(playerTwoName + " wins!");
  	    playerTwoWinCount++;
  	    return true;	
  	  } else if (currentRowString.indexOf("discReddiscReddiscReddiscRed") != -1) {
  	  	audioVictory.play();
  	  	alert(playerOneName + " wins!");
	    playerOneWinCount++;
  	  	return true;
  	  }
  	}
  }
};

var checkVertical = function() {
  console.log("checking vertical WC");
  var columns = $(".column");
  
  for(var i = 0; i < columns.length; i++){
	var currentColumnString = "";
	var currentColumn = columns.eq(i);
	var innerDivs = currentColumn.children();
		
	  for(var j = 0; j < innerDivs.length; j++){
		var verticalClassName = innerDivs.eq(j).attr('class');
		//console.log(verticalClassName);
		currentColumnString += verticalClassName;
		//console.log(currentColumnString);
		  if (currentColumnString.indexOf('discBluediscBluediscBluediscBlue') != -1){
			audioVictory.play();
			alert(playerTwoName + " wins!");
			playerTwoWinCount++;
			return true;
		  } else if (currentColumnString.indexOf('discReddiscReddiscReddiscRed') != -1){
			  audioVictory.play();
			  alert(playerOneName + " wins!");
			  playerOneWinCount++;
			  return true;
		  }
      }
  }
};

var checkDiagonal = function() {
  console.log("checking diagonal WC");
  // arrays for diagonals that go / way	
  var diagonal1 = [ $("#a4"), $("#b3"), $("#c2"), $("#d1") ];
  var diagonal2 = [ $("#a5"), $("#b4"), $("#c3"), $("#d2"), $("#e1") ];
  var diagonal3 = [ $("#a6"), $("#b5"), $("#c4"), $("#d3"), $("#e2"), $("#f1") ];
  var diagonal4 = [ $("#b6"), $("#c5"), $("#d4"), $("#e3"), $("#f2"), $("#g1") ];
  var diagonal5 = [ $("#c6"), $("#d5"), $("#e4"), $("#f3"), $("#g2") ];
  var diagonal6 = [ $("#d6"), $("#e5"), $("#f4"), $("#g3") ];
  // arrays for diagonals that go \ way
  var diagonal7 = [ $("#g4"), $("#f3"), $("#e2"), $("#d1") ];
  var diagonal8 = [ $("#g5"), $("#f4"), $("#e3"), $("#d2"), $("#c1") ];
  var diagonal9 = [ $("#g6"), $("#f5"), $("#e4"), $("#d3"), $("#c2"), $("#b1") ];
  var diagonal10 = [ $("#f6"), $("#e5"), $("#d4"), $("#c3"), $("#b2"), $("#a1") ];
  var diagonal11 = [ $("#e6"), $("#d5"), $("#c4"), $("#b3"), $("#a2") ];
  var diagonal12 = [ $("#d6"), $("#c5"), $("#b4"), $("#a3") ];
  // array for all the diagonals
  var diagonals = [ diagonal1, diagonal2, diagonal3, diagonal4, diagonal5, diagonal6, diagonal7, diagonal8, diagonal9, diagonal10, diagonal11, diagonal12 ];

  for(var i = 0; i < diagonals.length; i++){
  	var currentDiagonalString = "";
  	var currentDiagonal = diagonals[i];

  	for(var j = 0; j < currentDiagonal.length; j++) {
  	  //console.log(currentDiagonal[j]);
  	  var diagonalClassName = currentDiagonal[j].attr("class");
  	  //console.log(diagonalClassName);
  	  currentDiagonalString += diagonalClassName;
  	  //console.log(currentDiagonalString);

  	  if (currentDiagonalString.indexOf("discBluediscBluediscBluediscBlue") != -1) {
  	  	audioVictory.play();
  	  	alert(playerTwoName + " wins!");
		playerTwoWinCount++;
  	  	return true;
  	  } else if (currentDiagonalString.indexOf("discReddiscReddiscReddiscRed") != -1) {
  	  	  audioVictory.play();
  	  	  alert(playerOneName + " wins!");
		  playerOneWinCount++;
  	  	  return true;
  	  }
  	}
  }  
};

var checkTie = function() {
	console.log("checking tie");
	if ( (turn == 43) && (checkHorizontal() == undefined) && (checkVertical() == undefined) && (checkDiagonal() == undefined) ) {
	  alert("It's a tie!");
	  return true;
	} else {
	    return false;
	}
};


// start button
// if no names are typed in, default names are given
// minor bug where ":0" pops up after pressing column button before pressing start persists
var startBut = function () {
  console.log("start button clicked.")
  playerOneName = prompt("Type in player one's name:");
    if (playerOneName === null) {
      playerOneName = "Player One";
    }
  $("#playerOneDisplay").text(playerOneName + ":");
  playerTwoName = prompt("Type in player two's name:");
    if (playerTwoName === null) {
      playerTwoName = "Player Two";
    }
  $("#playerTwoDisplay").text(playerTwoName + ":");
  
  //var humanOrCompOpp = confirm("Play against another human?"); //if true, playerTwo plays. if false, computer plays. NOT IMPLEMENTED
};

// how to play button
var howToPlayBut = function() {
  console.log("how to play button clicked");
  alert("Line four of your discs together either vertically, horizontally, or diagnoally!");
};

// reset button
var resetBut = function() {
  console.log("reset button clicked");
  $(".column").children().attr("class", "blank");
  turn = 1;
  $(".turnDisplay").text("Turn: 1");
  turnDisplay = 2;
}


