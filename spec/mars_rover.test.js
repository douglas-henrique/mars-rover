const Rover = require('../src/Rover');

describe('Rover class testing', () => {
    describe('Initialization', () => {
        it('should create a rover object with valid initial position and orientation', () => {
            const rover = new Rover(1, 2, 'N');
            expect(rover).toBeInstanceOf(Rover);
        });

        it('should throw an error for invalid initial position or orientation', () => {
            expect(() => new Rover('1', 2, 'N')).toThrow('Invalid initial position or orientation');
            expect(() => new Rover(1, 2, 'X')).toThrow('Invalid initial position or orientation');
        });
    });

    describe('Movement and Turning', () => {
        let rover;

        beforeEach(() => {
            rover = new Rover(1, 2, 'N'); // rover instance before start
        });

        it('should correctly turn left', () => {
            rover.turn('L');
            expect(rover.orientation).toBe('W');
        });

        it('should correctly turn right', () => {
            rover.turn('R');
            expect(rover.orientation).toBe('E');
        });

        it('should move forward correctly', () => {
            rover.moveForward();
            expect(rover.y).toBe(3); // Moving north increases y-coordinate
        });

        it('should throw an error for invalid move instruction', () => {
            expect(() => rover.processInstructions(['X'])).toThrow('Invalid instruction: X');
        }); 
      
    });

    describe('Position Reporting', () => {
        it('should report current position correctly', () => {
            const rover = new Rover(1, 2, 'N');
            expect(rover.getCurrentPosition()).toBe('1 2 N');
        });
    });
});
