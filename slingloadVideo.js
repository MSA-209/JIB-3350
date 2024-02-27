import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet'; 

export function SlingloadVideo({ navigation, videoName, sequenceName }) {
    const theme = useTheme();
    return (
      <View>
        <View style={styles.card}>
                <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{color:"#FFFFFF", fontSize: 20}}>{videoName}</Text>
            </View>
          <TouchableOpacity onPress={() => navigation.navigate(sequenceName)}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Skip </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }