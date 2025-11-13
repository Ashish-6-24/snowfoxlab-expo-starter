import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Ashish Subedi</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>subediashish222@gmail.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+977 9387327478</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.value}>15 March 2004</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Bio:</Text>
        <Text style={styles.value}>
          Computer Information System student skilled in web and mobile
          development
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Education:</Text>
        <Text style={styles.value}>
          Boston International College, Bachelor in Computer Information System
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.value}>
          HTML, CSS, JavaScript, PHP, React Native, Node.js, MySQL, Firebase
        </Text>
      </View>

      <Button
        label="Back to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: "stretch",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#000",
  },
  section: {
    marginBottom: 18,
    backgroundColor: "#f5f5f5",
    padding: 14,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ff4e50",
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
});
