
const solution = (maze, startRow, startCol, destRow, destCol) => {
    // recursive approach where the node can move up, down, left, right
    // start at the end node and recursivesly move back to the first node
    // return true when the start node is found

    let pathExists; // = false;

    maze[destRow][destCol] = "*";
    pathExists = recursiveTraversalOfSpaces(maze, startRow, startCol, destRow, destCol);

    return pathExists;
};

const canTravelToSpace = (maze, row, column) => {
    let canTravelToSpace = false;

    if (row < 0 || column < 0 || maze.length < row+1 || maze[0] < column+1) { // avoid out of bounds calls
    } else if ((maze[row][column]) === 0) {
        canTravelToSpace = true;
    };

    return canTravelToSpace;
}

const mazeWithVisitedSpace = (maze, row, column) => {
    maze[row][column] = "*";
    return maze;
}

const recursiveTraversalOfSpaces = (maze, startRow, startCol, row, col) => {
    // base case -- if current node = start node, return true
    if ((startRow === row) && (startCol === col)) {
        return true;
    } else {
        // visit north
        if (canTravelToSpace(maze, row-1, col)) {
            maze = mazeWithVisitedSpace(maze, row-1, col);
            return recursiveTraversalOfSpaces(maze, startRow, startCol, row-1, col);
        }
        // visit west
        if (canTravelToSpace(maze, row, col-1)) {
            maze = mazeWithVisitedSpace(maze, row, col-1);
            return recursiveTraversalOfSpaces(maze, startRow, startCol, row, col-1);
        }
        // visit south
        if (canTravelToSpace(maze, row+1, col)) {
            maze = mazeWithVisitedSpace(maze, row+1, col);
            return recursiveTraversalOfSpaces(maze, startRow, startCol, row+1, col);
        }
        // visit east
        if (canTravelToSpace(maze, row, col+1)) {
            maze = mazeWithVisitedSpace(maze, row, col+1);
            return recursiveTraversalOfSpaces(maze, startRow, startCol, row, col+1);
        }
        return false;
    }

}


const maze =[[0,1],[1,0]];
const sR = 0;
const sC = 0;
const dR = 0;
const dC = 1;
 // startRow: 0
// startCol: 0
// destRow: 1
// destCol: 1


// maze: [[0,1],[1,0]]
// startRow: 0
// startCol: 0
// destRow: 0
// destCol: 1

// const maze = [
//   [0,0,0],
//   [0,0,0],
//   [0,1,0]
// ]

console.log(solution(maze, sR, sC, dR, dC));
