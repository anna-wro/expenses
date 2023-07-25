import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { expenseStore } from './ExpenseStore';
import { copy } from '../consts/copy';

const AddExpenseForm = observer(() => {
  const [title, setTitle] = useState();
  const [amountPLN, setAmountPLN] = useState();

  const handleAddExpense = e => {
    e.preventDefault();
    if (title?.length >= 5) {
      expenseStore.addExpense(title, parseFloat(amountPLN));
      setTitle('');
      setAmountPLN(0);
    }
  };

  return (
    <form onSubmit={handleAddExpense} className="addForm">
      <div>
        <div className="inputContainer">
          <label htmlFor="title">{copy.addTitle}</label>
          <input
            id="title"
            type="text"
            required
            minLength={5}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="amount">{copy.addAmount}</label>
          <input
            id="amount"
            type="number"
            required
            step="0.01"
            value={amountPLN}
            onChange={e => setAmountPLN(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="addButton">{copy.addButton}</button>
    </form>
  );
});

export default AddExpenseForm;
