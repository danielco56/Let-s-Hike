import React, { Component } from "react";
import { View, Image, SafeAreaView, Button } from "react-native";
import styles from "./Styles/RegisterScreenStyle";
import { Images, Colors } from "../../Themes";
import CustomInput from "../../Components/Input/CustomInput";
import DefaultButton from "../../Components/Buttons/DefaultButton";

export default class RegisterScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <CustomInput placeholder={"Email"} secureTextEntry={false} />
          <CustomInput placeholder={"First Name"} secureTextEntry={true} />
          <CustomInput placeholder={"Last Name"} secureTextEntry={true} />
          <CustomInput placeholder={"Password"} secureTextEntry={true} />
          <CustomInput placeholder={"Repeat Password"} secureTextEntry={true} />
        </View>
        <View style={styles.registerButtonStyle}>
          <DefaultButton
            title={"Register"}
            onPress={() => console.log("Register")}
          />
        </View>
      </SafeAreaView>
    );
  }
}
