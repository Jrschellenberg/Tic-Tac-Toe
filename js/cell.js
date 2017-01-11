/**
 * Created by Justin on 1/10/2017.
 */
var TYPE = {
	EMPTY : "E",
	NOUGHT : "O",
	CROSS : "X"
};

function Cell(element){
	this.content = TYPE.EMPTY;
	this.element = element;
	//Cell.clear();
}

Cell.prototype.clear = function(){
	this.content = TYPE.EMPTY;
	$(this.cell).removeClass("box-filled-1 box-filled-2");
};

Cell.prototype.setContent = function(content){
	this.content = content;
	if(this.content == TYPE.NOUGHT){
		this.cell.addClass("box-filled-1");
	}
	else if(this.content == TYPE.CROSS){
		this.cell.addClass("box-filled-2");
	}
};

Cell.prototype.getContent = function(){
	return this.content;
};

Cell.prototype.paint = function(content){
	this.content = content;

	if(this.content === "O"){
		$(this.element).addClass("box-filled-1");
	}
	else if(this.content === "X"){
		$(this.element).addClass("box-filled-2");
	}
	else{
		console.log("hitting else ");

	}
};