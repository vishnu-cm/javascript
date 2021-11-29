function addition(){

    var num1= parseFloat(document.getElementById("num1").value);
    var num2= parseFloat(document.getElementById("num2").value);
    var select=document.getElementById("select").value;
    var result;

    if(select=='addition'){result=num1+num2;}

    else if(select=='substract'){result=num1-num2;}

    else if(select=='division'){result=num1/num2;}

    else{result=num1*num2;}

    document.getElementById("result").innerHTML=result;
}

    
function clear_inputs(){
        inputs=document.getElementsByClassName('inputs')
        for(input of inputs){
        input.value=' ' 
    }};