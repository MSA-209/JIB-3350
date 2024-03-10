import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, Dimensions} from 'react-native';
import { styles } from './styleSheet'; 

const imageSources = {
    "Placard" : [[ require('/assets/placard_Left_Top.png'), require('/assets/placard_Center_Top.png'), require('/assets/placard_Right_Top.png')],
    [ require('/assets/placard_Left.png'), require('/assets/placard_Center.png'),require('/assets/placard_Right.png')],
    [ require('/assets/placard_Left_Bottom.png'), require('/assets/placard_Bottom.png'), require('/assets/placard_Right_Bottom.png')]
        ],
    "Apex" :[[require('/assets/Apex_Left_Top.png'), require('/assets/Apex_Center_Top.png'), require('/assets/Apex_Right_Top.png')],
    [ require('/assets/Apex_Left.png'), require('/assets/Apex_Center.png'),require('/assets/Apex_Right.png')],
    [ require('/assets/Apex_Left_Bottom.png'), require('/assets/Apex_Bottom.png'), require('/assets/Apex_Right_Bottom.png')]],
    "Grabhook" :[[require('/assets/GrabHook_Left_Top.png'), require('/assets/GrabHook_Center_Top.png'), require('/assets/GrabHook_Right_Top.png')],
    [ require('/assets/GrabHook_Left.png'), require('/assets/GrabHook_Center.png'),require('/assets/GrabHook_Right.png')],
    [ require('/assets/GrabHook_Left_Bottom.png'), require('/assets/GrabHook_Bottom.png'), require('/assets/GrabHook_Right_Bottom.png')]],
    "ChainClevis":[[require('/assets/ChainClevis_Left_Top.png'), require('/assets/ChainClevis_Center_Top.png'), require('/assets/ChainClevis_Right_Top.png')],
    [ require('/assets/ChainClevis_Left.png'), require('/assets/ChainClevis_Center.png'),require('/assets/ChainClevis_Right.png')],
    [ require('/assets/ChainClevis_Left_Bottom.png'), require('/assets/ChainClevis_Bottom.png'), require('/assets/ChainClevis_Right_Bottom.png')]],
    "MediumClevis":[[require('/assets/MediumClevis_Left_Top.png'), require('/assets/MediumClevis_Center_Top.png'), require('/assets/MediumClevis_Right_Top.png')],
    [ require('/assets/MediumClevis_Left.png'), require('/assets/MediumClevis_Center.png'),require('/assets/MediumClevis_Right.png')],
    [ require('/assets/MediumClevis_Left_Bottom.png'), require('/assets/MediumClevis_Bottom.png'), require('/assets/MediumClevis_Right_Bottom.png')]],
    "Suspension1":[[require('/assets/Suspension1_Left_Top.png'), require('/assets/Suspension1_Center_Top.png'), require('/assets/Suspension1_Right_Top.png')],
    [ require('/assets/Suspension1_Left.png'), require('/assets/Suspension1_Center.png'),require('/assets/Suspension1_Right.png')],
    [ require('/assets/Suspension1_Left_Bottom.png'), require('/assets/Suspension1_Bottom.png'), require('/assets/Suspension1_Right_Bottom.png')]],
    "Suspension2-4":[[require('/assets/Suspension2_Left_Top.png'), require('/assets/Suspension2_Center_Top.png'), require('/assets/Suspension2_Right_Top.png')],
    [ require('/assets/Suspension2_Left.png'), require('/assets/Suspension2_Center.png'),require('/assets/Suspension2_Right.png')],
    [ require('/assets/Suspension2_Left_Bottom.png'), require('/assets/Suspension2_Bottom.png'), require('/assets/Suspension2_Right_Bottom.png')]],
    "SusStrapOrder":[[require('/assets/SusStrapOrder_Left_Top.png'), require('/assets/SusStrapOrder_Center_Top.png'), require('/assets/SusStrapOrder_Right_Top.png')],
    [ require('/assets/SusStrapOrder_Left.png'), require('/assets/SusStrapOrder_Center.png'),require('/assets/SusStrapOrder_Right.png')],
    [ require('/assets/SusStrapOrder_Left_Bottom.png'), require('/assets/SusStrapOrder_Bottom.png'), require('/assets/SusStrapOrder_Right_Bottom.png')]],
    "StrapSide1&2":[[require('/assets/StrapSide_Left_Top.png'), require('/assets/StrapSide_Center_Top.png'), require('/assets/StrapSide_Right_Top.png')],
    [ require('/assets/StrapSide_Left.png'), require('/assets/StrapSide_Center.png'),require('/assets/StrapSide_Right.png')],
    [ require('/assets/StrapSide_Left_Bottom.png'), require('/assets/StrapSide_Bottom.png'), require('/assets/StrapSide_Right_Bottom.png')]],
    "TopLateralC1":[[require('/assets/TopLateralC1_Left_Top.png'), require('/assets/TopLateralC1_Center_Top.png'), require('/assets/TopLateralC1_Right_Top.png')],
    [ require('/assets/TopLateralC1_Left.png'), require('/assets/TopLateralC1_Center.png'),require('/assets/TopLateralC1_Right.png')],
    [ require('/assets/TopLateralC1_Left_Bottom.png'), require('/assets/TopLateralC1_Bottom.png'), require('/assets/TopLateralC1_Right_Bottom.png')]],
    "MidLateralC1":[[require('/assets/MidLateralC1_Left_Top.png'), require('/assets/MidLateralC1_Center_Top.png'), require('/assets/MidLateralC1_Right_Top.png')],
    [ require('/assets/MidLateralC1_Left.png'), require('/assets/MidLateralC1_Center.png'),require('/assets/MidLateralC1_Right.png')],
    [ require('/assets/MidLateralC1_Left_Bottom.png'), require('/assets/MidLateralC1_Bottom.png'), require('/assets/MidLateralC1_Right_Bottom.png')]],
    "BotLateralC1":[[require('/assets/BotLateralC1_Left_Top.png'), require('/assets/BotLateralC1_Center_Top.png'), require('/assets/BotLateralC1_Right_Top.png')],
    [ require('/assets/BotLateralC1_Left.png'), require('/assets/BotLateralC1_Center.png'),require('/assets/BotLateralC1_Right.png')],
    [ require('/assets/BotLateralC1_Left_Bottom.png'), require('/assets/BotLateralC1_Bottom.png'), require('/assets/BotLateralC1_Right_Bottom.png')]]
    }; 


