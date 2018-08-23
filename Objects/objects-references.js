let myAccount = {
    name: 'Tany',
    balance: 1000,
    expense: 0,
    income: 0
}

let addIncome = function (account, income) {
    account.income = account.income + income;
    account.balance = account.balance + income;
    console.log(account);
}

let resetAccount = function (account) {
    account.balance = 1000;
    account.expense = 0;
    account.income = 0;
    console.log(account);
}

let addExpense = function (account, expense) {
    account.expense = account.expense + expense;
    account.balance = account.balance - expense;
    console.log(account);
}

let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} has $${account.balance} balance, $${account.expense} expenses and $${account.income} income`);
}

let addBalance = function (account, balance) {
    account.balance = account.balance + balance;
    console.log(account);
}

addIncome(myAccount, 500);
addExpense(myAccount, 100);
addExpense(myAccount, 50);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);