import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Text style={styles.text}>
      Open up App.tsx to start working on your app!
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});