const ModelComp = ({imageArray}) => {
    const images = imageSources[imageArray]
    console.log(images)
    const [currentRow, setCurrentRow] = React.useState(Math.floor(images.length/2));
    const [currentCol, setCurrentCol] = React.useState(Math.floor(images[0].length/2));
    const changeImage = (direction) => {
        if (direction === 'Up') {
            setCurrentRow((currentRow - 1 + images.length) % images.length);
        }
        else if (direction === 'Down') {
            setCurrentRow((currentRow + 1) % images.length);
        }
        else if (direction === 'Left') {
            setCurrentCol((currentCol - 1 + images[0].length) % images[0].length);
        }
        else if (direction === 'Right') {
            setCurrentCol((currentCol + 1) % images[0].length);
        }
        else if (direction === 'Home') {
            setCurrentRow(Math.floor(images.length/2));
            setCurrentCol(Math.floor(images[0].length/2));
        }
    } 
    return(
        <View >
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={images[currentRow][currentCol]}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            
            <View style ={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => changeImage('Left')} style ={styles.ModelCompDirections}><Text>Left</Text></TouchableOpacity>
            <View style ={{alignItems:"center"}}>
            <TouchableOpacity onPress={() => changeImage('Up')} style ={styles.ModelCompDirections}><Text>Up</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeImage('Home')} style ={styles.ModelCompDirections}><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => changeImage('Down')} style ={styles.ModelCompDirections}><Text>Down</Text></TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => changeImage('Right')} style ={styles.ModelCompDirections}><Text>Right</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default ModelComp;
