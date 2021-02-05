function calcTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfpeople = document.getElementById("peopleamt").value;

    //validação

    if (billAmt === "" || serviceQual == 0){
        alert ("Por favor, insira    os valores!");
        return;
    }

    if (numOfpeople === "" || numOfpeople <= 1) {
                numOfpeople = 1;
                document.getElementById("each").style.display = "none";      
    } else {
        document.getElementById("each").style.display = "inline";
    }

    var total = (billAmt * serviceQual) / numOfpeople;
    total = Math.round(total*100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

