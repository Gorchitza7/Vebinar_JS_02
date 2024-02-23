// Конструкция else if
let myVar = 1

if(myVar == 2) {
	console.log('We are two');
}
else if(myVar == 3) {
	console.log('We are three');
}
else{
	console.log(`We are ${myVar}`);
}

// ------------------------------
// Конструкция case
let myVar1 = 3

switch (myVar1) {
	case 1: {
		console.log('We are one');
		break
	}
	case 2: {
	console.log('We are two');
	break
	}
	case 3: {
		console.log(`We are ${myVar1}`);
	}
	default: 
	console.log('Unknown number');
}

// --------------------------------
// Циклы:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i = 0; i < nums.length; i++){
	console.log(nums[i]);
}
// ---------------------------------
