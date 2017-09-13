document.addEventListener('DOMContentLoaded', function (event) {

	console.log('The DOM is ready!!!');

	var numbers = document.getElementsByClassName("number");
	var operators = document.getElementsByClassName("operator");

	var num1 = 0;
	var operator;

	function getNumbers() {
		for (i = 0; i < numbers.length; i++) {
			numbers[i].addEventListener('click', function (event) {
				if (operator === undefined) {
					num1 = event.target.value;
					console.log(num1);
				}	
			})
		}
	}

getNumbers();
getOperators();

	function getOperators() {
		for (i = 0; i < operators.length; i++) {
			operators[i].addEventListener('click', function (event){
				if (!isNaN(num1)){
					operator = event.target.value;
					console.log(operator);
				}
			})
			
		}

	}

})
	// number.addEventListener('click', function (event) {
	// 	console.log('help me, Ive been clicked!')
	// })
