import { StyleSheet, Text } from "react-native";
import Colors from "../../../../utils/Colors";
function Subtitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Subtitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomColor: Colors.primary600,
    borderBottomWidth: 2,
    textAlign: "center",
    paddingVertical: 6,
    marginVertical: 2,
  },
});
