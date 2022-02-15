function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinTaxt = pin + "";
  if (pinTaxt.length === 4) {
    return pin;
  } else {
    return getPin();
  }
  //   console.log(parseInt(Math.random() * 10000));
}
function generatePin() {
  const displayPin = document.getElementById("display-pin");
  displayPin.value = getPin();
}

document.getElementById("key-pad").addEventListener("click", function (e) {
  const taxt = e.target.innerText;
  const numberValulue = document.getElementById("typed-numbers");

  if (isNaN(taxt)) {
    if (taxt == "C") {
      numberValulue.value = "";
    }
  } else {
    const numberValulueTaxt = numberValulue.value;
    numberValulue.value = numberValulueTaxt + taxt;
  }
});

function verifyPin() {
  const displayPin = document.getElementById("display-pin");
  const numberValulue = document.getElementById("typed-numbers");
  if (displayPin.value == numberValulue.value) {
    document.getElementById("notify-success").style.display = "block";
    document.getElementById("notify-failled").style.display = "none";
  } else {
    document.getElementById("notify-failled").style.display = "block";
    document.getElementById("notify-success").style.display = "none";
  }
}
