export function roll(sides, dice, roll) {
        let results = [];

        for (let i = 0; i < roll; i++) {
                let temp = 0;
                for(let j = 0; j < dice; j++) {
                        temp += countResults(sides);
                }
                results[i] = temp;
        }

        var object = {
                sides: sides,
                dice: dice,
                roll: roll,
                results : results
        };

        return JSON.stringify(object);
}

function countResults(sides) {
        let sum = Math.floor(Math.random() * sides) + 1;
        return sum;
}
