const account = {
    name: 'Tany',
    expense: [],
    income: [],
    addExpense: function (description, amount) {
        this.expense.push({description: description, amount: amount});
    },
    getAccountSummary:  function () {
        let sumExpenses = 0;
        for (let i of this.expense) {
            sumExpenses += i.amount;    
        }
        let sumIncome = 0;
        for (let i of this.income) {
            sumIncome += i.amount;
        }
        let totalBalance = sumIncome - sumExpenses;
        return `${this.name} has a balance of $ ${totalBalance}. $ ${sumIncome} in income and $ ${sumExpenses} in expense.`;    
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }

}

account.addExpense('chole bhature', 35);
account.addExpense('aloo naan', 50);
account.addIncome(' job', 1000);
account.addIncome('freelancing', 400);
console.log(account.getAccountSummary());