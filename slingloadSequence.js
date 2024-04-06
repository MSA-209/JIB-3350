import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import { FontAwesome } from '@expo/vector-icons'; 
import ModelComp from './ModelComp';
const screenDimension = Dimensions.get("screen");
const isPhone = screenDimension.width < 900;

const imageSources = {
  'Apex': require('/assets/Apex_Extra.png'), 
  'Grabhook' :require('/assets/Grabhook_Extra.png'),
  'MedClevis' :require('/assets/MedClevis_Extra.png'),
  'SusOrder' :require('/assets/SusOrder_Extra.png'),
  'TopLateralC1' :require('/assets/TopLateralC1_Extra.png'),
};
export function SlingloadSequence({navigation, itemName, inspectionSteps, videoName, nextItem, extraTitle, extraInfo, extraPhoto }) {
  const theme = useTheme();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepList, setStepList] = useState('');
  const imageSource = imageSources[extraPhoto];
  
  if (stepList.length == 0) {
    setStepList(stepList + inspectionSteps[currentStepIndex] + '\n');
    setCurrentStepIndex(currentStepIndex => currentStepIndex + 1);
  }
  const goNextStep = () => {
    if (currentStepIndex <= inspectionSteps.length - 1) {
      setStepList(stepList + inspectionSteps[currentStepIndex] + '\n');
      setCurrentStepIndex(currentStepIndex => currentStepIndex + 1);
    }
  };
  const goPreviousStep = () => {
    if (currentStepIndex > 0) {
      const lastIndex = stepList.lastIndexOf('\n', stepList.length - 2);
      const newStepList = stepList.slice(0, lastIndex + 1);
      setStepList(newStepList);
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleCloseBox = () => {
    setIsBoxVisible(false);
  };
  if (extraInfo) {
    extraInfo = '• ' + extraInfo.replace(/\n/g, '\n• ');
  }
  console.log(extraPhoto)
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection: 'row', marginTop: 30, marginLeft: isPhone? 20 : 40}}>
      <View style={{flex: 0.7}}><Text style={{marginLeft: isPhone? 'auto' : 20, color: theme.colors.primary, fontSize: isPhone? 25 : 40, fontWeight: 600}}>{itemName}</Text></View>
      <View style={{marginRight: 10, marginBottom: 10, flex: 0.3}}>
        <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
          <View style={[styles.nextButtonSlingload, {flexDirection: 'row', marginRight: isPhone? 'auto' : 20}]}>
            <Text style={[{color:theme.colors.primary, fontSize: isPhone? 25 : 30}, styles.nextButtonSlingload]}>Next </Text>
            <View style={{marginTop: 5}}>
            <FontAwesome name="chevron-right" size={isPhone? 20 : 35} color={theme.colors.primary} />
          </View>
          </View>
        </TouchableOpacity>
      </View>
      </View>

   
    <View style={[styles.slingloadSequenceLayout, {borderColor: isPhone? 'none' : theme.colors.primary, borderWidth: 0}]}>
      <View style={[styles.objectSpace , {borderRadius: isPhone? 10 : 20, backgroundColor: theme.colors.background, borderColor: isPhone? 'none' : theme.colors.primary, borderWidth: 1}]}>
          <View style={styles.imageSize}>
            <ModelComp imageArray = {itemName}/>
          </View>
        </View>

    <View style={[styles.inspectionBox, {borderColor: isPhone? 'none' : theme.colors.primary, borderWidth: 1}]}>
    <View style={styles.iconInspection}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={goPreviousStep}>
            <View style={{flexDirection: 'flex-end', position: 'relative'}}>
            <View style={[styles.chevronButton, {borderColor: theme.colors.primary, marginRight: isPhone? 5 : 10}]}>
              <View style={{alignSelf: 'center', marginTop: isPhone? 7 : 10, marginLeft: -2}}>
                <FontAwesome name="chevron-left" size={isPhone? 15 : 30} color={theme.colors.primary} />
              </View>
            </View>
            <View>
              <Text style={{color:theme.colors.primary, fontSize: 13, marginTop: 3}}></Text>
            </View>
          </View>          
          </TouchableOpacity>

          <TouchableOpacity onPress={goNextStep}>
          <View>
          <View style={[styles.chevronButton, {borderColor: theme.colors.primary}]}>
              <View style={{alignSelf: 'center', marginTop: isPhone? 7 : 10, marginRight: -2}}>
                <FontAwesome name="chevron-right" size={isPhone? 15 : 30} color={theme.colors.primary} />
              </View>
            </View>
            <View>
              <Text style={{color:theme.colors.secondary, fontSize: 13, marginTop: 3}}></Text>
            </View>
          </View>             
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', marginTop: 10, marginRight: isPhone? 5 : 10}}>
        {extraTitle || extraInfo || extraPhoto ? (        
        <TouchableOpacity onPress={toggleBoxVisibility}>
            <View style={[styles.chevronButton, {borderColor: theme.colors.primary, marginRight: isPhone? 5 : 10}]}>
            <Text style={{color:theme.colors.primary, fontSize: isPhone? 20 : 40, fontWeight: 700, marginTop: 2}}>?</Text>
            </View>     
          </TouchableOpacity>) : (<View></View>)}

          <TouchableOpacity onPress={goPreviousStep}>
            <View style={{flexDirection: 'flex-end', position: 'relative'}}>
              <View style={{alignSelf: 'center', marginRight: isPhone? 5 : 10, marginRight: isPhone? 5 : 20, marginTop: isPhone? 'auto': 5}}>
              <TouchableOpacity onPress={() => navigation.navigate(videoName)}>
                <FontAwesome name="video-camera" size={isPhone? 25 : 50} color={theme.colors.primary} />
                </TouchableOpacity>
              </View>
            <View>
              <Text style={{color:theme.colors.secondary, fontSize: 13, marginTop: 3}}></Text>
            </View>
          </View>          
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ObjectDescription}>
      <View style={{width: isPhone? 'auto' : 500, marginLeft: isPhone? 'auto' : 50}}>
          <Text style={{color: theme.colors.primary, flexWrap: 'nowrap', fontSize: isPhone? 20 : 40, fontWeight: 700, marginBottom: 15, flex: 1}}>Inspection Steps</Text>
        {/* <View style={{backgroundColor:theme.colors.primary, width: 150, height: 3, marginBottom: 15}}></View> */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderLeftWidth: isPhone? 2 : 3, paddingRight: 5, borderColor: theme.colors.primary, marginLeft: isPhone? 'auto' : 50, paddingTop: isPhone? 'auto': 5}}>
        </View>
        <View style={styles.inspectText}>
            <Text style={{color: theme.colors.secondary, flexWrap: 'wrap', marginVertical: isPhone? 5 : 10, fontSize: isPhone? 20 : 32}}>{stepList}</Text>
            </View>

        </View>
             {/* THIS IS THE BOX FOR EXTRA INFORMATION */}
      </View>
    </View>
    </View>
         {isBoxVisible && (
        <View style={styles.infoBox}>
          {/* Close button */}
          <TouchableOpacity onPress={handleCloseBox}>
            <View style={styles.xBox}>
              <Text style={styles.xStyle}>X</Text>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor: '#ffcc01', height:1}}></View>
          {/* Text content */}
          {extraTitle || extraInfo || extraPhoto ? (
          <View>
            {extraTitle && <Text style={styles.infoText}>1.{extraTitle}</Text>}
            {extraInfo && <Text style={styles.infoText}>{extraInfo}</Text>}
            {extraPhoto && 
              <Image 
                source={imageSource}
                style={{
                  width: 'auto',
                  height: 230,
                  zIndex: 5,
                  resizeMode: 'contain',
                }}
              />
            }
          </View>
        ) : (<View></View>)}
        </View>
      )}
    </ScrollView>
  );
}
