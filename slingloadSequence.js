import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import { FontAwesome } from '@expo/vector-icons'; 
import ModelComp from './ModelComp';
import SlingloadDropdown from './slingload';
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
    <ScrollView style={[styles.scrollView]} showsVerticalScrollIndicator={false}>
      <View style={{justifyContent: 'center',  backgroundColor: theme.colors.backdrop}}>

      {/* <View style={[styles.slingloadSequenceLayout, {borderColor: isPhone? 'none' : theme.colors.primary, borderWidth: 0}]}> */}

    <View style={[{flexDirection: 'row', borderColor: isPhone? 'none' : theme.colors.primary, borderWidth: 0}]}>
      <View style={[styles.untimedTestC1]}>
        <View style={{alignSelf: 'center', marginLeft: isPhone? 'auto' : 20}}>
          <Text style={{color: isPhone? '#000000' : '#ffffff', alignSelf: 'center', flexWrap: 'nowrap', 
                fontSize: isPhone? 20 : 40, marginBottom: isPhone? 10 : 20, display: 'flex', 
                marginTop: isPhone? 15 : 30}}>Inspection Steps</Text>
        {/* <View style={{backgroundColor:theme.colors.primary, width: 150, height: 3, marginBottom: 15}}></View> */}
      </View>
        <View style={styles.inspectText}>
            <Text style={{color: isPhone? '#000000' : '#E8E2D9', fontSize: isPhone? 20 : 24, marginLeft: isPhone? 'auto' : 25, marginBottom: 10}}>{stepList}</Text>
        </View>
      <View style={{alignSelf: 'center', marginTop: isPhone? 'auto' : 0}}>
        <View style={{flexDirection: 'row', gap: 15, alignSelf: 'center'}}>
          <View>
            <TouchableOpacity onPress={goPreviousStep}>
              <View style={styles.preNextStepButton}>
                <Text style={{color: '#E8E2D9', fontSize: isPhone? 16 : 18, alignSelf: 'center'}}>Previous Step</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={goNextStep}>
              <View style={styles.preNextStepButton}>
                  <Text style={{color: '#E8E2D9', fontSize: isPhone? 16 : 18, alignSelf: 'center'}}>Next Step</Text>
              </View>             
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(videoName)}>
          <View style={[styles.preNextStepButton, {width: isPhone? 'auto' : 335, alignSelf: 'center'}]}>
            <Text style={{color: '#E8E2D9', fontSize: isPhone? 16 : 18, alignSelf: 'center'}}>Watch Video</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={[styles.untimedTestC2]}> 
      <View>
        <ModelComp imageArray = {itemName}/>
      </View>
      <View>
    <View style={{flexDirection: 'row', marginTop: 0, marginRight: isPhone? 5 : 0}}>
        {extraTitle || extraInfo || extraPhoto ? (        
        <TouchableOpacity onPress={toggleBoxVisibility}>
        <View style={{marginLeft: isPhone? 'auto' : 15, marginTop: isPhone? 'auto' : -30,  borderColor: '#ffffff', marginBottom: isPhone? 10 : 20, borderWidth: isPhone? 2 : 6, height: isPhone? 'auto' : 85, width: isPhone? 'auto' : 85, borderRadius: 85, justifyContent: 'center', alignSelf: 'center'}}>
            <Text style={{color: '#ffffff', fontSize: isPhone? 20 : 60, fontWeight: 600, marginTop: 2, alignSelf: 'center'}}>?</Text>
            </View>     
          </TouchableOpacity>) : (<View></View>)}
        </View>
    </View>
    <View style={[styles.descriptionTextBox]}>
        <View style={{flex: 0.9}}><Text style={{color: '#ffffff', fontSize: isPhone? 25 : 35, fontWeight: 500, alignSelf: 'center'}}>{itemName}</Text></View>
        <View style={{marginRight: 10, flex: 0.1}}>
          <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
              <View style={{marginTop: 5}}>
              <FontAwesome name="chevron-right" size={isPhone? 20 : 35} color='#ffffff'/>
            </View>
          </TouchableOpacity>
        </View>
    </View>
    </View>
  </View>
<View>
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
            </View>
    </ScrollView>
  );
}
