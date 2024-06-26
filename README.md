# Mars Rover Simulation

This project simulates multiple Mars rovers navigating on a plateau based on provided instructions.

## Getting Started

To get started with the Mars Rover simulation, follow these instructions.

### Prerequisites
-   Node.js installed on your machine.

### Installation
1.  Clone the repository:
    
   ```bash
    git clone https://github.com/douglas-henrique/mars-rover
    cd mars-rover
```    
2.  Install dependencies:
    
   ``` bash
    npm install` 
   ```
    

### Usage

You can run the Mars Rover simulation with the provided example or your own data.

#### Example Usage

Modify the `src/main` file to customize the plateau dimensions and rover data:

```javascript
let plateauWidth = 5;
let plateauHeight = 5;
```
### Running

Run the simulation using Node.js:
```bash
yarn run simulate
```

### Testing

This project uses Jest for unit testing. To run tests, use:
```bash
yarn test
```