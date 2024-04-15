import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet'; 
import { FontAwesome } from '@expo/vector-icons'; 
const screenDimension = Dimensions.get("screen");
const isPhone = screenDimension.width < 900;


export function SlingloadTitle({ title, navigation, videoName, sequenceName }) {
    const theme = useTheme();
    return (
      <View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={styles.inspectorTitle}>{title}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <View style={{marginBottom: 0, marginTop: isPhone? 25 :60}}>
          <TouchableOpacity onPress={() => navigation.navigate(videoName)}>
          <View style={[styles.basicButton, {backgroundColor: theme.colors.backdrop, borderColor: theme.colors.inverseSurface, flexDirection: 'row'}]}>
              <View style={[styles.innerBox,{backgroundColor: theme.colors.surfaceDisabled, borderColor: theme.colors.inverseSurface}]}>
                <Text style={[styles.slButtonText, {color: theme.colors.inverseSurface}]}>Begin Video</Text>
              </View>
              <View style={{paddingLeft: isPhone? 20 : 25, justifyContent: 'center'}}>
                <FontAwesome name="chevron-right" size={isPhone? 16 : 40} color={theme.colors.primary} />
              </View>
            </View>
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity onPress={() => navigation.navigate(sequenceName)}>
          <View style={[styles.basicButton, {backgroundColor: theme.colors.backdrop, borderColor: theme.colors.inverseSurface, flexDirection: 'row', alignContent: 'center'}]}>
              <View style={[styles.innerBox,{backgroundColor: theme.colors.surfaceDisabled, borderColor: theme.colors.inverseSurface}]}>
                <Text style={[styles.slButtonText, {color: theme.colors.inverseSurface}]}>Sequence</Text>             
              </View>
              <View style={{paddingLeft: isPhone? 20 : 25, alignSelf: 'center', justifyContent: 'center'}}>
              <FontAwesome name="chevron-right" size={isPhone? 16 : 40} color={theme.colors.primary} />
              </View>
            </View>          
          </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }


//   <View style={{alignSelf: 'center', marginTop: 50}}>
//   <TouchableOpacity onPress={() => navigation.navigate('Placard')}>
//     <View style={styles.walkThrough}>
//       <View style={styles.innerBox}>
//         <Text style={styles.walkThroughText}>Begin Video</Text>
//       </View>
//       <View style={{paddingLeft: 11}}>
//         <FontAwesome name="chevron-right" size={16} color="#ffcc01" />
//       </View>
//     </View>

//   </TouchableOpacity>
// // </View>

