const url = new URL(window.location.href);
const nam = url.searchParams.get("name");
document.getElementById("name").innerText = nam;
// console.log(isNaN(parseFloat(depAmount)));
const btns = document.querySelectorAll(".btn");

for (const btn of btns) {
  btn.addEventListener("click", function (event) {
    const executing = event.target.innerText;
    const newAmount = parseFloat(event.target.previousElementSibling.value);
    if (isNaN(newAmount)) {
      alert("Please enter a valid amount");
    } else {
      if (executing == "Deposit") {
        adding_amount("dep-amount", newAmount);
        adding_amount("balance-amount", newAmount);
      } else if (executing == "Withdraw") {
        const successfully_added = reducing_aount("balance-amount", newAmount);
        if (successfully_added) {
          adding_amount("with-amount", newAmount);
        }
      }
    }
    event.target.previousElementSibling.value = "";
  });
}

function adding_amount(field_id, add_amount) {
  const field = document.getElementById(field_id);
  let amount = parseFloat(field.innerText);
  amount += add_amount;
  field.innerText = amount;
  return;
}

function reducing_aount(field_id, subs_amount) {
  const field = document.getElementById(field_id);
  let amount = parseFloat(field.innerText);

  if (subs_amount > amount) {
    alert("Insufficient Balance");
    return false;
  } else {
    amount -= subs_amount;
    field.innerText = amount;
    return true;
  }
}

function logout() {
  window.location.href = "index.html";
}
