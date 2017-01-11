/**
 * Created by Justin on 1/10/2017.
 */


var board = new Board();


$(".box").click(function(index){

	//If the board paints a cell, then returns true
	if(board.paintCell(this))
	{
		console.log("got in here?");
		//since it painted a cell
		board.advanceTurn();
		board.displayTurn();
	}







});

