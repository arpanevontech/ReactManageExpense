import { FlatList, StyleSheet, Text } from "react-native";
import { COLORS, MARGIN, SIZES } from "../../../assets/theme";
import ExpenseItem from "./ExpenseItem";

function renderExpensesItems(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItems}
      keyExtractor={(item) => item.id}
     
    />
  );
}

const styles = StyleSheet.create({

    itemStyle:{
        fontFamily:'serif',
        fontSize:SIZES.medium,
        fontWeight:'700',
        color:COLORS.primary100,
        padding:MARGIN.common,
        textTransform:'capitalize'
    },
});
