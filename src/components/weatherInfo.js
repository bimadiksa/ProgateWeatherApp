import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    main: { temp, feels_like, humidity },
    weather,
    visibility,
    wind: { speed },
  } = weatherData;

  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{temp} °C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>{weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Feels like :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{feels_like} °C</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Humidity :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{humidity} %</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherInfo;
