/**
 * Created by Justin on 1/10/2017.
 */

//a object variable to hold the different types of cells.
var TYPE = {
	EMPTY: "E",
	NOUGHT: "O",
	CROSS: "X"
};

/*
 the constructor of the Cell object.
 */
function Cell(element) {
	this.content = TYPE.EMPTY;
	this.element = element;
	//Cell.clear();
}

/*
 a method to clear the cells content and remove the styles associated with that content.
 */
Cell.prototype.clear = function () {
	this.content = TYPE.EMPTY;
	$(this.cell).removeClass("box-filled-1 box-filled-2");
};


/*
 The method used to give the appropriate class to the cell to "paint it" with the css styles
 content: the content being passed into the cell from the board object.
 */
Cell.prototype.paint = function (content) {
	this.content = content;

	if (this.content === "O") {
		$(this.element).addClass("box-filled-1");
	}
	else if (this.content === "X") {
		$(this.element).addClass("box-filled-2");
	}
	else {
		console.log("hitting else ");

	}
};

