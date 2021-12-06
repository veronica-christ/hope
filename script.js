let detail;
let amount;

// holds all transactions
let transactions = [
  { type: "Income", detail: "Salary", amount: 3000 },
  { type: "Expense", detail: "Rent", amount: 30 },
];

// get values from inputs
function getInputValues() {
  detail = document.getElementById("detail").value;
  amount = Number(document.getElementById("amount").value);
}

// validate inputs
function isValid() {
  if (!detail || !amount) {
    alert("Detail and Amount are both required");
    return false;
  }
  return true;
}

// populate the table
function displayTable() {
    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    for (let i = 0; i < transactions.length; i++) {
        
        tableBody.innerHTML +=  `
        <tr>
                <th>${transactions[i].type}</th>
                <th>${transactions[i].detail}</th>
                <th>${transactions[i].amount}</th>
            </tr>
        `;
        
    }
}



function calcIncome() {
  getInputValues();

  if (!isValid()) {
    return;
  }

  displayTable();

  console.log(detail, amount);
}


function calcExpense() {
  getInputValues();

  if (!isValid()) {
    return;
  }

  console.log(detail, amount);
}
