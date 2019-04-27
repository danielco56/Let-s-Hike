import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../../Themes";

export default StyleSheet.create({
  textInput: {
    height: Metrics.size_50,
    padding: Metrics.baseMargin,
    borderBottomWidth: Metrics.horizontalLineHeight,
    borderColor: Colors.khaki,
    marginHorizontal: Metrics.size_50,
    marginTop: Metrics.doubleBaseMargin,
    color: Colors.khaki
  }
});
