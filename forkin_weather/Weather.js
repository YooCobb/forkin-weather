import React from "react";
import prototype from "prop-types";
import { View, Text, StyleSheet} from "react-native";

export default function Weather({temp}){
    return (
        <View style = {styles.container}>
            <Text>{temp}</Text>
        </View>
    );
}

Weather.prototype = {
    temp:prototype.number.isRequired,
    condition: prototype.oneOf(["Thunderstorm","Dizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});