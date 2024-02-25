import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet'; 

export function SlingloadTitle({ title, navigation, videoName, sequenceName }) {
    const theme = useTheme();
    return (
      <View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}}>{title}</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate(videoName)}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Begin Video</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(sequenceName)}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Sequence</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }