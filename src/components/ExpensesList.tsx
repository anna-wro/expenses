import React from 'react';
import { observer } from 'mobx-react-lite';
import { expenseStore } from './ExpenseStore';
import { copy } from '../consts/copy';

const ExpensesList = observer(() => {
  return (
    <table className="expensesTable">
      <thead>
        <tr>
          <th>{copy.itemTitle}</th>
          <th>{copy.amountPLN}</th>
          <th>{copy.amountEUR}</th>
          <th>{copy.options}</th>
        </tr>
      </thead>
      <tbody>
        {expenseStore.expenses.map(expense => {
          const amountInEUR = (
            expense.amountPLN / expenseStore.exchangeRate
          ).toFixed(2);
          return (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amountPLN.toFixed(2)}</td>
              <td>{amountInEUR}</td>
              <td>
                <button className="deleteButton" onClick={() => expenseStore.removeExpense(expense.id)}>
                  {copy.delete}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default ExpensesList;
