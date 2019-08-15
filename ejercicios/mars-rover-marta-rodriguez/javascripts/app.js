// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

// Rover Grid
// ======================
var roverGrid = [
  [null, null, null, "OB", null, null, null, "OB", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "OB", null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "OB", null, null, null, null, null, null, null],
  [null, null, null, null, null, "OB", null, "OB", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["OB", null, null, null, null, null, null, null, null, null],
  [null, null, null, "OB", null, null, null, null, "OB", null],
  [null, null, null, null, null, null, "OB", null, null, null],
  [null, null, null, null, null, null, "OB", null, null, null]
  ];
  // ======================


var whereobstacles = [];

function obstacles(roverGrid) {
  for(var i = 0; i < roverGrid.length; i++){
    for(var j = 0; j < roverGrid[i].length; j++) {
      if(roverGrid[i][j] !== null) {
        whereobstacles.push("Hay obstáculos en: " +"x: " + i + " y: " + j);
      }
    }
  }
}
obstacles(roverGrid);
console.log(whereobstacles);

// Rover function turnLeft
function turnLeft(rover){
 console.log("turnLeft was called!");
 switch(rover.direction){
   case "N": 
   rover.direction = "W";
   break;
   case "W": 
   rover.direction = "S";
   break;
   case "S": 
   rover.direction = "E";
   break;
   case "E": 
   rover.direction = "N";
   break;
 }
 console.log("Vas en esta dirección: " + rover.direction);
}
// ======================
// Rover function turnRight
function turnRight(rover){
 console.log("turnRight was called!");
 switch(rover.direction){
   case "N": 
   rover.direction = "E";
   break;
   case "E": 
   rover.direction = "S";
   break;
   case "S": 
   rover.direction = "W";
   break;
   case "W": 
   rover.direction = "N";
   break;
}
console.log("Vas en esta dirección: " + rover.direction);
}
// ======================
// Rover function moveForward
function moveForward(rover){
 console.log("moveForward was called")
 switch(rover.direction){
   case "W":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.x--;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   
   case "N":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.y--;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   case "S":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.y++;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   case "E":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.x++;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
  
 }
 //console.log("Coordernadas Mars Rover" + "(" + rover.x + "," + rover.y +")");
}
// ======================
// Rover function moveBackward
function moveBackward(rover){
 console.log("moveBackward was called")
 switch(rover.direction){
   case "W":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.x++;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   
   case "N":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.y++;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   case "S":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.y--;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
   case "E":
   if((rover.x >= 0 && rover.x < 10) && (rover.y >= 0 && rover.y < 10)){
    rover.x--;
    rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
   }else{
     console.log("Estas fuera de los límites");
     break;
   }
  
 }
 //console.log("Coordernadas Mars Rover" + "(" + rover.x + "," + rover.y +")");
}
 // ======================
// Rover function commands
var commandsArray = ["f", "b", "r", "l"];

function commandsOrders(commandsArray){

 for( var i = 0; i < commandsArray.length; i++ ){

   var positionsRover = commandsArray[i];

   switch(positionsRover){
     case "f":
      moveForward(rover);
     break;
     case "b":
     moveBackward(rover);
     break;
     case "r":
     turnRight(rover);
     break;
     case "l":
     turnLeft(rover);
     break;
     default: console.log("Cuidado! Esta no es una orden válida para el rover. Elige entre: f,b,r,l");
   }
 }
}
console.log(commandsOrders("rffrfflfrff"));
console.log(rover.travelLog);
// ======================

