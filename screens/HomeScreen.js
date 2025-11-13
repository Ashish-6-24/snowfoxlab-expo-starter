import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        🏠 Welcome to Snow Fox Lab
      </Text>
      <Button
        label="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <View style={{ height: 12 }} />
      <Button label="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
