document.addEventListener('DOMContentLoaded', function (event) {

	console.log('The DOM is ready!!!');

	var numbers = document.getElementsByClassName("number")
	var operators = document.getElementsByClassName("operator")

	var num1 = 	(function getNumbers() {
					for (i = 0; i < numbers.length; i++) {
						numbers[i].addEventListener('click', function (event){
							return event.target.value;
						})
					}
				})



	function getOperators() {
		for (i = 0; i < operators.length; i++) {
			operators[i].addEventListener('click', function (event){
				console.log(event.target.value);
			})
		}

	}

getOperators();


	// number.addEventListener('click', function (event) {
	// 	console.log('help me, Ive been clicked!')
	// })


});