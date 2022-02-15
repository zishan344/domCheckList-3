document.getElementById("title-player").style.color =
  "rgba(62, 155, 145, 0.79)";
document.getElementById("title-blog").style.color = "rgba(62, 155, 145, 0.79)";
const playerColor = document.getElementsByClassName("player");
for (const players of playerColor) {
  players.style.backgroundColor = "rgba(62, 155, 145, 0.18)";
  players.style.borderRadius = "10px";
}

document.getElementById("click").addEventListener("click", function () {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = "Hello java Script";
  ul.appendChild(li);
  //   console.log("click");
});

document.getElementById("clicked").addEventListener("click", function (e) {
  const inputNumber = document.getElementById("input-number");
  const inputNumberText = parseInt(inputNumber.value);
  const previousValue = inputNumberText;
  inputNumber.value = previousValue + 1;
  if (inputNumber.value == 5) {
    e.target.setAttribute("disabled", true);
  }
});
