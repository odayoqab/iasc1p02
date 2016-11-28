var numberOne;
var numberTwo;
var numArray = ['zero','one','two','three','four','five','six','seven',
'eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen',
'sixteen','seventeen','eighteen','nineteen','twenty','twenty-one',
'twenty-two','twenty-three','twenty-four','twenty-five'];

function change(){
  numberOne = (document.getElementById("number1").value).toLowerCase();
  numberTwo = (document.getElementById("number2").value).toLowerCase();

  if(numberOne == "five"){
    numberOne = 5;
  }
  else if (numberOne == "four") {
    numberOne = 4;
  }
  else if (numberOne == "three") {
    numberOne = 3;
  }
  else if (numberOne == "two") {
    numberOne = 2;
  }
  else if (numberOne == "one") {
    numberOne = 1;
  }
  if(numberTwo == "five"){
    numberTwo = 5;
  }
  else if (numberTwo == "four") {
    numberTwo = 4;
  }
  else if (numberTwo == "three") {
    numberTwo = 3;
  }
  else if (numberTwo == "two") {
    numberTwo = 2;
  }
  else if (numberTwo == "one") {
    numberTwo = 1;
  }
}
  function add(){
    change();
    var total = numberOne + numberTwo;
    document.getElementById("output").innerHTML=(numArray[numberOne]+" plus "+numArray[numberTwo]+" is equal to "+numArray[total]);
  }
  function subtract(){
    change();
    var total = numberOne - numberTwo;
document.getElementById("output").innerHTML=(numArray[numberOne]+" subtract "+numArray[numberTwo]+" is equal to "+numArray[total]);  }
  function multiply(){
    change();
    var total = numberOne * numberTwo;
document.getElementById("output").innerHTML=(numArray[numberOne]+" multiplied by "+numArray[numberTwo]+" is equal to "+numArray[total]);  }
  function divide(){
    change();
    var total =Math.floor(numberOne / numberTwo);
document.getElementById("output").innerHTML=(numArray[numberOne]+" divided by "+numArray[numberTwo]+" is equal to "+numArray[total]);  }
