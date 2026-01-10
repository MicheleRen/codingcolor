console.log("Inizio controllo esescuzione!")
let d = new Date();
console.log(d);
document.getElementById('saluto').innerHTML = d;

let colori = [];
let i = 0;

function elabora() {
	let a = document.getElementById("inNumber").value;
	console.log(a)
	let testo = document.getElementById("inText").value;
	console.log(testo)

	if (a >= 0 && a <= 255) {
		//inserire il numero dentro un array di colori
		colori.push(a);
		//visualizzare il numero dentro il div output
		document.getElementById("outText").innerHTML = "Hai inserito il numero" + a;
		console.log(colori);
		document.getElementById("outText").innerHTML += "<br> I colori sono" + colori;
		i++;
		if (i == 3) {
			document.getElementById("outText").innerHTML = testo;
			newColor = `rgb(${colori[0]},${colori[1]},${colori[2]})`;
			document.getElementById("outText").style = newColor;
			return;

		}
	}
	else {
		document.getElementById("error").innerHTML = "Il valore inserito non è valido";
	}
	

}

function annulla() {

	document.getElementById("inNumber").value = " ";
	document.getElementById("inText").value = " ";

}
