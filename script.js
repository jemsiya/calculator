//display number in text box
function displayNum(num){
    console.log(num);
    result.value+=num;
}
//clear text box
function clearBox(){
    result.value="";
}
//evaluate expression
function evaluateExpression(){
exp=result.value;
output=eval(exp);
result.value=output;
}
//removelastitem from tex box
function removeLast(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}