function Regning() {
    var selectedRegning = document.getElementById("tallRegning").value;

    var inputTall1 = parseInt(document.getElementById("tall1").value);
    var inputTall2 = parseInt(document.getElementById("tall2").value);

    if (selectedRegning == "+") {
        document.getElementById("pSum").innerHTML = inputTall1 + inputTall2;
    } else if (selectedRegning == "-") {
        document.getElementById("pSum").innerHTML = inputTall1 - inputTall2;
    } else if (selectedRegning == "/") {
        document.getElementById("pSum").innerHTML = inputTall1 / inputTall2;
    } else if (selectedRegning == "*") {
        document.getElementById("pSum").innerHTML = inputTall1 * inputTall2;
    } else if (selectedRegning == "%") {
        document.getElementById("pSum").innerHTML = inputTall1 % inputTall2;
    }

}