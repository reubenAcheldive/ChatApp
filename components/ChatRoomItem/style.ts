import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,

    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    color: "lightgrey",
    fontSize: 14,
  },
  badgeContainer: {
    backgroundColor: "#3872e9",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 45,
    top: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
export default styles;
