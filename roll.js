function roll(pins){
	let retArray = [];
	for (let i=0; i<pins.length && i<=20; i = i+2){
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
	console.log(retArray);
	return totalScore;
	//return retArray;
}
// to be deleted
// roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
// console.log(roll([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
// ends here
module.exports = roll;
