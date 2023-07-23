# Expenses list

## Technical decisions

### Expense ID
I chose to use `Date.now()` to generate unique IDs for the expenses because it is a simple and lightweight solution that works well for small application. 
However, there is a very remote possibility of ID collision if two expenses are added at the exact same millisecond. For larger or production applications, it would be better to use an ID generation library like UUID to mitigate this risk.
