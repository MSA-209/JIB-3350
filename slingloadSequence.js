import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import { FontAwesome } from '@expo/vector-icons'; 

export function SlingloadSequence({navigation, inspectionSteps, videoName, nextItem }) {
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


  return (
    <View>
    <View style={{marginTop: 10}}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>{stepList}</Text>
        <View style={{flexDirection: 'row', marginLeft: '60%'}}>
          <TouchableOpacity onPress={goPreviousStep}>
            <View style={{flexDirection: 'flex-end', marginRight: 10}}>
            <View style={[styles.chevronButton, {borderColor: theme.colors.primary}]}>
              <View style={{alignSelf: 'center', marginTop: 7, marginLeft: -2}}>
                <FontAwesome name="chevron-left" size={15} color={theme.colors.primary} />
              </View>
            </View>
            <View>
              <Text style={{color:theme.colors.primary, fontSize: 13, marginTop: 3}}>Step</Text>
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
              <Text style={{color:theme.colors.primary, fontSize: 13, marginTop: 3}}>Step</Text>
            </View>
          </View>             
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: '60%', marginBottom: 10, marginLeft: '70%' }}>
        <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Next </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={goNextStep}>
          <View style={[styles.chevronButton, {borderColor: theme.colors.primary}]}>
          <Text style={{color:theme.colors.primary, fontSize: 20, fontWeight: 700, marginTop: 5}}>?</Text>
          </View>
        </TouchableOpacity>
      </View>


      {/* {isVisible && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Hello</Text>
        </View>
      )} */}
    </View>
  );
}
