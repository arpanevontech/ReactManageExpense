import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../../assets/theme'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpense() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput  expenses={expensesCtx.expenses} expensesPeriod="Last 7 Days" fallbackText="No registered Expense Found"/>
}

const styles = StyleSheet.create({

  container:{

    flex:1,
    backgroundColor:COLORS.bgScreen
  },
})