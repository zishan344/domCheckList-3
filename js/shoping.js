///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// function section/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function count(product, price, isAdd) {
  const productInput = document.getElementById(product + "-input");
  const productInputText = parseInt(productInput.value);
  if (isAdd == true) {
    productInput.value = productInputText + 1;
  } else if (productInput.value > 1) {
    productInput.value = productInputText - 1;
  }
  // update product price
  const producntTotal = document.getElementById(product + "-total");
  producntTotal.innerText = productInput.value * price;

  //   subtotal section//////////////////////////////
  calculate();
}

// subtotal function
function getInput(product) {
  const productInput = document.getElementById(product + "-input");
  const prodiuctinput = parseInt(productInput.value);
  return prodiuctinput;
}

function calculate() {
  const phoneTotal = getInput("phone") * 1219;
  const caseTotal = getInput("case") * 59;
  const totalCost = phoneTotal + caseTotal;
  const tax = totalCost / 10;
  const total = totalCost + tax;

  document.getElementById("sub-total").innerText = totalCost;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// code section////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("phone-plus").addEventListener("click", function () {
  count("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  count("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  count("case", 59, true);
});
document.getElementById(" case-minus").addEventListener("click", function () {
  count("case", 59, false);
});
