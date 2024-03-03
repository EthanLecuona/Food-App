import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../../../../utils/Colors";

function HeaderButton({ onPress, color, icon }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={35} color={color} />
      </View>
    </Pressable>
  );
}
export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically in the container
    justifyContent: "center", // Center items horizontally in the container
    // padding: 8, // Add some padding around the content
    // Adjust width and height as needed to make the button larger or smaller
    width: 40, // Example width, adjust as needed
    height: 40, // Making height equal to the width to form a circle
    borderRadius: 20, // Half of width/height to make it a perfect circle
    // backgroundColor: "white",
  },
  pressed: {
    opacity: 0.7, // Slightly fade the button on press for feedback
  },
});
