import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, Dimensions} from 'react-native';
import { styles } from './styleSheet'; 
const ModelComp = ({imageArray}) => {
    const images = imageArray["Placard"]
    console.log(images)
    const [currentRow, setCurrentRow] = React.useState(Math.floor(images.length/2));
    const [currentCol, setCurrentCol] = React.useState(Math.floor(images[0].length/2));
    const changeImage = (direction) => {
        if (direction === 'up') {
            setCurrentRow((currentRow - 1 + images.length) % images.length);
        }
        else if (direction === 'down') {
            setCurrentRow((currentRow + 1) % images.length);
        }
        else if (direction === 'left') {
            setCurrentCol((currentCol - 1 + images[0].length) % images[0].length);
        }
        else if (direction === 'right') {
            setCurrentCol((currentCol + 1) % images[0].length);
        }
        else if (direction === 'home') {
            setCurrentRow(Math.floor(images.length/2));
            setCurrentCol(Math.floor(images[0].length/2));
        }
    } 
    return(
        <View >
            <Text style = {{color: 'white'}}>{images[currentRow][currentCol]}</Text>
            <View>
            {/* <Image source={{uri: images[currentRow][currentCol].uri}}/> */}
            </View>
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
