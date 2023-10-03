import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { COLORS } from '../../assets/theme'
import ExpensesOutput from '../components/ExpenseOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../../util/date';

export default function RecentExpense() {
  const expenseCtx = useContext(ExpensesContext);

  const recentExpenses = expenseCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date > date7DaysAgo) && (expense.date <= today);

  }); 
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses Registered for the last 7 Days."/>
}

const styles = StyleSheet.create({

  container:{

    flex:1,
    backgroundColor:COLORS.bgScreen
  },
})