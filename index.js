const calculate= document.getElementById("calculate")

function calculateTip() {
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;
    let totaldisp = document.getElementById("total");
    let each = document.getElementById("each");

	console.log(service);
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	if (persons === '1')
		each.style.display = "none";
	else
		each.style.display = "inline-block";

	let total = (amount * service) / persons;
	total = total.toFixed(2);

    document.querySelector('.tip').style.display = 'block';
    totaldisp.innerHTML = total;
}

calculate.addEventListener('click', calculateTip);
