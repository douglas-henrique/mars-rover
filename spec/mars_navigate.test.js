const navigateRovers = require('../src/main');

describe('navigateRovers Function', () => {
    it('should deploy rovers and return final positions', () => {
        const plateauWidth = 5;
        const plateauHeight = 5;
        const roverData = [
            { position: [1, 2, 'N'], instructions: 'LMLMLMLMM' },
            { position: [3, 3, 'E'], instructions: 'MMRMMRMRRM' }
        ];

        const deployedRovers = navigateRovers(plateauWidth, plateauHeight, roverData);

        expect(deployedRovers).toHaveLength(2);

        // Check final positions
        expect(deployedRovers[0].getCurrentPosition()).toBe('1 3 N');
        expect(deployedRovers[1].getCurrentPosition()).toBe('5 1 E');
    });

    it('should handle errors for invalid rover data', () => {
        const plateauWidth = 5;
        const plateauHeight = 5;
        const roverData = [
            { position: [1, 2, 'N'], instructions: 'LMLMXLMLMM' }, // Invalid instruction
            { position: [6, 3, 'E'], instructions: 'MMRMMRMRRM' }   // Out of bounds
        ];

        // Ensure errors are logged and no rover objects are returned
        const spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
        const deployedRovers = navigateRovers(plateauWidth, plateauHeight, roverData);

        expect(deployedRovers).toHaveLength(1); // Only one rover should be deployed successfully

        spyConsoleError.mockRestore();
    });
});
