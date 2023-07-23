import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { expenseStore } from './ExpenseStore';
import { copy } from '../consts/copy';
import ExpensesList from './ExpensesList';

const App = observer(() => {
  const [title, setTitle] = useState();
  const [amountPLN, setAmountPLN] = useState();
  const [exchangeRate, setExchangeRate] = useState(expenseStore.exchangeRate);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length >= 5) {
      expenseStore.addExpense(title, parseFloat(amountPLN));
      setTitle(undefined);
      setAmountPLN(undefined);
    }
  };

  // const handleSetExchangeRate = () => {
  //   if (typeof exchangeRate === 'number') {
  //     expenseStore.setExchangeRate(exchangeRate);
  //     setExchangeRate(undefined);
  //   }
  // };

  return (
    <div className="container">
      <h1>{copy.title}</h1>
      <form onSubmit={handleAddExpense}>
        <label for="title">{copy.addTitle}</label>
        <input
          id="title"
          type="text"
          required
          minlength={5}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label for="amount">{copy.addAmount}</label>
        <input
          id="amount"
          type="number"
          required
          step="0.01"
          value={amountPLN}
          onChange={e => setAmountPLN(e.target.value)}
        />
        <button type="submit">{copy.addButton}</button>
      </form>
      {/* <input
        type="number"
        value={exchangeRate}
        onChange={e => setExchangeRate(e.target.value)}
        onBlur={handleSetExchangeRate}
      /> */}
      <ExpensesList />
      {copy.sumTitle}: {expenseStore.totalAmountPLN} PLN (
      {expenseStore.totalAmountEUR.toFixed(2)} EUR)
    </div>
  );
});

export default App;
