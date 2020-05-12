import React, {useState} from "react"
import {Text, StyleSheet, View} from "react-native"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Card from "./Card"

const Question=props=>{

    const [chosenIndex, setChosenIndex]=useState(props.chosenIndex);//
    chosenHandler={}//doldur
    return(
        <View style={styles.container}>
            <View style={styles.questionPart}>
                <Text style={styles.questionText}> {props.questionNum}</Text> 
                <Text style={styles.questionText}> {props.questionText}</Text> 
           </View>
           {props.choices.map((item)=>
               <Card content={item.label} contentType={item.contentType}></Card>
           )}
        </View>
    );
}

const styles=StyleSheet.create({

    questionPart:{
        flexDirection:"row",
        width:"80%",
        marginVertical:20
    },
    questionText:{
        marginHorizontal:10,
        fontSize:20
    },
    container:{
        borderColor:"gray",
        borderRadius:30,
        borderWidth:2,
        padding:20
    }
})
export default Question;
