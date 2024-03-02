import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import CategoryScreen from "./modules/meals/screens/CategoryScreen";
import OverviewScreen from "./modules/meals/screens/OverviewScreen";

import Colors from "./utils/Colors";
import DetailsScreen from "./modules/meals/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            options={{
              title: "All Meal Categories",
            }}
            name="MealsCategories"
            component={CategoryScreen}
          />
          <Stack.Screen
            name="MealsOverview"
            component={OverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
