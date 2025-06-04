let amnt = document.getElementById('amount');

let from = document.getElementById('from');
let to = document.getElementById('to');

let convert = document.getElementById('convert');
let result = document.getElementById('result');

convert.addEventListener('click', () => {
	let amount = parseInt(amnt.value)	
	fetch(`https://v6.exchangerate-api.com/v6/2a7c0274a61d3463eb42fb6a/pair/${from.value}/${to.value}/${amount}`)
	.then(response => {
		if (!response.ok){
			result.textContent = "Network response was not ok"
			throw new Error("Network reponse was not ok")
		}
		return response.json();
	})

	.then(data => {
		overallresult = data.conversion_result
		result.textContent = overallresult.toFixed(2) + " " + to.value
	})

	.catch(error => {
  		result.textContent = error.message;
	});
})