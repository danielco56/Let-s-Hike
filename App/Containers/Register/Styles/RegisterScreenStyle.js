import { StyleSheet } from "react-native";
import { Metrics, Colors, ApplicationStyles } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  inputContainer: {
    marginTop: Metrics.size_120
  },
  registerButtonStyle: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
