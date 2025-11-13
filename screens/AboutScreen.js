import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

export default function AboutScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
         About Snow Fox Lab
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          marginBottom: 25,
          lineHeight: 22,
        }}
      >
        Snow Fox Lab is a place where learners grow through real projects. 
      </Text>

      <Button
        label="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <View style={{ height: 12 }} />
      <Button
        label="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
