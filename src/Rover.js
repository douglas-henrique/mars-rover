class Rover {
    constructor(x, y, orientation) {
        this.validatePosition(x, y, orientation);
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    validatePosition(x, y, orientation) {
        if (typeof x !== 'number' || typeof y !== 'number' || !['N', 'E', 'S', 'W'].includes(orientation)) {
            throw new Error('Invalid initial position or orientation');
        }
    }

    processInstructions(instructions) {
        const actions = {
            'L': () => this.turn('L'),
            'R': () => this.turn('R'),
            'M': () => this.moveForward()
        };

        for (let instruction of instructions) {
            if (!actions[instruction]) {
                throw new Error(`Invalid instruction: ${instruction}`);
            }
            actions[instruction]();
        }
    }

    turn(direction) {
        const turns = {
            'N': { 'L': 'W', 'R': 'E' },
            'E': { 'L': 'N', 'R': 'S' },
            'S': { 'L': 'E', 'R': 'W' },
            'W': { 'L': 'S', 'R': 'N' }
        };

        if (!turns[this.orientation]) {
            throw new Error(`Invalid orientation: ${this.orientation}`);
        }

        this.orientation = turns[this.orientation][direction];
    }

    moveForward() {
        const moves = {
            'N': () => this.y++,
            'E': () => this.x++,
            'S': () => this.y--,
            'W': () => this.x--
        };

        moves[this.orientation]();
    }

    getCurrentPosition() {
        return `${this.x} ${this.y} ${this.orientation}`;
    }
}

module.exports = Rover;
