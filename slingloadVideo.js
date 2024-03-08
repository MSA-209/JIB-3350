import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet'; 
import { Video } from 'expo-av';
const videoSources = {
  'Placard': require('./assets/placard_video.mp4')
};


export function SlingloadVideo({ navigation, videoName, sequenceName }) {
    const theme = useTheme();
    const videoSource = videoSources[videoName];
    return (
      <View>
        <View style={styles.card}>
                <View style={{alignItems: 'center', marginTop: 10}}>
              <Video 
              source={videoSource}
              style={styles.videoStyle}
              useNativeControls
              resizeMode={Video.RESIZE_MODE_CONTAIN}
            />   
            </View>
          <TouchableOpacity onPress={() => navigation.navigate(sequenceName)}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Skip </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }