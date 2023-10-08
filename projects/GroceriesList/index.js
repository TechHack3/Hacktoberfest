//Pull inputs in js
let item = document.getElementById("groceryInput");
let quantity = document.getElementById("quantity");
const table = document.getElementById("table");
let submitButton = document.getElementById("submit");

//load from local storage if I have any
let savedData = JSON.parse(localStorage.getItem("groceryList")) || [];
displaySavedData();

submitButton.disabled = true;

//Event listener
submitButton.addEventListener("click", submitValue);
item.addEventListener("input", checkInput);
quantity.addEventListener("input", checkInput);
table.addEventListener("click", onDeleteRow);

function checkInput() {
  if (item.value.trim() !== "" && quantity.value.trim() !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
function submitValue() {
  const tBodyEl = document.getElementById("tbody-element");
  tBodyEl.innerHTML += `
    
      <tr>
        <td>${item.value}</td>
        <td>${quantity.value}</td>
        <td><button class = "deleteBtn">DELETE</button></td>
      </tr>
      
      `;

  //saving to storage
  savedData.push({ item: item.value, quantity: quantity.value });
  localStorage.setItem("groceryList", JSON.stringify(savedData));

  //clear input fields
  item.value = "";
  quantity.value = "";
  submitButton.disabled = true;
}
function onDeleteRow(x) {
  if (!x.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = x.target;
  const row = btn.closest("tr");
  const rowIndex = Array.from(row.parentElement.children).indexOf(row);

  //remove saved data and update local storage
  savedData.splice(rowIndex, 1);
  localStorage.setItem("groceryList", JSON.stringify(savedData));
  row.remove();
}

function displaySavedData() {
  const tBodyEl = document.getElementById("tbody-element");
  tBodyEl.innerHTML = "";

  savedData.forEach((data) => {
    tBodyEl.innerHTML += `
      
        <tr>
          <td>${data.item}</td>
          <td>${data.quantity}</td>
          <td><button class="deleteBtn">DELETE</button></td>
        </tr>
        
      `;
  });
}
