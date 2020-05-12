import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from "./components/Card";
import { Video, Audio } from "expo-av"
import Question from "./components/Question"
export default function App() {

  let choices= [
    {label: 'Galatasaray', value: 0, contentType:"text" },
    {label: 'Fenerbahce', value: 1 , contentType:"text" },
    {label: 'Besiktas', value: 2, contentType:"text"  },
    {label: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', value: 3, contentType:"video"},
    //{label: '//www.youtube.com/watch?v=Hmx1fSY6uDE', value: 3, contentType:"video"  }
  ];
  let questionText="2019 sampiyonu kimdir?";
  [questionAnswers, setQuestionAnswers]= useState([])
  const questionAnsweredHandler=(props)=>{
    setQuestionAnswers((questionNum, answer)=>[...questionAnswers,{questionNum,answer}])
  }
  return (
    <View style={styles.container}>
      <Question 
      questionNum={1} questionText={questionText} 
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
    backgroundColor: '#ffddcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
