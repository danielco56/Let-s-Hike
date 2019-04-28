import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStackNavigator from "./AuthStackNavigator";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const switchNavigator = createSwitchNavigator(
  {
    AuthStackNavigator
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "AuthStackNavigator",
   
  }
);

export default createAppContainer(switchNavigator);
