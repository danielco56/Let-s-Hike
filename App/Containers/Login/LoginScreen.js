import React, { Component } from "react";
import { View, Image, SafeAreaView, Button } from "react-native";
import styles from "./Styles/LoginScreenStyles";
import { Images, Colors } from "../../Themes";
import CustomInput from "../../Components/Input/CustomInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <View style={styles.inputContainer}>
          <CustomInput placeholder={"Email"} secureTextEntry={false} />
          <CustomInput placeholder={"Password"} secureTextEntry={true} />
        </View>
        <View style={styles.registerButtonStyle}>
          <Button
            title={"Don't have an account?"}
            color={Colors.khaki}
            onPress={() => console.log("register")}
          />
        </View>
        <View style={styles.loginButtonStyle}>
          <DefaultButton
            title={"Log In"}
            onPress={() => console.log("login")}
          />
        </View>
      </SafeAreaView>
    );
  }
}
