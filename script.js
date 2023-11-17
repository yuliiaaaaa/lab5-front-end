function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor(cell) {
  cell.style.background = getRandomColor();
}

function changeColorByClick(cell) {
  const colorPicker = document.getElementById("colorPicker");
  cell.style.background = colorPicker.value;
}

function changeByDblClick(cell) {
  const table = document.querySelector("table");
  const columnIndex = cell.cellIndex;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[columnIndex].style.backgroundColor = getRandomColor();
  }
}

const fullNameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
const idCardRegex = /^ТТ №\d{6}$/;
const dobRegex = /^\d{2}.\d{2}.\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const addressRegex = /^м. [А-Яа-яІіЇїЄєҐґ\s]+$/;

function validation(event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const idCard = document.getElementById("idCard").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();

  const isValidFullName = fullNameRegex.test(fullName);
  const isValidIdCard = idCardRegex.test(idCard);
  const isValidDob = dobRegex.test(dob);
  const isValidEmail = emailRegex.test(email);
  const isValidAddress = addressRegex.test(address);

  console.log(isValidEmail);
  console.log(isValidAddress);
  console.log(isValidDob);
  console.log(isValidFullName);
  console.log(isValidIdCard);

  const fullNameError = document.getElementById("fullNameError");
  if (!isValidFullName) {
    fullNameError.classList.remove("is-hidden");
    document.getElementById("fullName").classList.add("is-danger");
  } else {
    fullNameError.classList.add("is-hidden");
    document.getElementById("fullName").classList.remove("is-danger");
  }

  // Handle ID card validation
  const idCardError = document.getElementById("idCardError");
  if (!isValidIdCard) {
    idCardError.classList.remove("is-hidden");
    document.getElementById("idCard").classList.add("is-danger");
  } else {
    idCardError.classList.add("is-hidden");
    document.getElementById("idCard").classList.remove("is-danger");
  }

  // Handle date of birth validation
  const dobError = document.getElementById("dobError");
  if (!isValidDob) {
    dobError.classList.remove("is-hidden");
    document.getElementById("dob").classList.add("is-danger");
  } else {
    dobError.classList.add("is-hidden");
    document.getElementById("dob").classList.remove("is-danger");
  }

  // Handle email validation
  const emailError = document.getElementById("emailError");
  if (!isValidEmail) {
    emailError.classList.remove("is-hidden");
    document.getElementById("email").classList.add("is-danger");
  } else {
    emailError.classList.add("is-hidden");
    document.getElementById("email").classList.remove("is-danger");
  }

  // Handle address validation
  const addressError = document.getElementById("addressError");
  if (!isValidAddress) {
    addressError.classList.remove("is-hidden");
    document.getElementById("address").classList.add("is-danger");
  } else {
    addressError.classList.add("is-hidden");
    document.getElementById("address").classList.remove("is-danger");
  }

  // Hide output section if any field is invalid
  const output = document.getElementById("output");
  if (
    !isValidFullName ||
    !isValidIdCard ||
    !isValidDob ||
    !isValidEmail ||
    !isValidAddress
  ) {
    output.classList.add("is-hidden");
    return false; // Prevent form submission
  }

  document.getElementById(
    "fullNameOutput"
  ).textContent = `Full Name: ${fullName}`;
  document.getElementById("idCardOutput").textContent = `ID Card: ${idCard}`;
  document.getElementById("dobOutput").textContent = `Date of Birth: ${dob}`;
  document.getElementById("emailOutput").textContent = `Email: ${email}`;
  document.getElementById("addressOutput").textContent = `Address: ${address}`;
  output.classList.remove("is-hidden");
  return false;
}
