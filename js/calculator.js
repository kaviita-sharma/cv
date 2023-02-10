alert("im working");
function dis(val){
  //enter value in the blank box
  document.querySelector('#result').value +=val;
}

function myFunction(event) {
  //for input from keyboard
           if (event.key == '0' || event.key == '1'
               || event.key == '2' || event.key == '3'
               || event.key == '4' || event.key == '5'
               || event.key == '6' || event.key == '7'
               || event.key == '8' || event.key == '9'
               || event.key == '+' || event.key == '-'
               || event.key == '*' || event.key == '/')
               document.getElementById("result").value += event.key;}

function solve(){
  //solve the equation
  var x=document.getElementById("result").value;
  var y=eval(x);
  document.getElementById("result").value=y;
}

function erase(){
  //erase the last element in the reult box
  var x=document.getElementById("result").value;
  alert(x);
  var y=x.slice(-1);
  alert(y);
  var p= x.replace(x.slice(-1),'');
  alert(p);
  document.getElementById("result").value=p;
}
function clr(){
  //clear the blank box
  document.querySelector('#result').value="";
}
