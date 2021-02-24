//Ex.1

// let number = prompt('What number..?')
// if (number > 0) {
// 	alert('1');
// } else if (number < 0) {
// 	alert ('-1');
// } else if (number == 0) {
// 	alert (0);
// } else {
// 	alert ('Error');
// }


// Ex.2

// let age = prompt('How old are you?')
// if (!(age > 14 && age <= 90)) {
// 	alert ('Nu se afla in diapazonul dat!');
// }


// let age = prompt('Enter your age');
// if (age < 14 && age <= 90) {
// 	alert ('Numarul nu se afla in diapazonul dat!');
// } else {
// 	alert('Se afla in diapazonul dat!');
// }


// Ex.3

// const validUsername = 'mpop';
// const validPassword = '12345';

// const username = prompt('Enter your username');

// if (username == validUsername) {
// 	const password = prompt('Enter your password');
	 	
//  	if (password === validPassword) {
//  		alert('Hello');
//  	} else {
//  		alert ('Incorrect password');
//  	}
// } else if (!username) {
// 	alert('Error')
// } else {
// 	alert ('Incorrect username');
// } 

 

// function sum(x, y) {
// 	return 2 * x + y;
// }

// let result = sum(3, 2);
// alert(result);


// const calcul = (x, y) => {
// 	return 2 * x + y;
// }
	
// alert(calcul(2,3));0


// console.log(
//   [2,5,7,1].reduce((a, b) => a + b, 0)
// )



// let numbers = [2,5,7,1];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// }

// alert(sum);



// const grades = [8,7,10,9,9];
// const sum = grades.reduce((previous, current) => current += previous);
// const avgGrade = sum / grades.length;

// alert(avgGrade);


const average = (grades) => {
	let sum = 0;
	for (let i = 0; i < grades.length; i++) {
		sum += grades[i];
	}
	if (grades.length == 0) {
		return "Error dividing by 0";
	}

	return sum/grades.length;
}

console.log(average([7,8,9,10]));


// let grades = [8,7,10,9];

// if (grades[i] > 5) {
// 	?
// }






