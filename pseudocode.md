connect four attributes:

  board layout
    - 6 rows
    - 7 colums 
    - 42 unique spaces inside board

    [f1, f2, f3, f4, f5, f6, f7]
    [e1, e2, e3, e4, e5, e6, e7]
    [d1, d2, d3, d4, d5, d6, d7]
    [c1, c2, c3, c4, c5, c6, c7]
    [b1, b2, b3, b4, b5, b6, b7]
    [a1, a2, a3, a4, a5, a6, a7]

  participants
    - playerOne
    - playerTwo || computer

  rules
    - turn alternates b/w playerOne and playerTwo || computer
    - players can only place their disc inside board
    - turn ends when player placed their disc inside board
    - each unique space in board can only be occupied by one player
    - players cannot skip their turn

  winning condition
    - 4 discs of a player line up uninterruped by unoccupied space or or opposing player's disc
    - 4 discs can line up horizontally e.g [a1], [a2], [a3], [a4]
    - 4 discs can line up vertically e.g [a1], [b1], [c1], [d1]
    - 4 discs can line up diagonally e.g [a1], [b2], [c3], [d4]

  tie condition
    - winning condition is not met after every unique spaces are occupied 

html/css portion:

  - Connect Four header <h1>
  - Start button <button id="startBut">
  - HTP (How to Play) button <button id="howToPlayBut">
  - Win/loss record display 
  - CF board

js portion:




  board object
    - 
    -

  
  playerOne object
  	- playerOneCircle attribute : x (make css change x to red color)
  	- playerOneMove function : behavior that drop red circle in board
  	  -

  playerTwo object
  	- playerTwoCircle attribute : o (make css change o to black color)
  	- playerTwoMove function : behavior thatdrop black circle in board 
  	  -

  computer object (if implemented)
    - computerCircle attribute : 0 (make css change 0 to black color)
    -  computerMove function : behavior that drop black circle in board
      -

