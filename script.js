const table = document.getElementById('myTable');
	    table.addEventListener('click', (event) => {
        if ((event.target.closest('tr') || event.target.tagName === 'tr') && !(event.target.parentElement.id === 'header' || event.target.id === 'header')) {
            deleteRow(table, event.target);
        }
    });

function decision() {
	
	a = parseFloat(document.getElementById("inpA").value);
	b = parseFloat(document.getElementById("inpB").value);
	c = parseFloat(document.getElementById("inpC").value);


	let procRows = document.getElementById('myTable').rows.length;

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		document.getElementById("inpDec").value = "Параметры не являются числами! ";
		let str =  document.getElementById("inpA").value + ' x^2 + ' + document.getElementById("inpB").value +' x + '+ document.getElementById("inpC").value +' = 0';
		
		rez = "Параметры не являются числами! ";
		addRow(str, rez);
		return;
	}
	
	d = b * b - 4 * a * c;
	
	if (d < 0) {
		document.getElementById("inpDec").value = "Корней нет. ";
		let str =  document.getElementById("inpA").value + ' x ^2 + ' + document.getElementById("inpB").value +' x + '+ document.getElementById("inpC").value +' = 0';
		
		rez = "Корней нет. ";
		addRow(str, rez);
		return;
	}
	else if (d == 0) {
		x = (-b + Math.sqrt(d)) / (2 * a);
		document.getElementById("inpDec").value = "Корень: " + x.toFixed(3);
		rez = "Корень: " + x.toFixed(3);
		addRow(str, rez);
		return;
	}
	else {
		x1 = (-b + Math.sqrt(d)) / (2 * a);
		x2 = (-b - Math.sqrt(d)) / (2 * a);
		document.getElementById("inpDec").value = "Корни: " + x1.toFixed(3) + ", " + x2.toFixed(3);
		let str =  document.getElementById("inpA").value + ' x ^2 + ' + document.getElementById("inpB").value +' x + '+ document.getElementById("inpC").value +' = 0';
		
		rez = "Корни: " + x1.toFixed(3) + ", " + x2.toFixed(3);
		addRow(str, rez);
		return;
	
	}


}


function addRow(equations, result) {
	const table = document.getElementById('myTable');
	const trRef = table.insertRow();
	let val = document.getElementById('myTable').rows.length;	
	if (val%3==1) {
		const tdNumberRef = trRef.insertCell(0);
		tdNumberRef.innerText = table.querySelectorAll('tr')?.length - 1;

		const tdEquationRef = trRef.insertCell(1);
		tdEquationRef.innerText = equations;

		const tdResultRef = trRef.insertCell(2);
		tdResultRef.innerText = rez;
	}
	else if (val%3==2) {
		const tdNumberRef = trRef.insertCell(0);
		tdNumberRef.innerText = table.querySelectorAll('tr')?.length - 1;

		const tdEquationRef = trRef.insertCell(1);
		tdEquationRef.innerText = equations;

		const tdResultRef = trRef.insertCell(2);
		tdResultRef.innerText = rez;
	}
	else {
		const tdNumberRef = trRef.insertCell(0);
		tdNumberRef.innerText = table.querySelectorAll('tr')?.length - 1;

		const tdEquationRef = trRef.insertCell(1);
		tdEquationRef.innerText = equations;

		const tdResultRef = trRef.insertCell(2);
		tdResultRef.innerText = rez;
	}
	
	
	    if (table.classList.contains('_empty')) {
        table.classList.remove('_empty');
       
    }
}


function deleteRow(table, target) {

	
    
	if (target.closest('tr')) {
        target.parentElement.remove();
    } else if (target.tagName === 'tr') {
        target.remove();
    }
    const rows = table.querySelectorAll('tr');

    if (rows.length - 1) {
        rows.forEach((element, index) => {
            if (element.id !== 'header') {
                element.querySelector('td').innerText = index;
            }
        })
    } else {
        table.classList.add('_empty');
       
    }
}

