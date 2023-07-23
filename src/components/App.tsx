import React from 'react';
import { observer } from 'mobx-react-lite';
import { expenseStore } from './ExpenseStore';
import { copy } from '../consts/copy';

const App = observer(() => {
  return (
    <div className="container">
      <h1>{copy.title}</h1>
      <table>
        <thead>
          <tr>
            <th>{copy.itemTitle}</th>
            <th>{copy.amountPLN}</th>
            <th>{copy.amountEUR}</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
      {copy.sumTitle}: {expenseStore.totalAmountPLN} PLN (
      {expenseStore.totalAmountEUR.toFixed(2)} EUR)
    </div>
  );
});

export default App;
