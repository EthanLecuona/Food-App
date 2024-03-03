import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "./modules/meals/screens/CategoryScreen";
import OverviewScreen from "./modules/meals/screens/OverviewScreen";
import FavouritesScreen from "./modules/meals/screens/FavouritesScreen";
import DetailsScreen from "./modules/meals/screens/DetailsScreen";

import FavouritesContextProvider from "./store/context/favourites-context";
import Colors from "./utils/Colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: Colors.primary500,
        drawerActiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "white",
        },
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "white" },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoryScreen}
        options={{
          title: "Meal Categories",
          drawerLabel: "All Categories",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
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
                headerShown: false,
              }}
              name="Drawer"
              component={DrawerNavigator}
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
      </FavouritesContextProvider>
    </>
  );
}
