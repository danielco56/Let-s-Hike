import { StyleSheet } from "react-native";
import { Metrics, Colors, ApplicationStyles } from "../../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain",
    alignSelf: "center"
  },
  inputContainer: {
    marginTop: Metrics.size_120
  },
  registerButtonStyle: {
    marginTop: Metrics.size_30
  },
  loginButtonStyle: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
