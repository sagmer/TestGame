import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Video, Audio } from "expo-av"
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Card = (props) => {
    const contentType = props.contentType;
    const [chosen, setChosen] = useState(false);
    chosenHandler = props.chosenHandler;
    const choiceEventHandler = key => {
        if (chosen)
            setChosen(false)
        else
            setChosen(true)
        chosenHandler(key)
    }
    let content;
    let radioBut;
    if (props.chosen === false)
        radioBut = <Text><MaterialCommunityIcons name="checkbox-blank-circle-outline" size={24} color="black" /></Text>
    else
        radioBut = <Text><MaterialCommunityIcons name="circle" size={24} color="black" /></Text>
    if (contentType === "video") {
        const uriProp = props.content;
        content =
            <View style={styles.questionPart}>
                <TouchableOpacity onPress={choiceEventHandler}>
                    {radioBut}
                </TouchableOpacity>
                <Video
                    source={{ uri: uriProp }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="stretch"
                    shouldPlay
                    isLooping
                    style={{ width: 250, height: 200 }}
                />
            </View>
    }
    else {
        content =
            <View style={styles.questionPart}>
                <TouchableOpacity onPress={() => choiceEventHandler(props.ind)}>
                    {radioBut}
                </TouchableOpacity>
                <Text style={styles.text}>{props.content}</Text>
            </View>

    }
    return (
        <View style={styles.container}>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        width: 300,
        borderRadius: 2,
        borderColor: "gray",
        borderRadius:5,
        borderWidth: 2,
        //alignItems:"center",
        marginVertical: 5,
        padding:10,
        backgroundColor: "#ffc61a" 

    },
    text: {
        alignItems: "center"
    },
    questionPart: {
        flexDirection: "row",
        width: "80%",
        alignItems: "flex-start",

    }

})

export default Card;