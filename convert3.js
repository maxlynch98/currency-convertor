function euroToPounds(){

var amount = parseInt(document.getElementById("value1").value);
var euroToPounds = amount * (0.86);
var message = amount + ' euros converts to ' + euroToPounds + 'sterling.';
var message = 'This is your current Sterling balance!' 
  
  console.log(message);
  
  doc.getElementById("resultsentence").innerHTML = (message);
}
  
  function euroToUSDollar(){
  var amount = parseInt(document.getElementbyId("value1").value);
  var euroToUSDollar = amount / (1.06);
  var message = amount + ' euros converts to ' + euroToUSDollar + 'dollar.';
  var message = 'This is your current Dollar balance!' 
  
  console.log(message);
  
  doc.getElementById("resultsentence").innerHTML = (message);
  }
  
 

  function euroToYen(){
  var amount = parseInt(document.getElementbyId("value1").value);
  var euroToYen = amount / (121.12);
  var message = amount + 'euros converts to '+ euroToYen + 'yen.';
  var message = 'This is your current Yen balance!' 
  
   console.log(message);
  
  doc.getElementById("resultsentence").innerHTML = (message);
  }
  
  function euroToBitcoin(){
  var amount = parseInt(document.getElementbyId("value1").value);
  var euroToBitcoin = amount / (0.00082);
  var message = amount + 'euros converts to '+ euroTo + 'bitcoin.';
  var message = 'This is your current Bitcoin balance!' 
  
   console.log(message);
  
  doc.getElementById("resultsentence").innerHTML = (message);
  }
  
  