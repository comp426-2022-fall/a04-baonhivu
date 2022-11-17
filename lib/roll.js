function countResults(side, dice) {
        var sum = 0;
        for (let i = 0; i < dice; i++) {
                sum += Math.floor(Math.random() * side) + 1;
        }
         return sum;
}

export function roll(sides, dice, roll) {
        var results = [];

        for (let i = 0; i < roll; i++) {
                results.push(countResults(sides, dice))
        }

        var object = {
                sides: sides,
                dice: dice,
                roll: roll,
                results : results
        };

        return JSON.stringify(object);
}
