import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet'; 
import { Video } from 'expo-av';
const videoSources = {
  'Placard': require('/assets/placard_video.mp4'), 
  'Apex' :require('/assets/Apex.mp4'),
  'Grabhook' :require('/assets/grabhook.mp4'),
  'ChainClevis' :require('/assets/chain_clevis.mp4'),
  'MediumClevis' :require('/assets/medium_clevis.mp4'),
  'Suspension1' :require('/assets/Suspension_strap_1.mp4'),
  'Suspension2' :require('/assets/Suspension_Strap_2.mp4'),
  'Suspension3' :require('/assets/Suspension_Strap_3.mp4'),
  'Suspension4' :require('/assets/Suspension_Strap_4.mp4'),
  'SusStrapOrder' :require('/assets/Suspension_Strap_Order.mp4'),
  'StrapSide' :require('/assets/188_strap_side.mp4'),
  'S1P2' :require('/assets/188_strap_side_P2.mp4'),
  'TopLateralC1' :require('/assets/Top_Lateral_C1.mp4'),
  'MidLateralC1' :require('/assets/MId_Lateral_C1.mp4'),
  'BotLateralC1' :require('/assets/Bottom_Lateral_C1.mp4'),
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