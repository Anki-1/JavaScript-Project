// ********** SELECT ITEMS ************
const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
const grocery = document.getElementById("grocery");
const btnSubmit = document.querySelector(".btn-submit");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const btnClear = document.querySelector(".btn-clear");

// EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";

// ********** EVENT LISTENER **********

// submit form
form.addEventListener("submit", addItems);
// clear button

// ********** FUNCTIONS **********
function addItems(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement("article");

    const attr = document.createAttribute("data-id");
    attr.value = id;

    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="btn-edit">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="btn-delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    const btnDelete = element.querySelector(".btn-delete");

    const btnEdit = element.querySelector(".btn-edit");

    btnDelete.addEventListener("click", deleteItem);

    btnEdit.addEventListener("click", editItem);

    groceryList.appendChild(element);

    displayAlert("Item added to list", "success");
    groceryContainer.classList.add("show-container");

    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Value added", "success");
    setBackToDefault();
  } else {
    displayAlert("Empty Value", "danger");
  }
}

// Display Alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove Alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  groceryList.removeChild(element);
  console.log(groceryList);
  displayAlert("Item removed", "danger");
  setBackToDefault();
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  console.log(element);
  editElement = e.currentTarget.parentElement.previousElementSibling;
  console.log(editElement);
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  btnSubmit.textContent = "edit";
}

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  btnSubmit.textContent = "submit";
}

// ********* LOCAL STORAGE ********

// ******** SETUP ITEMS *********
