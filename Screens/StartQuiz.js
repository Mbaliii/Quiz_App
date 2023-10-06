import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import questions from "./questions";



const StartQuiz = () => {
    const data = questions;
    const currentQuestion = data[0];
    console.log(currentQuestion);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Quizz</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20, 
    },
});

export default StartQuiz;
