document.addEventListener('DOMContentLoaded', function (event) {

	console.log('The DOM is ready!!!');

	var number = document.getElementsByClassName("number")


	function getNumbers() {
		for (i = 0; i < number.length; i++) {
			number[i].addEventListener('click', function (event){
				console.log('clicked')
			})
		}

	}
getNumbers();

	console.log(number)

	// number.addEventListener('click', function (event) {
	// 	console.log('help me, Ive been clicked!')
	// })


});