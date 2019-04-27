import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";

export default StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.khaki,
    height: Metrics.doubleSection,
    justifyContent: "center"
  },
  transparentButton: {
    backgroundColor: Colors.transparent,
    borderWidth: Metrics.horizontalLineHeight,
    borderColor: Colors.khaki
  },
  label: {
    ...Fonts.style.normal
  },
  transparentLabel: {
    color: Colors.khaki
  },
  inactiveOverlay: {
    backgroundColor: Colors.semitransparentBlack,
    position: "absolute"
  }
});
