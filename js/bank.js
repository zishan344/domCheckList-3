function getNumber(id) {
  const inputNumber = document.getElementById(id);
  const inputNumberText = parseFloat(inputNumber.value);
  inputNumber.value = "";
  return inputNumberText;
}
function total(input, tot) {
  const depoTotal = document.getElementById(input + "-total");
  const depoTotalText = parseFloat(depoTotal.innerText);
  const total = tot + depoTotalText;
  depoTotal.innerText = total;
}
function balance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  return balanceTotalText;
}
function totalBalance(amount, isAdd) {
  //balance total
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balanceTotal.innerText);
  if (isAdd == true) {
    balanceTotal.innerText = balanceTotalText + amount;
  } else {
    balanceTotal.innerText = balanceTotalText - amount;
  }
}
document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const depositAmount = getNumber("deposite-input");
    if (depositAmount > 0) {
      total("deposite", depositAmount);
      totalBalance(depositAmount, true);
    } else {
      alert("sorry type valid number");
    }
  });

document
  .getElementById("withdrow-button")
  .addEventListener("click", function () {
    const withdrowAmount = getNumber("withdrow-input");

    if (withdrowAmount > 0 && withdrowAmount < balance()) {
      total("withdrow", withdrowAmount);
      totalBalance(withdrowAmount, false);
    } else {
      alert("sorry type valid number");
    }
  });
