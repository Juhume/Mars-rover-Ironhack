// Rover Object Goes Here
// ======================
const rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

var grid = [
  [null, null, null, null, null, 'X', null, null, null, null],
  [null, null, null, 'X', null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, 'X', null, null, null, null, null, null, 'X', null],
  [null, null, null, null, null, null, 'X', null, null, null],
  [null, null, null, 'X', null, null, null, null, null, null],
  ['X', null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, 'X', null, null, null, null],
  [null, null, 'X', null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, 'X'],
  [null, null, null, null, null, null, null, null, null, null],
];
// ======================
function turnLeft(rover) {

  console.log('Rover is turning to the left');
  console.log('Current position: ' + '[' + rover.x + ', ' + rover.y + ']');
  console.log('Current direction: ' + rover.direction);
  

  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
  }

  console.log('Rover is now facing ' + rover.direction);
}

function turnRight(rover) {

console.log('Rover is turning to the right');
console.log('Current position: ' + '[' + rover.x + ', ' + rover.y + ']');
console.log('Current direction: ' + rover.direction);
  

  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
  }

  console.log('Rover is now facing ' + rover.direction);
}

function moveForwards(rover) {
  console.log('Current direction: ' + rover.direction);
  console.log('Current position: ' + '[' + rover.x + ', ' + rover.y + ']');

  var x = rover.x;
  var y = rover.y;
  switch (rover.direction) {
    case 'N':
      y -= 1;
      break;
    case 'S':
      y += 1;
      break;
    case 'E':
      x += 1;
      break;
    case 'W':
      x -= 1;
  }

  if (y >= 0 && y <= 9 && x >= 0 && x <= 9) {

    if (grid[x][y] !== 'X') {
      console.log('Mars Rover is located inside the grid, therefore is moving forward');
      rover.x = x;
      rover.y = y;
    } else { console.log('Mars Rover can\'t move forward due to an obstacle'); }

  } else { console.log('Mars Rover can\'t operate outside of the grid'); }

  console.log('Position after command: ' + '[' + rover.x + ', ' + rover.y + ']');
  saveCoordinates(rover.x, rover.y);
}

function moveBackwards(rover) {
  console.log('Current direction: ' + rover.direction);
  console.log('Current position: ' + '[' + rover.x + ', ' + rover.y + ']');

  var x = rover.x;
  var y = rover.y;
  switch (rover.direction) {
    case 'N':
      y += 1;
      break;
    case 'S':
      y -= 1;
      break;
    case 'E':
      x -= 1;
      break;
    case 'W':
      x += 1;
  }

  if (y >= 0 && y <=9 && x >= 0 && x <= 9) {

    if (grid[x][y] !=='X') {
      console.log('Mars Rover within the grid, moving backwards');
      rover.x = x;
      rover.y = y;
    } else { console.log('Mars Rover can\'t move backwards due to an obstacle');}

  } else { console.log('Mars Rover can\`t operate outside of the grid'); }

  console.log('Position after command: ' + '[' + rover.x + ', ' + rover.y + ']');
  saveCoordinates(rover.x, rover.y);
}

var commands = [ 
/*insert in the space below the directions for Mars Rover

KEEP IN MIND:
'r' = For move to the right
'l' = For move to the left
'f' = For move forward
'b' = For move backward*/
  'r', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'f', 'f', 'f', 'f', 

];

function roverCommands(commands) {

  console.log('Commands: ' + commands + ' [' + commands.length + ']');
  console.log('Pos X: [' + rover.x + ']' + '\n' + 'Pos Y: [' + rover.y + ']' + '\n' + '\n');

  for (i = 0; i <= commands.length - 1; i++) {
    switch (commands[i]) {
      case 'f':
        moveForwards(rover);
        break;
      case 'b':
        moveBackwards(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default:
        console.log('Command not recognized, only allowed: "f", "b", "r", "l"');
    }
    console.log('Command entered' + '[' + i + ']' + ': "' + commands[i] + '"');
    console.log('\n');
  }
}

function saveCoordinates(x, y) {
  rover.travelLog.push([x], [y]);
}

roverCommands(commands);

console.log('Actual direction: ' + rover.direction);
console.log('Actual position: ' + '[' + rover.x + ', ' + rover.y + ']');
console.log('Position log: ' + rover.travelLog);