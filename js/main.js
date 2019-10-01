function Addisjon() {
    var inputTall1 = document.getElementById("tall1").value;
    var inputTall2 = document.getElementById("tall2").value;

    var sum = inputTall1 * inputTall2;

    document.getElementById("pSum").innerHTML = sum;
}