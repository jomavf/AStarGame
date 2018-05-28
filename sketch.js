var cols;
var rows;
var grid;
var inicio;
var final;
var final_x;
var final_y;

function setup() {
	createCanvas(400, 400);	
	cols = 20;
	rows = 20;
	tablero =  new Game(width,height,cols,rows);
	tablero.InicializarNodos();
	tablero.AsignarNeighbors();
	inicio = tablero.grid[0][0];
	final_x = cols- 1;
	final_y = rows -1;
	final = tablero.grid[final_x][final_y];
	inicio.wall = false;
	final.wall = false;
	algoritmo = new Astar(inicio,final);
}

function draw() {
	//final_x=floor(map(mouseX,0,400,0,rows));
	//final_y=floor(map(mouseX,0,400,0,cols));
	background(100);
	//Si no cambia el final entonces sigue ejecutando
	algoritmo.Run();
	//else / sino ejecuta el nuevo final
	
	tablero.MostrarNodos();
	// a=floor(map(mouseX,0,400,0,rows));
	// b=floor(map(mouseX,0,400,0,cols));
	// console.log(`mouseX => ${a}`);
	// console.log(`mouseY => ${b}`);
	
}