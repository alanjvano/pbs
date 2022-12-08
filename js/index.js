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