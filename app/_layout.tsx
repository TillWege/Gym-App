import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router/stack";

export default function AppLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: "#000", */
    alignItems: "center",
    justifyContent: "center",
  },
});
