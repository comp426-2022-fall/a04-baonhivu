export function roll(sides, dice, rolls){
	let results = [];
	
	for (let i = 0; i < rolls; i++) {
		let temp = 0;
		for(let j = 0; j < dice; j++) {
			temp += choose(sides);
		}
		results[i] = temp;
	}
	var object = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	}
	return JSON.stringify(object);
}

function choose(sides){
	let randomNumber = Math.floor(Math.random() * sides) + 1;
    	return randomNumber;
  }
