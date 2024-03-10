import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, Dimensions} from 'react-native';
import { styles } from './styleSheet'; 

const imageSources = {
    "Placard" : [[ require('/assets/placard_Left_Top.png'), require('/assets/placard_Center_Top.png'), require('/assets/placard_Right_Top.png')],
    [ require('/assets/placard_Left.png'), require('/assets/placard_Center.png'),require('/assets/placard_Right.png')],
    [ require('/assets/placard_Left_Bottom.png'), require('/assets/placard_Bottom.png'), require('/assets/placard_Right_Bottom.png')]
        ]}; 


const ModelComp = ({imageArray}) => {
    const images = imageSources[imageArray]
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
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={images[currentRow][currentCol]}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
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
