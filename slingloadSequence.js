import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import { FontAwesome } from '@expo/vector-icons'; 
import ModelComp from './ModelComp';

export function SlingloadSequence({navigation, itemName, inspectionSteps, videoName, nextItem, extraTitle, extraInfo, extraPhoto }) {
  const theme = useTheme();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepList, setStepList] = useState('');
  
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


  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{padding: 3, marginLeft: 20, marginTop: 30, marginRight: 20, backgroundColor: '#000000', borderRadius: 10}}>
        <View style={{flex: 1, resizeMode: 'contain'}}>
          <ModelComp imageArray = {itemName}/>
        </View>
      </View>

    {/* THIS IS THE BOX FOR EXTRA INFORMATION */}
      {isBoxVisible && (
        <View style={styles.boxContainer}>
          {/* Close button */}
          <TouchableOpacity onPress={handleCloseBox} style={styles.closeButton}>
            <View style={{borderColor: '#ffffff', alignItems: 'center', width: 25, height: 25, margin: 3, borderWidth: 1}}>
              <Text style={{color: '#ffffff', alignSelf: 'center', fontSize: 20}}>X</Text>
            </View>
          </TouchableOpacity>
          {/* Text content */}
          <View style={{fontSize: 18, color: 'red', alignSelf: 'center'}}>
            <Text>CONTENT OF THE BOX</Text>
          </View>
        </View>
      )}
<View style={{flexDirection: 'row', alignItems: 'stretch', marginTop: 20, marginLeft: 15, marginRight: 15, padding: 20, gap: 0, backgroundColor: 'rgba(173, 173, 173, 0.3)', borderRadius: 10, marginLeft: 20, }}>
    <View style={{flex: 0.25, marginTop: 45}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={goPreviousStep}>
            <View style={{flexDirection: 'flex-end', position: 'relative'}}>
            <View style={[styles.chevronButton, {borderColor: theme.colors.primary, marginRight: 5}]}>
              <View style={{alignSelf: 'center', marginTop: 7, marginLeft: -2}}>
                <FontAwesome name="chevron-left" size={15} color={theme.colors.primary} />
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
              <View style={{alignSelf: 'center', marginTop: 7, marginRight: -2}}>
                <FontAwesome name="chevron-right" size={15} color={theme.colors.primary} />
              </View>
            </View>
            <View>
              <Text style={{color:theme.colors.secondary, fontSize: 13, marginTop: 3}}></Text>
            </View>
          </View>             
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', marginTop: 10, marginRight: 5}}>
        <TouchableOpacity onPress={toggleBoxVisibility}>
            <View style={[styles.chevronButton, {borderColor: theme.colors.primary, marginRight: 5}]}>
            <Text style={{color:theme.colors.primary, fontSize: 20, fontWeight: 700, marginTop: 2}}>?</Text>
            </View>     
          </TouchableOpacity>
          <TouchableOpacity onPress={goPreviousStep}>
            <View style={{flexDirection: 'flex-end', position: 'relative'}}>
              <View style={{alignSelf: 'center', marginTop: 5, marginLeft: 5}}>
                <FontAwesome name="video-camera" size={25} color={theme.colors.primary} />
              </View>
            <View>
              <Text style={{color:theme.colors.secondary, fontSize: 13, marginTop: 3}}></Text>
            </View>
          </View>          
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 0.7, marginLeft: -5}}>
      <View>
          <Text style={{color: theme.colors.primary, fontSize: 20, fontWeight: 700, marginBottom: 15}}>Inspection Steps</Text>
        {/* <View style={{backgroundColor:theme.colors.primary, width: 150, height: 3, marginBottom: 15}}></View> */}
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderLeftWidth: 2, paddingRight: 5, borderColor: theme.colors.primary}}>
        </View>
        <View>
            <Text style={{color: theme.colors.secondary, fontSize: 18, flexGrow: 'wrap', marginVertical: 5}}>{stepList}</Text>
            </View>

        </View>
      </View>
    </View>

      <View style={{marginTop: 0, marginBottom: 10, marginLeft: '80%'}}>
        <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
          <View style={{flexDirection: 'row', marginTop: 40}}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Next </Text>
            <View style={{marginTop: 5}}>
            <FontAwesome name="chevron-right" size={15} color={theme.colors.primary} />
          </View>
          </View>
        </TouchableOpacity>
      </View>



      <View>
      {/* Button to toggle box visibility */}


      {/* Box component */}
    </View>
    </ScrollView>
  );
}
