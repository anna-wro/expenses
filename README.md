# Expenses list

The Expenses List is a web application that allows users to keep track of their expenses. Users can add, delete, and view their expenses in a user-friendly interface. The application automatically calculates the total sum of expenses and converts the amount into Euro.

## Getting started

1. Clone the repository or download the source code.
2. Install the dependencies by running the command: `npm install.`
3. Start the development server with: `npm start`.
4. Open your web browser and visit: `http://localhost:1234`.


## Requirements

1. Title should have at least 5 characters.
2. Amount should accept at most two digits after the decimal point.
3. Add button should add a new item to the list.
4. Amount should be automatically recalculated into Euro.
5. User should be allowed to delete any item from the list.
6. The sum should be calculated automatically.
7. Optionally add possibility to change conversion rate.

## Technical decisions

### Expense ID

I chose to use `Date.now()` to generate unique IDs for the expenses because it is a simple and lightweight solution that works well for small application.
However, there is a very remote possibility of ID collision if two expenses are added at the exact same millisecond. For larger or production applications, it would be better to use an ID generation library like UUID to mitigate this risk.

### CSS instead od SASS

CSS was preferred over SASS for styling the user interface in order to prioritize simplicity, size, performance, and compatibility for this specific project, even though SASS offers extra features and flexibility for larger or more complex projects.

## Suggested improvements

- **User Interface improvements**: Implementing a confirmation dialog before deleting an expense item, designing a dedicated view for scenarios where no expenses have been added.
- **Persistent Storage**: Currently, the application's data is not stored beyond the session. In other words, refreshing the page resets all expenses and the exchange rate. 
- **Currency Conversion**: This would allow users to input expenses in different currencies and have them automatically converted to the chosen base currency. Integration with a currency exchange rate API can provide up-to-date exchange rates for accurate conversion.
- **Utilizing localStorage or sessionStorage** could help retain data on the client's browser, while a backend server would allow for permanent data storage.
- **Expense Categories**: Introducing categories for expenses could improve the organization and classification of data.
- **Filtering and Sorting**: As the list of expenses expands, incorporating a filtering and sorting feature might prove beneficial for efficient data handling and presentation.
