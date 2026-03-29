document.addEventListener("DOMContentLoaded", () => {
const loadApiBtn = document.getElementById("loadApiBtn");
const expenseList = document.getElementById("expenseList");
const statusMessage = document.getElementById("statusMessage");
loadApiBtn.addEventListener("click", async () => {
statusMessage.textContent = "Loading expenses from API...";
expenseList.innerHTML = "";
try {
const response = await fetch("https://expensetracker-1-i25j.onrender.com/expenses");
if (!response.ok) {
throw new Error("HTTP error: " + response.status);
}
const data = await response.json();
statusMessage.textContent = "Expenses loaded successfully.";
renderExpenses(data);
} catch (error) {
console.error("Error:", error);
statusMessage.textContent = "Failed to fetch data.";
expenseList.innerHTML = "<p style='color:red;'>Error loading expenses.</p>";
}
});
function renderExpenses(data) {
expenseList.innerHTML = "";
if (!data || data.length === 0) {
expenseList.innerHTML = "<p>No expenses found.</p>";
return;
}
data.forEach(exp => {
const card = document.createElement("div");
card.className = "expense-card";
card.innerHTML = `
<div class="expense-title">${exp.title}</div>
<div class="expense-category">${exp.category}</div>
<div class="expense-amount">₹ ${exp.amount}</div>
<div class="expense-date">${exp.date}</div>
`;
expenseList.appendChild(card);
});
}
});