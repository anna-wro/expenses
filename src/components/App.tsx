import React from 'react';
import { observer } from 'mobx-react-lite';
import { expenseStore } from './ExpenseStore';
import { copy } from '../consts/copy';
import ExpensesList from './ExpensesList';
import AddExpenseForm from './AddExpenseForm';

const App = observer(() => {
  return (
    <div className="container">
      <header>
        <h1>{copy.title}</h1>
        <div>1EUR = {expenseStore.exchangeRate} PLN</div>
      </header>
      {/* <AddExpenseForm /> */}
      <ExpensesList />
      {/* {copy.sumTitle}: {expenseStore.totalAmountPLN} PLN (
      {expenseStore.totalAmountEUR.toFixed(2)} EUR) */}
    </div>
  );
});

export default App;
