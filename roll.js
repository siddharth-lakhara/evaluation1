function roll(pins){
	let retArray = [];
	let loop = 0; // number of times the loop run should not exceed 10

	if (validate(pins)){ // validate input
		for (let i=0; loop<10; i = i+2, loop++){
			if (pins[i] + pins[i+1] > 10){  // strike
				retArray.push(10 + pins[i+1] + pins[i+2]);
				i -= 1; // so that one frame is not missed
			}

			else if (pins[i] + pins[i+1] === 10){ // spare
				retArray.push(10 + pins[i+2]);
			}

			else {
				retArray.push(pins[i] + pins[i+1]);
			}
		}
	}

	let totalScore = retArray.reduce((prev, curr)=>prev+curr,0);
	return totalScore;
}

function validate(input){
	if (input.length % 2 === 0){
		return true;
	}

	let v1 = false; // validation 1 for number of strikes
	let v2 = false; // validation 2 for spare at the end

	{
		let arr10 = input.reduce((prev, curr)=> {
			if (curr === 10)
				prev++;
		}, 0);

		if (arr10 % 2 != 0)
			v1 = true;
	}

	{
		let len = input.length;

		if (input[len-1] + input[len-2] === 10) // spare at end is present
			v2 = true;
	}

	return v1 || v2;
}

module.exports = roll;
