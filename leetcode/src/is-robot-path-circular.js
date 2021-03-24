export default function isCircular(instructions){
    var x = 0
    var y = 0; 
    let instruction = [...instructions];
    let direction = "north";

    for (let i = 0; i < instruction.length; i++) {

        if (direction === "north") {
            if (instruction[i] === 'G') {
                y++;
            } else if (instruction[i] === 'L') {
                direction = "west";
            } else {
                direction = "east";
            } 
        } else if (direction === "east") {
            if (instruction[i] === 'G') {
                x++;
            } else if (instruction[i] === 'L') {
                direction = "north";
            } else {
                direction = "south";
            } 
        } else if (direction === "south") {
            if (instruction[i] === 'G') {
                y--;
            } else if (instruction[i] === 'L') {
                direction = "east";
            } else {
                direction = "west";
            } 
        } else {
            if (instruction[i] === 'G') {
                x--;
            } else if (instruction[i] === 'L') {
                direction = "south";
            } else{
                direction = "north";
            }
        }
    }

    if (direction === "north" && (x === 0 && y === 0)){
        return "YES";
    } else {
        return "NO";
    }
}

// console.log(isCircular('GGLRLRG'))