import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';

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
    <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color: '#FFFFFF', fontSize: 20}}>{stepList}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={goPreviousStep}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Previous Step</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goNextStep}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}