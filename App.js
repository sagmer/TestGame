import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from "./components/Card";
import { Video, Audio } from "expo-av"
import Question from "./components/Question"
export default function App() {

  let choices= [
    {label: 'Galatasaray', value: 0, contentType:"text", chosen:false },
    {label: 'Fenerbahce', value: 1 , contentType:"text" , chosen:false },
    {label: 'Besiktas', value: 2, contentType:"text" , chosen:false },
    {label: 'Sivasspor', value: 3, contentType:"text" , chosen:false },
    //{label: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', value: 3, contentType:"video"},
    //{label: '//www.youtube.com/watch?v=Hmx1fSY6uDE', value: 3, contentType:"video"  }
  ];
  let question=
  {
    text: "2019 sampiyonu kimdir?",
    uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  }
  ;
  [questionAnswers, setQuestionAnswers]= useState([])
  const questionAnsweredHandler=(props)=>{
    setQuestionAnswers((questionNum, answer)=>[...questionAnswers,{questionNum,answer}])
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require("./assets/gs.jpg")}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <Question 
      questionNum={1} question={question} 
      choices={choices} questionAnsweredHandler={questionAnsweredHandler}
      chosenIndex={"null"}
      >
      </Question>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'firebrick',
    alignItems: 'center',
    padding:40
    //justifyContent: 'center',
  },
  image:{
    width:null,
    height:null,
    flex:1
  },

  imageContainer:{
      width: "80%",
      height: 150,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: "black",
      overflow: "hidden",
      marginVertical: 10
  }
});
