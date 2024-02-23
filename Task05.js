/*
 Напишите функцию, которая вычисляет текущее итоговое значение списка.
*/

const nums = [1, 2, 3, 15, 43, 24]

function myFunc(arr){
	let sum = 0

	for(let i = 0; i < arr.length; i++){
		sum += arr[i]
	}
	return sum
}

console.log(myFunc(nums));