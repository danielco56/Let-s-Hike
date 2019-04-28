import { createStackNavigator } from "react-navigation";

import LoginScreen from "../Containers/Login/LoginScreen";
import RegisterScreen from "../Containers/Register/RegisterScreen";

export default createStackNavigator(
  {
    LoginScreen,
    RegisterScreen
  },
  { headerMode: "none",
   initialRouteName: "LoginScreen" 
  }
);
