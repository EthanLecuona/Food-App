import { useContext } from "react";
import MealList from "../components/meal/MealList";
import { FavouritesContext } from "../../../store/context/favourites-context";
import { MEALS } from "../../../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouritesScreen() {
  const favouriteMealsContext = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsContext.ids.includes(meal.id)
  );
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meals yet!</Text>
      </View>
    );
  } else {
    return <MealList items={favouriteMeals} />;
  }
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
