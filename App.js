import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityYourPos}>You positioned..</Text>
        <Text style={styles.cityName}>Daegu</Text>
      </View>
      <View style={styles.weather}>
        <Text style={styles.dayTemp}>17℃</Text>
        <Text style={styles.dayClimate}>sunny</Text>
      </View>
    </View>
  );
}

// style={styles.}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5C5E6",
  },
  city: {
    flex: 1,
    // backgroundColor: "#f8a032",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 60,
    margin: 10,
    fontWeight: "600",
    color: "white",
  },
  cityYourPos: {
    fontSize: 15,
    margin: 5,
    color: "white",
  },
  weather: {
    flex: 2.5,
    alignItems: "center",
  },
  dayTemp: {
    fontSize: 138,
    fontWeight: "500",
    marginTop: 50,
    color: "white",
  },
  dayClimate: {
    marginTop: -10,
    fontSize: 25,
    color: "white",
  },
});
