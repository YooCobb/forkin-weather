import React from "react";
import prototype from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    undefined: {
        iconName: "weather-lightning-rainy"
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={["red", "blue"]}
            style={styles.container}
        >
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" /> 
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}> Title </Text>
                <Text style={styles.subtitle}>subtitle</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp:prototype.number.isRequired,
    condition: prototype.oneOf(["Thunderstorm","Dizzle","Rain","Snow","Clear","Clouds","Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash","Squall","Tornado"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom : 10
    },
    subtitle:{
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});