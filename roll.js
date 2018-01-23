function roll(pins){
	let retArray = [];
	let loop = 0;
	for (let i=0; i<pins.length && loop<10; i = i+2, loop++){
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
	let totalScore = retArray.reduce((prev, curr)=>prev+curr,0);
	return totalScore;
}

module.exports = roll;
