const Rover = require('./Rover');

//dispatch rovers navigation
function navigateRovers(plateauWidth, plateauHeight, roverData) {
    let rovers = [];

    roverData.forEach(data => {
        try {
            let [x, y, orientation] = data.position;
            let instructions = data.instructions;

            let rover = new Rover(x, y, orientation);
            rover.processInstructions(instructions);

            rover.x = Math.min(Math.max(rover.x, 0), plateauWidth);
            rover.y = Math.min(Math.max(rover.y, 0), plateauHeight);

            rovers.push(rover);

        } catch (error) {
            console.error(`Error navigating rover with position ${data.position} and instructions ${data.instructions}: ${error.message}`);
        }
    });

    return rovers;
}

// configuration starts here
let plateauWidth = 5;
let plateauHeight = 5;
let roverData = [
    { position: [1, 2, 'N'], instructions: 'LMLMLMLMM' },
    { position: [3, 3, 'E'], instructions: 'MRRMMRMRRM' }, // you can add rover here
];

const finalNavigationRovers = navigateRovers(plateauWidth, plateauHeight, roverData);

finalNavigationRovers.forEach((rover, index) => { // this will log deployed rovers
    console.log(`Rover ${index + 1}: Final Position - ${rover.getCurrentPosition()}`);
});


module.exports = navigateRovers;
