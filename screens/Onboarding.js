import React, { useState, useRef, useContext } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

import { validateName, validateEmail } from "../utils";
import { AuthContext } from "../AuthContext";

const Onboarding = () => {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");

  const isEmailValid = validateEmail(email);
  const { onboard } = useContext(AuthContext);

  const validateAll = () => {
    return !validateName(firstName) && !validateName(lastName) && isEmailValid;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header></Header>
      <ScrollView style={styles.viewScroll}>
        <HeroSection></HeroSection>

        <View>
          <Text
            style={[styles.text, !validateName(firstName) ? "" : styles.error]}
          >
            First Name*
          </Text>
          <TextInput
            style={styles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
          />

          <Text
            style={[styles.text, !validateName(lastName) ? "" : styles.error]}
          >
            Last Name*
          </Text>
          <TextInput
            style={styles.inputBox}
            value={lastName}
            onChangeText={onChangeLastName}
          />

          <Text style={[styles.text, validateEmail(email) ? "" : styles.error]}>
            Email*
          </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            keyboardType="email-address"
            onChangeText={onChangeEmail}
          />

          <View style={styles.buttons}>
            <Pressable
              style={[styles.btn, validateAll() ? "" : styles.btnDisabled]}
              onPress={() => onboard({ firstName, lastName, email })}
              disabled={!validateAll()}
            >
              <Text style={styles.btntext}>Next</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    paddingLeft: 20,
    color: "#495E57",
    fontWeight: "bold",
  },
  inputBox: {
    alignSelf: "stretch",
    height: 50,
    margin: 18,
    borderWidth: 2,
    padding: 10,
    fontSize: 24,
    borderRadius: 9,
    borderColor: "#495E57",
  },
  btnDisabled: {
    backgroundColor: "#f1f4f7",
  },
  error: {
    color: "#d14747",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 18,
    marginBottom: 60,
  },
  btn: {
    flex: 1,
    backgroundColor: "#f4ce14",
    borderRadius: 9,
    alignSelf: "stretch",
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cc9a22",
  },
  btntext: {
    fontSize: 22,
    color: "#3e524b",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Onboarding;
