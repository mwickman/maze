var width = 15;
var height = 15;
/*
  Bits for open square sides:
  North = 1
  South = 2
  East  = 4
  West  = 8
*/
// initializing the grid bitfield
var grid = new Array();
for (var i=0; i<height; i++) {
    grid[i] = new Array();
	for (var j=0; j < width; j++) {
		grid[i][j]=0
	}
}
//testing grid
/*console.log(grid.length);
console.log(grid[0]);
console.log(grid[3]);
*/
// array randomizer
function fisherYates ( myArray ) {
  var i = myArray.length, j, tempi, tempj;
  if ( i === 0 ) return false;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     tempi = myArray[i];
     tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

// constants for algorithm
var cardinal = {
  n: 1,
  s: 2,
  e: 4,
  w: 8,
}

var dx = {
  e: 1,
  w: -1,
  n: 0,
  s: 0
}

var dy = {
  e: 0,
  w: 0,
  n: -1,
  s: 1
}
var opposite = {
  e: 8,
  w: 4,
  n: 2,
  s: 1
}

var nx =0;
var ny = 0;

//algorithm
function carve(cx, cy, grid) {
  var directions = ['n', 's', 'e', 'w'];
	fisherYates (directions);
  //console.log(directions);

  for (var i=0; i<4; i++) {
//    console.log(dx[directions[i]]);

    nx = cx + dx[directions[i]];
    //console.log(nx);
    ny = cy + dy[directions[i]];
    //console.log(grid[cx][cy]);

    if ( ((ny >= 0) && (ny <= grid.length - 1)) && ((nx >= 0) && (nx <= grid[ny].length - 1)) && (grid[nx][ny] ==0) ) {
      grid[cx][cy] = grid[cx][cy] + cardinal[directions[i]];
      grid[ny][nx] = grid[ny][nx] + opposite[directions[i]];
      //console.log("GOT HERE");

      carve(nx, ny, grid);

    }
  } 
}

// do it!
carve(width-1, height-1, grid)

//showing final bitfield grid
console.log("::Final Grid::");
for (var i=0; i< grid.length; i++) {
  console.log(grid[i]);
}
