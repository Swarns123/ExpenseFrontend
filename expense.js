document.addEventListener("DOMContentLoaded", () => {
const loadHardcodedBtn = document.getElementById("loadHardcodedBtn");
const expenseList = document.getElementById("expenseList");
const statusMessage = document.getElementById("statusMessage");
const expenses = [
{ category: "Food", title: "Zakaria Street", amount: 3000, date: "2026-03-23" },
{ category: "Electronics", title: "Phone", amount: 20000, date: "2026-03-23" }
];
loadHardcodedBtn.addEventListener("click", () => {
statusMessage.textContent = "Loaded sample data successfully.";
renderExpenses(expenses);
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