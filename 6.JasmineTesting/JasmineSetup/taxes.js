function calculateTaxes(income) {
  if(!Number.isFinite(income)) {
    throw new Error("Invalid income");
  }
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}

function removeDupes(values) {
  const arr = [...new Set(values)];
  if(typeof values === 'string') return arr.join('');
  return arr;
}

function remove(arr, val) {
  return arr.filter((element) => {
    return element !== val;
  });
}

//---------------//
let usernames = [];
let input = document.getElementById("username");

function submitForm() {
  usernames.push(input.value);
}

//Inpure function
function append(arr, val) {
  arr.push(val);
}
//Pure function
function appendPure(arr, val) {
  return [...arr, val];
}