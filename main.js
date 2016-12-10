var Up = true;
var phrase = "";
$(document).ready(() => {
  document.getElementById("message").innerHTML ='...';
});

function addLetter(a) {
if(Up===true){
  phrase+=a;
}
  else {
    phrase+=a.toLowerCase();
  }
 print(); 
}

function Case(c) { 
 Up = c;
}

function print() {
 document.getElementById("message").innerHTML = phrase;
}

$("#btnClear").click(function(){
  phrase = '';
  print(); 
document.getElementById("message").innerHTML = '...';
});
$("#btnUp").click(function(){
  Case(true);
  $("#btnUp").addClass("selected");
  $("#btnLow").removeClass("selected");
});
$("#btnLow").click(function(){
  Case(false);
  $("#btnLow").addClass("selected");
  $("#btnUp").removeClass("selected");
});
$("#btnEnter").click(function(){
  phrase+="<br>";
  print();
});
$("#textSubmit").click(function(){
  if($('input[name="lineInput"]').is(':checked')){
    phrase+= "<br>"+ $('#textInput').val();
  } else {
    phrase+=$('#textInput').val();
  } 
  $('#textInput').val('');
  print();
});
