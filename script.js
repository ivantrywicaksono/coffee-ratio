var r = document.getElementById("coffeeRatio")
var ratio = r.options[r.selectedIndex].value
var m = document.getElementById("material")
var material = m.options[m.selectedIndex].value
var amount = document.getElementById("amount").value
var resultCoffee = amount * ratio
var resultWater = amount / ratio
function coffeeRatio() {
    if (material == "coffee") {
        document.getElementById("result").innerHTML = "Put " + resultCoffee + " ml of water";
    } else {
        document.getElementById("result").innerHTML = "Put " + resultWater + "gr of coffee";
    }
}