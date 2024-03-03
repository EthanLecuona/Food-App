import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../../data/dummy-data";
import { useRoute, useNavigation } from "@react-navigation/native";
import MealList from "../components/meal/MealList";

function OverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((MealListItem) => {
    return MealListItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default OverviewScreen;

const styles = StyleSheet.create({});
