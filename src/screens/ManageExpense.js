import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../assets/theme";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEdited = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => { 
    navigation.setOptions({
      title: isEdited ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdited]);

  function deleteExpensehandler() {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEdited) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEdited ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEdited && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={COLORS.error600}
            size={30}
            onPress={deleteExpensehandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary700,
    padding: 24,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: COLORS.primary200,
    alignItems: "center",
  },
});
