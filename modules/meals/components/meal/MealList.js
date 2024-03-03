import { StyleSheet, View, FlatList } from "react-native";
import MealListItem from "./MealListItem";

function MealList({ items }) {
  function renderMealListItem(itemData) {
    const item = itemData.item;
    const meanItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealListItem {...meanItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealListItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
