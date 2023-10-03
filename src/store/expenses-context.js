import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoe",
    amount: 55.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of Trouser",
    amount: 89.29,
    date: new Date("2022-11-05"),
  },

  {
    id: "e3",
    description: "A pair of Shirt",
    amount: 19.34,
    date: new Date("2022-03-15"),
  },
  {
    id: "e4",
    description: "A pair of Skirt",
    amount: 73.59,
    date: new Date("2022-06-12"),
  },
  {
    id: "e5",
    description: "A pair of Slipper",
    amount: 67.77,
    date: new Date("2022-07-15"),
  },

  {
    id: "e6",
    description: "A pair of Jeans",
    amount: 66.66,
    date: new Date("2022-02-24"),
  },

  {
    id: "e7",
    description: "A pair of Jackets",
    amount: 86.86,
    date: new Date("2022-07-04"),
  },

  {
    id: "e8",
    description: "A pair of Hats",
    amount: 16.36,
    date: new Date("2022-01-14"),
  },
  {
    id: "e9",
    description: "Random Book",
    amount: 166.36,
    date: new Date("2023-01-01"),
  },
  {
    id: "e10",
    description: "The Miracle",
    amount: 26.66,
    date: new Date("2023-01-04"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense( expenseData ) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense( id ) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense( id, expenseData ) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense : deleteExpense,
    updateExpense : updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
