/**
 * Created by Justin on 1/10/2017.
 */


function Board(){
	this.result = "stillRunning";
	this.turn = "O";
	this.displayTurn();
	//initializing an empty array
	this.items = $(".box");
	this.cells = new Array();

	this.index = [];


	console.log(this.items);
	for(var i=0; i < this.items.length; i++){
		console.log(this.items[i]);
		this.index[i] = i;
		this.cells.push(new Cell(this.items[i]));

	}
	console.log(this.cells);
}

Board.prototype.paintCell = function(value){
	//console.log("got in here?");
	//console.log(value);
	//console.log(this.turn);
	var played = false;
	for(var i = 0; i < this.cells.length; i++){
		//Determines that cell being clicked on is an empty cell and matches the cell to the element selector.
		if(value == this.cells[i].element && this.cells[i].content == "E"){
			this.cells[i].paint(this.turn);
			played = true;
		}
	}
	console.log(played);
	return played;

};

Board.prototype.advanceTurn = function(){
	if(this.turn === "O"){
		this.turn = "X";
	}
	else{
		this.turn = "O";
	}
};
Board.prototype.displayTurn = function(){
	if(this.turn == "O"){
		$("#player2").removeClass('active');
		$("#player1").addClass('active');
	}
	else if(this.turn =="X"){
		$("#player1").removeClass('active');
		$("#player2").addClass('active');
	}
};
/*
This method is used to empty all of the cells on the board.
 */
Board.prototype.emptyAllCells = function(){
	for(var i =0;  i < cells.length; i++){
		this.cells[i].clear();
		this.items[i].removeClass("box-filled-1 box-filled-2");
	}
};
/*
This method used to determine the amount of empty cells left.
 */
Board.prototype.emptyCellsLeftOnBoard = function(){
	var indxs = [];
	for(var itr = 0; itr < 9 ; itr++) {
		if(this.board[itr] === "E") {
			indxs.push(itr);
		}
	}
	return indxs;
};


/*
This method is used to determine if the game is finished, who won, and if there is a draw or not.
 */
Board.prototype.isTerminal = function() {
	var board = this.cells;
	//check rows
	for(var i = 0; i <= 6; i = i + 3) {
		if(board[i] !== "E" && board[i] === board[i + 1] && board[i + 1] == board[i + 2]) {
			this.result = board[i] + "-won"; //update the state result
			return true;
		}
	}

	//check columns
	for(var i = 0; i <= 2 ; i++) {
		if(board[i] !== "E" && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
			this.result = board[i] + "-won"; //update the state result
			return true;
		}
	}

	//check diagonals
	for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
		if(board[i] !== "E" && board[i] == board[i + j] && board[i + j] === board[i + 2*j]) {
			this.result = board[i] + "-won"; //update the state result
			return true;
		}
	}

	 var emptyCellsAvailable = this.emptyCellsLeftOnBoard();


	if(emptyCellsAvailable.length == 0) {
		//the game is draw
		this.result = "draw"; //update the state result
		return true;
	}
	else {
		return false;
	}



};
