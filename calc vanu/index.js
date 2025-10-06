function Solve(val) {
    document.getElementById("res").value += val;
}

function Result() {
    let num1 = document.getElementById("res").value;
    let num2 = eval(num1);
    document.getElementById("res").value = num2;
}

function Clear() {
    document.getElementById("res").value = "";
}

function Back() {
    let value = document.getElementById("res").value;
    document.getElementById("res").value = value.substr(0, value.length - 1);
}

// ✅ New Square Root Function
function SquareRoot() {
    let res = document.getElementById("res");
    let value = parseFloat(res.value);
    if (!isNaN(value)) {
        res.value = Math.sqrt(value);
    } else {
        res.value = "Error";
    }
}
