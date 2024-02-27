import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';

export function SlingloadSequence({navigation, inspectionSteps, videoName, nextItem }) {
  const theme = useTheme();
  return (
    <View>
    <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color:"#FFFFFF", fontSize: 20}}>{inspectionSteps}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate(nextItem)}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}