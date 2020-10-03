function calculateTip(event) {
  event.preventDefault();
  var bill = document.getElementById('bill').value;
  var serviceQuality = document.getElementById('serviceQuality').value;
  var people = document.getElementById('people').value;

  if(bill == '' | serviceQuality == 0){
    alert("Por favor, preencha os valores");
    return;
  }

  if(people == '' | people <= 1) {
    people = 1;
    document.getElementById('each').display = "none";
  } else {
    document.getElementById('each').display = "block";
  }

  var total = (bill * serviceQuality) / people
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
  document.getElementById('each').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);