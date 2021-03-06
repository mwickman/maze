var Maze = function(config){
  var self = this;
  /*
    Bits for open square sides:
    North = 1
    South = 2
    East  = 4
    West  = 8
  */
  // initializing the grid bitfield
  this.grid = new Array();
  this.height = config.height || 20;
  this.width = config.width || 20;

  function clearGrid() {
     for (var i=0; i<self.height; i++) {
         self.grid[i] = new Array();
     	for (var j=0; j < self.width; j++) {
     		self.grid[i][j]=0
     	}
     }
  }
  clearGrid();

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
  self.cardinal = cardinal;

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


  //algorithm
  function carve(cx, cy, grid) {
    var directions = ['n', 's', 'e', 'w'];
  	fisherYates (directions);

    for (var i=0; i<4; i++) {

      var nx = cx + dx[directions[i]];
      var ny = cy + dy[directions[i]];

  // this if statement is nasty because im trying to avoid outside libraries, so I have no 'between' method
      if ( ((ny >= 0) && (ny <= grid.length - 1)) && ((nx >= 0) && (nx <= grid[ny].length - 1)) && (grid[ny][nx] ==0) ) {
        grid[cy][cx] = grid[cy][cx] | cardinal[directions[i]];
        grid[ny][nx] = grid[ny][nx] | opposite[directions[i]];

        carve(nx, ny, grid);

      }

    } 
  }

  // generate the maze, do it!
  carve(0, 0, self.grid)

  //showing final bitfield grid
  console.log("::Final Grid::", self);
  for (var i=0; i< self.grid.length; i++) {
    console.log(self.grid[i]);
  }
}