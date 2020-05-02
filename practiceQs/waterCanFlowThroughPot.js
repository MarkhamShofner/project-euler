
const solution = (pot) => {
    // pretty similar to yesterday's maze but whatever
    // let's use recursion again
    let waterCanFlowThroughPot = false;

    // start at all valid starting locations on the top row
    // begin recursive traversal at each position
        // is a spot valid to travel to
        // visit node
    // do any find the last row

    const startingPoints = generateStartingPoints(pot);
    const startingPointsCanReachEnd = startingPoints.map((startingPoint) => {
      let branchPot = pot;
      let startingRow = startingPoint[0];
      let startingCol = startingPoint[1];
      branchPot[startingRow][startingCol] = "*";
      return recursiveTraversalOfSpaces(pot, startingRow, startingCol);
    });

    if (startingPointsCanReachEnd.includes(true)) {
      waterCanFlowThroughPot = true;
    }

    return waterCanFlowThroughPot;
};

const recursiveTraversalOfSpaces = (pot, row, col) => {
    // base case -- if we have reached the bottom of the pot
    if (row+1 === pot.length) {
        return true;
    } else {
        // visit north
        if (canTravelToSpace(pot, row-1, col)) {
            pot = potWithVisitedSpace(pot, row-1, col);
            return recursiveTraversalOfSpaces(pot, row-1, col);
        }
        // visit west
        if (canTravelToSpace(pot, row, col-1)) {
            pot = potWithVisitedSpace(pot, row, col-1);
            return recursiveTraversalOfSpaces(pot, row, col-1);
        }
        // visit south
        if (canTravelToSpace(pot, row+1, col)) {
            pot = potWithVisitedSpace(pot, row+1, col);
            return recursiveTraversalOfSpaces(pot, row+1, col);
        }
        // visit east
        if (canTravelToSpace(pot, row, col+1)) {
            pot = potWithVisitedSpace(pot, row, col+1);
            return recursiveTraversalOfSpaces(pot, row, col+1);
        }
        return false;
    }

}

const generateStartingPoints = (pot) => {
    let startingPoints = [];
    // find all 0s along the top row
    for (let i =0; i<pot[0].length; i++) {
        if (pot[0][i] === 0) {
            startingPoints.push([0, i]);
        }
    }
    return startingPoints;
}

const canTravelToSpace = (pot, row, column) => {
    let canTravelToSpace = false;

    if (row < 0 || column < 0 || pot.length < row+1 || pot[0] < column+1) { // avoid out of bounds calls
    } else if ((pot[row][column]) === 0) {
        canTravelToSpace = true;
    };

    return canTravelToSpace;
}

const potWithVisitedSpace = (pot, row, column) => {
    pot[row][column] = "*";
    return pot;
}

const pot =[
  [0,1,0,1,1],
  [1,0,0,1,1],
  [1,0,0,1,1],
  [1,0,0,1,1],
  [1,1,1,1,1],
];

console.log(solution(pot));
