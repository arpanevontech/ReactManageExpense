import { StyleSheet, View,Text } from "react-native";
import { COLORS } from "../../../assets/theme";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";



export default function ExpensesOutput({ expenses, expensesPeriod ,fallbackText}) {

  let content = <Text style={styles.infoText}> {fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:COLORS.primary700,
    paddingHorizontal:24,
    paddingBottom:0,
    paddingTop:24
  },

  infoText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32
  },
});