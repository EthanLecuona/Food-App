import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealDetails from "../components/meal/MealDetails";

function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;
  const displayedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({ title: mealTitle });
  }, [mealId, navigation]);

  return (
    <ScrollView>
      <MealDetails {...displayedMeal} />
    </ScrollView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
