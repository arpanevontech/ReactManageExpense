import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES } from "../../../assets/theme";
import { getFormattedDate } from "../../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id
    });
  }


  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseitem}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.textbase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textbase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseitem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.primary400,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: COLORS.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textbase: {
    color: COLORS.primary50,
  },

  description: {
    fontSize: SIZES.regular,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    height: 40,
  },

  amount: {
    color: COLORS.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
