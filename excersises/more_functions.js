function displayMailingLabel(name, address, city, state, zipcode) {
  var message = name + address + city + state + zipcode;
  console.log(message);
}

var someName = "Muneeb Tasawar";
var someAddress = " 43-32 Kissena Blvd";
var someCity = " Flushing";
var someState = " New York ";
var someZipcode = 11355;

displayMailingLabel(someName, someAddress, someCity, someState, someZipcode);

var someName = " Bruce Wayne ";
var someAddress = "224 Park Drive ";
var someCity = "Gotham ";
var someState = "New Jersey ";
var someZipcode = 53556;

displayMailingLabel(someName, someAddress, someCity, someState, someZipcode);

function addNumbers(number1, number2) {
  var result = number1 + number2;
  console.log(number1);
  console.log("+ " + number2);
  console.log("= " + result);
}


addNumbers(20, 20);

function displayReceipt(totalDue, amountPaid) {
    var change = amountPaid - totalDue;
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
  
    if (change > 0) {
      console.log("Change: $" + change);
    } else if (change == 0) {
      console.log("No change needed");
    } else if (change < 0) {
      console.log("You still owe another: $" + Math.abs(change));
    }
  
    console.log();
  }
  
  displayReceipt(11.75, 20);
  displayReceipt(11.75, 11.75);
  displayReceipt(11.75, 10);