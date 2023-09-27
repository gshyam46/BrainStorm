import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import QuizScreen from "./QuizScreen";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Quiz App</Text>
      <Pressable
        onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "magenta",
          padding: 15,
          width: 150,
          borderRadius: 30,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
        }}
      >
        <Text style={styles.text}>Start Quiz</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the entire screen
    backgroundColor: "navy", // Set the background color to blue
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  },
});
