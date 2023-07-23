# Expenses list

## Requirements

1. Title should have at least 5 characters. ✅
2. Amount should accept at most two digits after the decimal point. ✅
3. Add button should add a new item to the list. ✅
4. Amount should be automatically recalculated into Euro. ✅
5. User should be allowed to delete any item from the list. ✅
6. The sum should be calculated automatically. ✅
7. Optionally add possibility to change conversion rate.

## Technical decisions

### Expense ID

I chose to use `Date.now()` to generate unique IDs for the expenses because it is a simple and lightweight solution that works well for small application.
However, there is a very remote possibility of ID collision if two expenses are added at the exact same millisecond. For larger or production applications, it would be better to use an ID generation library like UUID to mitigate this risk.

## Suggested improvements

- Confirmation screen before removing an expense
- Different view when no expenses added
