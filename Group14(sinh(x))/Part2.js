function inputNumber(num){ 
    var ASCIICode = (num.which) ? num.which : num.keyCode
     if (ASCIICode > 48 && (ASCIICode > 57)){
       alert("Enter numbers only")
     }
   }

function Calculate(){   
    var n = document.getElementById("ninput").value;
    var x = document.getElementById("xinput").value;
    var equation = "";
    var toPrint = "";
    var counter = 1;
    var decimal = document.getElementById("decimal").value;
    //var value = math.derivative('x^2', 'x');
    //var value = math.derivative('cosh(x)', 'x');

    if(document.getElementById("ninput").value.match(/^[A-Za-z]+$/)){
        alert("ENTER NUMBERS ONLY!");
        location.reload()
    }
    if(document.getElementById("xinput").value.match(/^[A-Za-z]+$/)){
        alert("Enter Numbers Only!");
        location.reload()
    }
    if(document.getElementById("decimal").value.match(/^[A-Za-z]+$/)){
        alert("Enter Numbers Only!");
        location.reload()
    }

    var value = 0;
    for (let i = 0; i < n; i++){
        if (counter == 1){
            equation = " cosh("+ x + ")";
            toPrint += equation;
        }
        if (counter == 2){
            equation = " sinh("+ x + ")";
            toPrint = equation;
            counter = 0;
        }
        
        counter++;
    }
    

    var sum = 0;
    var counter2 = 1;
    for (let j = 0; j < n; j++){
        var iteration = 0;
        if (counter2 == 1){
            var toSum = (math.cosh(x)/math.factorial(iteration));
            sum += toSum;
        }
        if (counter2 == 2){
            var toSum = (math.sinh(x)/math.factorial(iteration));
            sum += toSum;
            counter2 = 0;
        }
        counter2++;
        iteration++;
    }

    //Output
    document.getElementById("output").innerHTML = "Sinh(x) = " + sum;
    document.getElementById("outputWithDec").innerHTML = decimal + " decimal places";

    //Rounding
    document.getElementById("rounding").innerHTML = "Rounding = " + math.round(sum, decimal);

    var roundTrueVal = sum;
    var roundAbsVal = math.round(sum, decimal);

    document.getElementById("roundError").innerHTML = "Error: " + Math.abs(roundTrueVal - roundAbsVal);
    document.getElementById("roundRelative").innerHTML = "Relative Error: " + Math.abs((roundTrueVal - roundAbsVal) / roundTrueVal) * 100;

    //Chopping
    document.getElementById("chopping").innerHTML = "Chopping = " + Math.trunc(sum*Math.pow(10, decimal))/Math.pow(10, decimal);

    var chopTrueVal = sum;
    var chopAbsVal = Math.trunc(sum*Math.pow(10, decimal))/Math.pow(10, decimal);

    document.getElementById("chopError").innerHTML = "Error: " + Math.abs(chopTrueVal - chopAbsVal);
    document.getElementById("chopRelative").innerHTML = "Relative Error: " + Math.abs((chopTrueVal - chopAbsVal) / chopTrueVal) * 100;

}
