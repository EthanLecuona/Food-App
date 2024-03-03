import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import Colors from "../../../../utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { isWhiteSpaceLike } from "typescript";
import Subtitle from "../ui/Subtitle";
import List from "../ui/List";
import { useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import HeaderButton from "../ui/HeaderButton";
import { FavouritesContext } from "../../../../store/context/favourites-context";

function MealDetails({
  id,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) {
  const navigation = useNavigation();
  const favouriteMealsContext = useContext(FavouritesContext);

  const mealIsFavourite = favouriteMealsContext.ids.includes(id);

  function favouriteStatus() {
    if (!mealIsFavourite) {
      favouriteMealsContext.addFavourite(id);
      return Alert.alert(
        "Favourite Added",
        "This meal was added to your favourites.",
        [
          {
            text: "Okay",
            style: "default",
          },
        ]
      );
    } else {
      favouriteMealsContext.removeFavourite(id);
      return Alert.alert(
        "Favourite Removed",
        "This meal was removed from your favourites.",
        [
          {
            text: "Okay",
            style: "default",
          },
        ]
      );
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            onPress={favouriteStatus}
            color={"red"}
            icon={mealIsFavourite ? "heart-sharp" : "heart-outline"}
          />
        );
      },
    });
  }, [navigation, favouriteStatus]);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rowText}>{duration}m</Text>
        <Text style={styles.rowText}>{complexity.toUpperCase()}</Text>
        <Text style={styles.rowText}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listContainerOuter}>
        <View style={styles.listContainerInner}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle style={{ textAlign: "left" }}>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 30,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4, // Shadow for Android
    shadowColor: "black", // Shadow for iOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rowText: {
    marginHorizontal: 4,
    fontSize: 16,
  },
  listContainerInner: {
    width: "80%",
  },
  listContainerOuter: {
    alignItems: "center",
  },
});
