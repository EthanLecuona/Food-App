import { FlatList } from "react-native";
import { CATEGORIES } from "../../../data/dummy-data";
import MealCategory from "../components/meal/MealCategory";
import { useNavigation } from "@react-navigation/native";

function CategoryScreen() {
  const navigation = useNavigation();

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <MealCategory
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      keyExtractor={(category) => category.id}
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
