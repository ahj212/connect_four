$(document).ready(function() {
  $('#startBut').on("click", startBut);
  $('#howToPlayBut').on("click", howToPlayBut);
  $("#column1").on("click", columnBut1);
  $("#column2").on("click", columnBut2);
  $("#column3").on("click", columnBut3);
  $("#column4").on("click", columnBut4);
  $("#column5").on("click", columnBut5);
  $("#column6").on("click", columnBut6);
  $("#column7").on("click", function() {
  	columnBut7();
  	checkWin();
  });
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

// initial turn number
turn = 1;

// column 1 button: clicking will put "discs" inside column 1.  
var columnBut1 = function() {
  console.log("columnBut1 clicked");

  if ( $("#a1").hasClass("blank") || $("#a2").hasClass("blank") || $("#a3").hasClass("blank") || $("#a4").hasClass("blank") || $("#a5").hasClass("blank") || $("#a6").hasClass("blank") ) {

    if (turn%2 != 0) { // this if statement only runs for player one
  	turn++; // adds turn number

      if ( $("#a6").hasClass("blank") ) {  // checking #a6 first b/c it is located   
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
}  

// column 2 button
var columnBut2 = function() {
  console.log("columnBut2 clicked");

  if ( $("#b1").hasClass("blank") || $("#b2").hasClass("blank") || $("#b3").hasClass("blank") || $("#b4").hasClass("blank") || $("#b5").hasClass("blank") || $("#b6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#b6").hasClass("blank") ) {  
  	    $("#b6").removeClass("blank").addClass("discRed");
      } else if ( $("#b5").hasClass("blank") ) {
	    $("#b5").removeClass("blank").addClass("discRed");
      } else if ( $("#b4").hasClass("blank") ) {
	    $("#b4").removeClass("blank").addClass("discRed");
      } else if ( $("#b3").hasClass("blank") ) {
	    $("#b3").removeClass("blank").addClass("discRed");
      } else if ( $("#b2").hasClass("blank") ) {
	    $("#b2").removeClass("blank").addClass("discRed");
      } else if ( $("#b1").hasClass("blank") ) {
	    $("#b1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#b6").hasClass("blank") ) {
  	     $("#b6").removeClass("blank").addClass("discBlue");
       } else if ( $("#b5").hasClass("blank") ) {
	     $("#b5").removeClass("blank").addClass("discBlue");
       } else if ( $("#b4").hasClass("blank") ) {
	     $("#b4").removeClass("blank").addClass("discBlue");
       } else if ( $("#b3").hasClass("blank") ) {
	     $("#b3").removeClass("blank").addClass("discBlue");
       } else if ( $("#b2").hasClass("blank") ) {
	      $("#b2").removeClass("blank").addClass("discBlue");
       } else if ( $("#b1").hasClass("blank") ) {
	     $("#b1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
}  

// column button 3
var columnBut3 = function() {
  console.log("columnBut3 clicked");

  if ( $("#c1").hasClass("blank") || $("#c2").hasClass("blank") || $("#c3").hasClass("blank") || $("#c4").hasClass("blank") || $("#c5").hasClass("blank") || $("#c6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#c6").hasClass("blank") ) {  
  	    $("#c6").removeClass("blank").addClass("discRed");
      } else if ( $("#c5").hasClass("blank") ) {
	    $("#c5").removeClass("blank").addClass("discRed");
      } else if ( $("#c4").hasClass("blank") ) {
	    $("#c4").removeClass("blank").addClass("discRed");
      } else if ( $("#c3").hasClass("blank") ) {
	    $("#c3").removeClass("blank").addClass("discRed");
      } else if ( $("#c2").hasClass("blank") ) {
	    $("#c2").removeClass("blank").addClass("discRed");
      } else if ( $("#c1").hasClass("blank") ) {
	    $("#c1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#c6").hasClass("blank") ) {
  	     $("#c6").removeClass("blank").addClass("discBlue");
       } else if ( $("#c5").hasClass("blank") ) {
	     $("#c5").removeClass("blank").addClass("discBlue");
       } else if ( $("#c4").hasClass("blank") ) {
	     $("#c4").removeClass("blank").addClass("discBlue");
       } else if ( $("#c3").hasClass("blank") ) {
	     $("#c3").removeClass("blank").addClass("discBlue");
       } else if ( $("#c2").hasClass("blank") ) {
	      $("#c2").removeClass("blank").addClass("discBlue");
       } else if ( $("#c1").hasClass("blank") ) {
	     $("#c1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
}  

// column button 4
var columnBut4 = function() {
  console.log("columnBut4 clicked");

  if ( $("#d1").hasClass("blank") || $("#d2").hasClass("blank") || $("#d3").hasClass("blank") || $("#d4").hasClass("blank") || $("#d5").hasClass("blank") || $("#d6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#d6").hasClass("blank") ) {  
  	    $("#d6").removeClass("blank").addClass("discRed");
      } else if ( $("#d5").hasClass("blank") ) {
	    $("#d5").removeClass("blank").addClass("discRed");
      } else if ( $("#d4").hasClass("blank") ) {
	    $("#d4").removeClass("blank").addClass("discRed");
      } else if ( $("#d3").hasClass("blank") ) {
	    $("#d3").removeClass("blank").addClass("discRed");
      } else if ( $("#d2").hasClass("blank") ) {
	    $("#d2").removeClass("blank").addClass("discRed");
      } else if ( $("#d1").hasClass("blank") ) {
	    $("#d1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#d6").hasClass("blank") ) {
  	     $("#d6").removeClass("blank").addClass("discBlue");
       } else if ( $("#d5").hasClass("blank") ) {
	     $("#d5").removeClass("blank").addClass("discBlue");
       } else if ( $("#d4").hasClass("blank") ) {
	     $("#d4").removeClass("blank").addClass("discBlue");
       } else if ( $("#d3").hasClass("blank") ) {
	     $("#d3").removeClass("blank").addClass("discBlue");
       } else if ( $("#d2").hasClass("blank") ) {
	      $("#d2").removeClass("blank").addClass("discBlue");
       } else if ( $("#d1").hasClass("blank") ) {
	     $("#d1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
} 

// column button 5
var columnBut5 = function() {
  console.log("columnBut5 clicked");

  if ( $("#e1").hasClass("blank") || $("#e2").hasClass("blank") || $("#e3").hasClass("blank") || $("#e4").hasClass("blank") || $("#e5").hasClass("blank") || $("#e6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#e6").hasClass("blank") ) {  
  	    $("#e6").removeClass("blank").addClass("discRed");
      } else if ( $("#e5").hasClass("blank") ) {
	    $("#e5").removeClass("blank").addClass("discRed");
      } else if ( $("#e4").hasClass("blank") ) {
	    $("#e4").removeClass("blank").addClass("discRed");
      } else if ( $("#e3").hasClass("blank") ) {
	    $("#e3").removeClass("blank").addClass("discRed");
      } else if ( $("#e2").hasClass("blank") ) {
	    $("#e2").removeClass("blank").addClass("discRed");
      } else if ( $("#e1").hasClass("blank") ) {
	    $("#e1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#e6").hasClass("blank") ) {
  	     $("#e6").removeClass("blank").addClass("discBlue");
       } else if ( $("#e5").hasClass("blank") ) {
	     $("#e5").removeClass("blank").addClass("discBlue");
       } else if ( $("#e4").hasClass("blank") ) {
	     $("#e4").removeClass("blank").addClass("discBlue");
       } else if ( $("#e3").hasClass("blank") ) {
	     $("#e3").removeClass("blank").addClass("discBlue");
       } else if ( $("#e2").hasClass("blank") ) {
	      $("#e2").removeClass("blank").addClass("discBlue");
       } else if ( $("#e1").hasClass("blank") ) {
	     $("#e1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
} 

// column button 6
var columnBut6 = function() {
  console.log("columnBut6 clicked");

  if ( $("#f1").hasClass("blank") || $("#f2").hasClass("blank") || $("#f3").hasClass("blank") || $("#f4").hasClass("blank") || $("#f5").hasClass("blank") || $("#f6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#f6").hasClass("blank") ) {  
  	    $("#f6").removeClass("blank").addClass("discRed");
      } else if ( $("#f5").hasClass("blank") ) {
	    $("#f5").removeClass("blank").addClass("discRed");
      } else if ( $("#f4").hasClass("blank") ) {
	    $("#f4").removeClass("blank").addClass("discRed");
      } else if ( $("#f3").hasClass("blank") ) {
	    $("#f3").removeClass("blank").addClass("discRed");
      } else if ( $("#f2").hasClass("blank") ) {
	    $("#f2").removeClass("blank").addClass("discRed");
      } else if ( $("#f1").hasClass("blank") ) {
	    $("#f1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#f6").hasClass("blank") ) {
  	     $("#f6").removeClass("blank").addClass("discBlue");
       } else if ( $("#f5").hasClass("blank") ) {
	     $("#f5").removeClass("blank").addClass("discBlue");
       } else if ( $("#f4").hasClass("blank") ) {
	     $("#f4").removeClass("blank").addClass("discBlue");
       } else if ( $("#f3").hasClass("blank") ) {
	     $("#f3").removeClass("blank").addClass("discBlue");
       } else if ( $("#f2").hasClass("blank") ) {
	      $("#f2").removeClass("blank").addClass("discBlue");
       } else if ( $("#f1").hasClass("blank") ) {
	     $("#f1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
} 

// column button 7
var columnBut7 = function() {
  console.log("columnBut7 clicked");

  if ( $("#g1").hasClass("blank") || $("#g2").hasClass("blank") || $("#g3").hasClass("blank") || $("#g4").hasClass("blank") || $("#g5").hasClass("blank") || $("#g6").hasClass("blank") ) {

    if (turn%2 != 0) {
  	turn++;

      if ( $("#g6").hasClass("blank") ) {  
  	    $("#g6").removeClass("blank").addClass("discRed");
      } else if ( $("#g5").hasClass("blank") ) {
	    $("#g5").removeClass("blank").addClass("discRed");
      } else if ( $("#g4").hasClass("blank") ) {
	    $("#g4").removeClass("blank").addClass("discRed");
      } else if ( $("#g3").hasClass("blank") ) {
	    $("#g3").removeClass("blank").addClass("discRed");
      } else if ( $("#g2").hasClass("blank") ) {
	    $("#g2").removeClass("blank").addClass("discRed");
      } else if ( $("#g1").hasClass("blank") ) {
	    $("#g1").removeClass("blank").addClass("discRed");
      }
    } else if (turn%2 == 0) {
  	 turn++;

       if ( $("#g6").hasClass("blank") ) {
  	     $("#g6").removeClass("blank").addClass("discBlue");
       } else if ( $("#g5").hasClass("blank") ) {
	     $("#g5").removeClass("blank").addClass("discBlue");
       } else if ( $("#g4").hasClass("blank") ) {
	     $("#g4").removeClass("blank").addClass("discBlue");
       } else if ( $("#g3").hasClass("blank") ) {
	     $("#g3").removeClass("blank").addClass("discBlue");
       } else if ( $("#g2").hasClass("blank") ) {
	      $("#g2").removeClass("blank").addClass("discBlue");
       } else if ( $("#g1").hasClass("blank") ) {
	     $("#g1").removeClass("blank").addClass("discBlue");
       }
     }
  }   
} 





// var columnClicked = function  () {
// 	var index =  parseInt($(this).attr("id")[6]) - 1
// 	var cols = ["a", "b", "c", "d", "e", "f", "g"]
// 	if ( $("#" + cols[index] + "1").hasClass("blank") || $("#" + cols[index] + "2").hasClass("blank") || $("#" + cols[index] + "3").hasClass("blank") || $("#" + cols[index] + "4").hasClass("blank") || $("#" + cols[index] + "5").hasClass("blank") || $("#" + cols[index] + "6").hasClass("blank") ) {

//     if (turn%2 != 0) {
//   	turn++;

//       if ( $("#" + cols[index] + "6").hasClass("blank") ) {  
//   	    $("#" + cols[index] + "6").removeClass("blank").addClass("discRed");
//       } else if ( $("#" + cols[index] + "5").hasClass("blank") ) {
// 	    $("#" + cols[index] + "5").removeClass("blank").addClass("discRed");
//       } else if ( $("#" + cols[index] + "4").hasClass("blank") ) {
// 	    $("#" + cols[index] + "4").removeClass("blank").addClass("discRed");
//       } else if ( $("#" + cols[index] + "3").hasClass("blank") ) {
// 	    $("#" + cols[index] + "3").removeClass("blank").addClass("discRed");
//       } else if ( $("#" + cols[index] + "2").hasClass("blank") ) {
// 	    $("#" + cols[index] + "2").removeClass("blank").addClass("discRed");
//       } else if ( $("#" + cols[index] + "1").hasClass("blank") ) {
// 	    $("#" + cols[index] + "1").removeClass("blank").addClass("discRed");
//       }
//     } else if (turn%2 == 0) {
//   	 turn++;

//        if ( $("#" + cols[index] + "6").hasClass("blank") ) {
//   	     $("#" + cols[index] + "6").removeClass("blank").addClass("discBlue");
//        } else if ( $("#" + cols[index] + "5").hasClass("blank") ) {
// 	     $("#" + cols[index] + "5").removeClass("blank").addClass("discBlue");
//        } else if ( $("#" + cols[index] + "4").hasClass("blank") ) {
// 	     $("#" + cols[index] + "4").removeClass("blank").addClass("discBlue");
//        } else if ( $("#" + cols[index] + "3").hasClass("blank") ) {
// 	     $("#" + cols[index] + "3").removeClass("blank").addClass("discBlue");
//        } else if ( $("#" + cols[index] + "2").hasClass("blank") ) {
// 	      $("#" + cols[index] + "2").removeClass("blank").addClass("discBlue");
//        } else if ( $("#" + cols[index] + "1").hasClass("blank") ) {
// 	     $("#" + cols[index] + "1").removeClass("blank").addClass("discBlue");
//        }
//      }
//   }   
	
// }

var checkWin = function  () {
	checkHorizontal();
	checkVertical();
	checkDiagonal();
}

var checkHorizontal = function  () {
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

  	for (var j = 0; j <currentRow.length; j++) {
  		console.log(currentRow[j]);
  	  var horizontalClassName = currentRow[j].attr('class');
  	  console.log(horizontalClassName);
  	  currentRowString += horizontalClassName;
  	  console.log(currentRowString);
  	  if (currentRowString.indexOf("discBluediscBluediscBluediscBlue") != -1) {
  	    return true;	
  	  } else if (currentRowString.indexOf("discReddiscReddiscReddiscRed") != -1) {
  	  	return true;
  	  }
  	}
  }
};

var checkVertical = function  () {
	var columns = $(".column");
	for(var i = 0; i < columns.length; i++){
		var currentColumnString = "";
		var currentColumn = columns.eq(i);
		var innerDivs = currentColumn.children();
		for(var j = 0; j < innerDivs.length; j++){
			var verticalClassName = innerDivs.eq(j).attr('class');
			console.log(verticalClassName);
			currentColumnString += verticalClassName;
			console.log(currentColumnString);
			if (currentColumnString.indexOf('discBluediscBluediscBluediscBlue') != -1){
				alert("player 2 wins!");
				return true;
			} else if (currentColumnString.indexOf('discReddiscReddiscReddiscRed') != -1){
				alert("player 1 wins!");
				return true;
			}
		}
	}
}

var checkDiagonal = function  () {
  var diagonal1 = [ $("a4"), $("#b3"), $("#c2"), $("#d1") ];
  var diagonal2 = [ $("a5"), $("#b4"), $("#c3"), $("#d2"), $("#e1") ];
  var diagonal3 = [ $("a6"), $("#b5"), $("#c4"), $("#d3"), $("#e2"), $("#f1") ];
  var diagonal4 = [ $("#b6"), $("#c5"), $("#d4"), $("#e3"), $("#f2"), $("#g1") ];
  var diagonal5 = [ $("#") ]

  var diagonal = [ diagonal1, ]
}
































