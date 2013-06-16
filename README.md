This is a small project to create a client-side maze generator with javascript. See a hosted version at www.mattwickman.com/maze.html.

###Maze.JS
This file generates a random maze in your console as a bitfield array of arrays. Here are the directions and their corresponding bits:

    N == 1 == 0001
    S == 2 == 0010
    E == 4 == 0100
    W == 8 == 1000
0 means the cell is closed on all sides, 6 would mean it is open on the east and south sides.

One can set the height and width of the maze and maze.js provides the following
variables:
    height - how many cells high the maze is
    width - how many cells wide the maze is
    grid - the maze bitfield itself, an array of arrays    

and functions:
    clearGrid() - sets all cells of the grid to 0
    carve() - generates the maze

The algorithm I use is called a 'recursive backtracking' maze algorithm. I've included a ruby example

###index.html
This file draws out the maze in your browser using canvas