class Game {
	constructor(width,height,cols,rows){
		this.width=width;
		this.height=height;
		this.cols=cols;
		this.rows=rows;
		this.grid = new Array(this.cols);
		this.w = this.width/this.cols;
		this.h = this.height/this.rows;
		for (var i = 0 ; i < this.grid.length ; i++){
			this.grid[i] = new Array(this.rows);
		} 
	}
	InicializarNodos(){
		for(var i = 0 ; i < cols ; i++){
			for(var j = 0; j < rows ; j++){
				this.grid[i][j] = new Node(i,j,this.cols,this.rows,this.width,this.height);
			}
		}
	}
    AsignarNeighbors(){
        for(var i = 0 ; i < cols ; i++){
            for(var j = 0; j < rows ; j++){
                this.grid[i][j].addNeighbors(this.grid);
            }
        }
    }
	MostrarNodos(){
		for(var i = 0 ; i < cols ; i++){
			for(var j = 0; j < rows ; j++){
				this.grid[i][j].show()
			}
		}
    }
}