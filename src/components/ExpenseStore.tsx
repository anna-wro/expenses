import { makeAutoObservable } from 'mobx';

type Expense = {
  id: string;
  title: string;
  amountPLN: number;
};

class ExpenseStore {
  expenses: Expense[] = [
    { id: '1689852685892', title: 'New book about Rust', amountPLN: 100 },
    {
      id: '1689593485892',
      title: 'Snacks for a football match',
      amountPLN: 20,
    },
    { id: '1688815885892', title: 'Bus ticket', amountPLN: 2.55 },
  ];
  exchangeRate: number = 4.421;

  constructor() {
    makeAutoObservable(this);
  }

  addExpense(title: string, amountPLN: number) {
    this.expenses.push({ id: Date.now().toString(), title, amountPLN });
  }

  removeExpense(id: string) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }

  setExchangeRate(rate: number) {
    this.exchangeRate = rate;
  }

  get totalAmountPLN() {
    return this.expenses.reduce(
      (total, expense) => total + expense.amountPLN,
      0,
    );
  }

  get totalAmountEUR() {
    return this.totalAmountPLN / this.exchangeRate;
  }
}

export const expenseStore = new ExpenseStore();
