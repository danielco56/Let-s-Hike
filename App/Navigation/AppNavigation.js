import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../Containers/Login/LoginScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Login: { screen: LoginScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "Login",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
