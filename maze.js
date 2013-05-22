var width = 10;
var height = 10;
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
console.log(grid.length);
console.log(grid[0]);
console.log(grid[3]);

// randomizer
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
var N = 1;
var S = 2;
var E = 4;
var W = 8;
var dx = {
  E: 1,
  W: -1,
  N: 0,
  S: 0
}
var dy = {
  E: 0,
  W: 0,
  N: -1,
  S: 1
}
var opposite = {
  E: W,
  W: E,
  N: S,
  S: N
}

//algorithm
function carve(cx, cy, grid) {
	fisherYates (var directions = ["N", "S", "E", "W"];)
  conosle.log(directions[0]);

  for (var i=0; i<4; i++) {
    var nx = cx + dx[directions[i]];
    var ny = cy + dy[directions[i]];
  } 
}