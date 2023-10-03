import { StatusBar } from "react-native";
import { COLORS } from "./assets/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

import ManageExpense from "./src/screens/ManageExpense";
import RecentExpense from "./src/screens/RecentExpense";
import AllExpense from "./src/screens/AllExpense";
import IconButton from "./src/components/UI/IconButton";
import ExpensesContextProvider from "./src/store/expenses-context";

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.secondary },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: COLORS.primary50,
        },
        tabBarActiveTintColor: COLORS.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={25}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: "Recent Expense",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpense}
        options={{
          title: "All Expense",
          tabBarLabel: "ALL Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.statusBarBg}
        translucent={false}
        hidden={false}
      />

      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="ExpensesOverview"
            screenOptions={{
              headerStyle: { backgroundColor: COLORS.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
                headerStyle: { backgroundColor: COLORS.secondary },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
