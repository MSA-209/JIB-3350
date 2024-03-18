import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen, Button} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme} from 'react-native-paper';
import { styles } from './styleSheet';
import { FontAwesome } from '@expo/vector-icons'; 

export function SlingloadQuizScreen({ navigation, route }) {
    return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
        <View style={{marginTop: -9, marginBottom: 8}}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
                <View style={{alignSelf: 'center', display: 'flex', flex: 1}}>
                <Text style={{alignSelf: 'center', color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>QUIZZES</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Untimed Quiz')}>
            <View style={styles.walkThrough}>
              <View style={styles.innerBox}>
                <Text style={styles.walkThroughText}>Untimed Tests</Text>
              </View>
              <View style={{paddingLeft: 11}}>
                <FontAwesome name="chevron-right" size={16} color="#ffcc01" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
    );
}

export function UntimedQuizScreen({ navigation, route }) {
    //truth table for items should match with pictures
    const [items, setItems] = useState({
        placard: null,
        apex: null,
        grabhook: null,
        ChainClevis : null,
        MediumClevis : null,
    });
    const [currentItem, setCurrentItem] = useState('placard');
    const [deficiencyTitle, setDeficiencyTitle] = useState('Deficiency');
    const [nextTitle, setNextTitle] = useState('Next');
    //iterates through items when deficiency/next is pressed and if last item is pressed goes to end screen
    useEffect(() => {
        if (items[currentItem] !== null) {
            const itemKeys = Object.keys(items);
            const currentIndex = itemKeys.indexOf(currentItem);
            if (currentIndex < itemKeys.length - 1) {
                setCurrentItem(itemKeys[currentIndex + 1]);
            } else {
                navigation.navigate('End Quiz');
            }
        }
    }, [items]);
    useEffect(() => {
        if (items[currentItem] === null) {
            setDeficiencyTitle('Deficiency');
            setNextTitle('Next');
        } else if (items[currentItem] === true) {
            setDeficiencyTitle('Unmark');
        } else {
            setNextTitle('Unmark');
        }
        console.log(currentItem);
    }, [currentItem]);
    const handleDeficiencyPress = () => {
        if (items[currentItem] === null) {
            setItems(prevItems => ({ ...prevItems, [currentItem]: true }));
        } else {
            setItems(prevItems => ({ ...prevItems, [currentItem]: null }));
        }
    };
    const handleLeftPress = () => {
        const itemKeys = Object.keys(items);
        const currentIndex = itemKeys.indexOf(currentItem);
        if (currentIndex > 0) {
            setCurrentItem(itemKeys[currentIndex - 1]);
        }
        console.log(itemKeys[currentIndex])
    };
    const handleRightPress = () => {
        const itemKeys = Object.keys(items);
        const currentIndex = itemKeys.indexOf(currentItem);
        if (currentIndex < itemKeys.length - 1) {
            setCurrentItem(itemKeys[currentIndex + 1]);
        }
        console.log(itemKeys[currentIndex])
    };
    const handleNextPress = () => {
        setItems(prevItems => ({ ...prevItems, [currentItem]: false }));
    };
    return (
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
            <View style={{marginTop: -9, marginBottom: 8}}>
                <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
                    <View style={{alignSelf: 'center', display: 'flex', flex: 1}}>
                        <Text style={{alignSelf: 'center', color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Untimed Test</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={handleLeftPress}>
                        <FontAwesome name="chevron-left" size={16} color="#ffcc01" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRightPress}>
                        <FontAwesome name="chevron-right" size={16} color="#ffcc01" />
                    </TouchableOpacity>
                    <Button title={deficiencyTitle} color="red" onPress={handleDeficiencyPress} />
                    <Button title={nextTitle} color="green" onPress={handleNextPress} />
                </View>
            </View>
        </ScrollView>
    );
}



export function endQuizScreen({ navigation, route }) {
    return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
        <View style={{marginTop: -9, marginBottom: 8}}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
                <View style={{alignSelf: 'center', display: 'flex', flex: 1}}>
                <Text style={{alignSelf: 'center', color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>End Screen stat</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}