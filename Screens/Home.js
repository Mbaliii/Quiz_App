import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image style={{ height: 370, width: "100%", resizeMode: "contain" }}
                source={{ uri: 'https://t3.ftcdn.net/jpg/02/31/07/66/360_F_231076694_rxAik9swiCT8WEwHfYXu0noL7K8a382k.jpg' }}>
            </Image>

            <View style={{ padding: 10 }}>
                <Text style={{ textAlign: 'center', color: 'blue', fontSize: 20, fontWeight: "600" }}>QUIZ RULES</Text>
                <View style={{ padding: 10, borderRadius: 9, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', marginLeft: 10 }}>1.</Text>
                        <Text style={{ marginLeft: 4, color: 'black', fontSize: 15, fontWeight: "500" }}>For each correct answer you get 5 points</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ color: 'black', marginLeft: 10 }}>2.</Text>
                        <Text style={{ marginLeft: 4, color: 'black', fontSize: 15, fontWeight: "500" }}>There is no negative marking for wrong answer</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ color: 'black', marginLeft: 10 }}>3.</Text>
                        <Text style={{ marginLeft: 4, color: 'black', fontSize: 15, fontWeight: "500" }}>Each Questioon has a time limit of 15sec</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ color: 'black', marginLeft: 10 }}>4.</Text>
                        <Text style={{ marginLeft: 4, color: 'black', fontSize: 15, fontWeight: "500" }}>You should answer all the questions mandatory</Text>
                    </View>
                </View>
            </View>

            <Pressable onPress={() => navigation.navigate("Quiz")} style={{backgroundColor: "#778899", padding: 7, width:120,borderRadius:25, marginLeft:'auto', marginRight: "auto", marginTop:30}}>
                <Text style={{color: 'white', fontWeight: "600", textAlign:'center'}}>Start Quiz</Text>
            </Pressable>
        </View>
    );
};

export default Home;
