import { StyleSheet, Text, View } from "react-native";
import { SIZES, COLORS, MARGIN } from "../../../assets/theme";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  period: {
    fontFamily: "serif",
    fontSize: SIZES.regular,
    color: COLORS.primary400,
    fontWeight: "700",
  },

  container: {
    padding: 8,
    backgroundColor: COLORS.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sum: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.primary500,
  },
});
