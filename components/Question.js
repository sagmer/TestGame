import React, { useState } from "react"
import { Text, StyleSheet, View } from "react-native"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Card from "./Card";
import { Video, Audio } from "expo-av";

const Question = props => {
    //const [chosenIndex, setChosenIndex] = useState(props.chosenIndex);//
    const [choices, setChoices]= useState(props.choices);//
   
    chosenHandler = key=>{
         console.log("key"+key)
        let curChoices=[...choices];
        //console.log(curChoices);
        curChoices.forEach(
            (cur, index)=>{
                cur.chosen=false;   
            });
        curChoices[key].chosen=true;
        //console.log(curChoices);
        setChoices(curChoices);
    }
    const questionUri = props.question.uri;
    let questionPart;
    if (props.question.uri !== null) {
        questionPart =
            <View style={styles.question}>
                <View style={styles.questionNum}>
                    <Text style={styles.questionNum}> Question {props.questionNum}</Text>
                    <Video
                        source={{ uri: questionUri }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="stretch"
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 200 }}
                    />
                </View>
                <View style={styles.questionPart}>                
                    <Text style={styles.questionText}> {props.question.text}</Text>
                </View>
            </View>
    }
    else {
        questionPart = <View style={styles.questionPart}>
            <Text style={styles.questionText}> {props.questionNum}</Text>
            <Text style={styles.questionText}> {props.question.text}</Text>
        </View>
    }
     
    return (
        <View style={styles.container}>
            {questionPart}
            {choices.map((item, index) =>          
                <Card ind={index} content={item.label} contentType={item.contentType} chosen= {item.chosen} chosenHandler={chosenHandler}></Card>
            )}
        </View>
    );
}

const styles = StyleSheet.create({

    questionPart: {
        flexDirection: "row",
        width: "80%",
        marginVertical: 20,
        alignItems:"center"
    },
    question: {
        flexDirection: "column",
        width: "80%",
        marginVertical: 20,
        borderColor:"gray",
        borderRadius:10,
        borderWidth:1,
        alignItems:"center"
    },
    questionNum:{
        color:"red",
        fontSize:18,
        width:"100%",
        alignItems:"center"

    },
    questionText: {
        marginHorizontal: 10,
        fontSize: 18
    },
    container: {
        borderColor: "gray",
        borderRadius: 30,
        borderWidth: 2,
        padding: 20,
        backgroundColor:"#ffd700"
    }
})
export default Question;
