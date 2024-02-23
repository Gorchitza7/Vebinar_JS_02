/** Напишите функцию, которая возвращает элементы на нечетных позициях в списке.
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFunc(arr) {
	const newArr = []

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			newArr.push(arr[i])
		}
	}
	return newArr
}

let res = myFunc(nums)
console.log(res);

// console.log(myFunc(nums));