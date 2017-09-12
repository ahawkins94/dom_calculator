document.addEventListener('DOMContentLoaded', function (event) {

	console.log('The DOM is ready!!!');

	var number = document.getElementsByClassName('number');
	var operator = document.getElementsByClassName('operator')

	console.log(number)

	number.addEventListener('click', function (event) {
		console.log('help me, Ive been clicked!')
	})


});