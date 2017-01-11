/**
 * Created by Justin on 1/10/2017.
 */


var board = new Board();

var winMessageContainer = $('#finish');


$(".box").click(function(index){

	//If the board paints a cell, then returns true
	if(board.paintCell(this))
	{
		if(board.isTerminal()){ //Board finished.

			winMessageContainer.children().children('.message').text("Winner");
			winMessageContainer.removeClass('hide');

			if(board.result === "O-won"){
				winMessageContainer.addClass('screen-win screen-win-one');
				//do code for o winning
			}
			else if (board.result === "X-won"){
				winMessageContainer.addClass('screen-win screen-win-two');
			}
			else{
				winMessageContainer.children().children('.message').text("It's a Draw");
				winMessageContainer.addClass('screen-win screen-win-tie');
			}

			//Do some code for the message displayment.
			console.log(board.result);
		}
		board.advanceTurn();
		board.displayTurn();
	}

});
$('#finish a').click(function(){
	console.log("clicking this button");
	board.emptyAllCells();
	console.log($(this))
	winMessageContainer.addClass("hide");
	winMessageContainer.removeClass('screen-win screen-win-one screen-win-two screen-win-tie');
	$('.box').each(function(){
		$(this).removeClass("box-hover1 box-hover2");
	});
});
$('#start a').click(function(){
	$(this).parent().parent().hide();
});

console.log("getting to this code");

$('.box').hover(function(){

	//Making sure cell hovered over is an empty cell.
	if(board.isEmptyCell(this)) {
		//$(this).css("opacity", "0.2");
		if (board.turn === 'O') {
			//Add a opacity and background image temporarily
			$(this).toggleClass("box-hover1");
			//console.log("doing the O log");
		}
		else if (board.turn === 'X') {
			$(this).toggleClass("box-hover2");
			//console.log("doing the X log");
		}
	}

});



