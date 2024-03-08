import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, Dimensions} from 'react-native';
import { styles } from './styleSheet'; 
import ExpoTHREE, { Renderer} from 'expo-three';
import {THREE} from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {Asset} from 'expo-asset';
import { err } from 'react-native-svg';

const ModelComp = ({imageArray}) => {
    
    

    console.log(imageArray)
    const [currentRow, setCurrentRow] = React.useState(Math.floor(imageArray.length/2));
    const [currentCol, setCurrentCol] = React.useState(Math.floor(imageArray[0].length/2));
    const changeImage = (direction) => {
        if (direction = 'up') {
            setCurrentRow((currentRow - 1) % imageArray.length);
        }
        else if (direction = 'down') {
            setCurrentRow((currentRow + 1) % imageArray.length);
        }
        else if (direction = 'left') {
            setCurrentCol((currentCol - 1) % imageArray[0].length);
        }
        else if (direction = 'right') {
            setCurrentCol((currentCol + 1) % imageArray[0].length);
        }
        else if (direction = 'home') {
            setCurrentRow(Math.floor(imageArray.length/2));
            setCurrentCol(Math.floor(imageArray[0].length/2));
        }
    } 
    return(
        <View >
            
            <Text>Checking for working</Text>
            <TouchableOpacity onPress={() => changeImage('up')} style ={{ backgroundColor: '#ffcc01', borderRadius:8}}><Text>up</Text></TouchableOpacity>
            <View style ={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => changeImage('left')} style ={{ backgroundColor: '#ffcc01', borderRadius:8}}><Text>left</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeImage('home')} style ={{ backgroundColor: '#ffcc01', borderRadius:8}}><Text>home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeImage('right')} style ={{ backgroundColor: '#ffcc01', borderRadius:8}}><Text>right</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => changeImage('down')} style ={{ backgroundColor: '#ffcc01', borderRadius:8}}><Text>down</Text></TouchableOpacity>
        </View>
    )
}
export default ModelComp;