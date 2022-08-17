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
