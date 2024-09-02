alert("ALERT")

document.write("SHREYASH")

let a = "THIS IS CONSOLE.LOG"

console.log(a + "\n");

b = prompt("ENTER SURNAME");

document.write("\n" + " SHREYASH " + b);
document.getElementById("greetName").innerHTML = '';

confirm("IS IT RIGHT?")

// GET PUT DATA
document.getElementsByClassName("c")[0].innerHTML = "CLASS" ;
document.getElementById("i").innerHTML = "ID" ;

// Function

function greet () 
{

    let name = document.getElementsByClassName("name")[0].value
    document.getElementById("greetName").innerHTML = name;

}

//cal

function cal() 
{
    var op1 = document.getElementById("num1").value
    var op2 = document.getElementById("num2").value
    var ope = document.getElementById("sel")

    if (ope == "+")
    {
        var result = parseInt(op1) + parseInt(op2)
    }
    if (ope == "-")
    {
        var result = parseInt(op1) - parseInt(op2)
    }
    if (ope == "/")
    {
        var result = parseInt(op1) / parseInt(op2)
    }
    if (ope == "*")
    {
        var result = parseInt(op1) * parseInt(op2)
    }
    document.getElementById("res").value = result;
    document.write(result);
}

//DATA USING PROMPT 
function call() 
{

    var call = prompt("WHOM TO CALL");

    document.write(call);

}




