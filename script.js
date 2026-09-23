let totalExpense = 0;

function addExpense() {
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;

    if (amount === "" || category === "" || description === "") {
        alert("Please fill all fields!");
        return;
    }

    let today = new Date();
    let date = today.toLocaleDateString();

    let table = document.getElementById("expenseList");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = date;
    row.insertCell(1).innerHTML = category;
    row.insertCell(2).innerHTML = description;
    row.insertCell(3).innerHTML = "₹" + amount;

    totalExpense = totalExpense + Number(amount);

    document.getElementById("total").innerHTML = totalExpense;

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
}
