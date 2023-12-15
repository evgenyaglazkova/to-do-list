import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function ListItem({ el , deleteHandler}){
    return (
        <TouchableHighlight onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 10,
        borderColor: "#fff",
        backgroundColor: "#fafafa",
        borderWidth: 2,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    }
})

export {ListItem};