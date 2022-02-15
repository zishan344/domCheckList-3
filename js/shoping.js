function count(product, isAdd) {
  const productInput = document.getElementById(product + "-input");
  const productInputText = parseInt(productInput.value);
  if (isAdd == true) {
    productInput.value = productInputText + 1;
  } else if (productInput.value > 1) {
    productInput.value = productInputText - 1;
  }
}

document.getElementById("phone-plus").addEventListener("click", function () {
  count("phone", true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  count("phone", false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  count("case", true);
});
document.getElementById(" case-minus").addEventListener("click", function () {
  count("case", false);
});
