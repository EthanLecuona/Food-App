import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../../utils/Colors";

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.listText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listText: {
    color: "white",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: Colors.primary600,
  },
});
