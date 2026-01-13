console.log("Inizio controllo esecuzione");

let d = new Date();
console.log(d);
document.getElementById('saluto').innerHTML = "Oggi è " + d.getDate() + "/" + (d.getMonth()+1);

function elabora() {
    let numero = document.getElementById('inNumber').value;
    let testo = document.getElementById('inText').value;


    if (testo == "") {
        document.getElementById('error').innerHTML = "Inserisci un testo!";
        return;
    }

    let parti = numero.split(" ");
    if (parti.length != 3) {
        document.getElementById('error').innerHTML = "Inserisci tre numeri separati da spazi!";
        return;
    }

    let r = parseInt(parti[0]);
    let g = parseInt(parti[1]);
    let b = parseInt(parti[2]);

    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        document.getElementById('error').innerHTML = "Ogni numero deve essere tra 0 e 255!";
        return;
    }

    document.getElementById('error').innerHTML = "";

    let out = document.getElementById('outText');
    out.innerHTML = testo;
    out.style.color = "rgb(" + r + "," + g + "," + b + ")";

}

function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById('inText').value = "";
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("outText").style.color = "green";
    document.getElementById("error").innerHTML = "";
}
