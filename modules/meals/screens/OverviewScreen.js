import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../../data/dummy-data";
import { useRoute, useNavigation } from "@react-navigation/native";
import MealItem from "../components/meal/MealItem";

function OverviewScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const meanItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...meanItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default OverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
