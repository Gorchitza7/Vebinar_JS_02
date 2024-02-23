/**
 * Напишите функцию, которая проверяет, является ли строка палиндромом.
 */

const str1 = 'hello'
const str2 = 'lol'

function myFunc(arg){
	let reversed = ''
	
	for(let i = arg.length - 1; i >= 0; i--){
		reversed += arg[i]
	}
	
	// if(reversed === arg)
	// 	return true
	// else
	// 	return false

	return reversed === arg
}

console.log(myFunc(str2)); // true
console.log(myFunc(str1)); // false