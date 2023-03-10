function doubleDigit(x) {
    x = x.toString();
    if (x.length == 1) {
        x = '0' + x;
    }
    return x
}

function loadCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  yyyy = parseInt(yyyy);
  today = yyyy+'-'+doubleDigit(mm)+'-'+doubleDigit(dd);
  document.getElementById("date").value = today;
} 

var selectInput = document.getElementById('category');

var select_options = ['option1', 'option2', 'option3', 'hello'];

for (var i of select_options) {
    console.log(i)
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    selectInput.appendChild(opt);
}

const jsonFile = require("./data/budget.json");
console.log(jsonFile);