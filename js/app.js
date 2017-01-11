/**
 * Created by Justin on 1/10/2017.
 */


var board = new Board();


$(".box").click(function(index){

	console.log(this);
	if(board.paintCell(this) === true){
		console.log("got inside the advancing turn");
		board.advanceTurn();
		board.displayTurn();
	}
	console.log("keep missing it");



});

