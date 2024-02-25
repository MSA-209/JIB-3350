import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import {SlingloadTitle} from './slingloadTitle.js';
export function SlingloadScreen({ navigation, route }) {
  const theme = useTheme();
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
        {/* <View style={{backgroundColor:'black', width: 100, height: 50, marginLeft: '38%', borderRadius: 25, marginTop: -25, zIndex: 1}}>
        <Image source={require("./assets/AssaultBadgeClear.png")} style={{
            width: 100,
            height: 45,
            resizeMode:"contain"
            }}/>
        </View>       */}
        <View style={{marginTop: -10, marginBottom: 8}}>
        <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
        </View>
        <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Placard')}>
            <Text style={{color:theme.colors.primary, fontSize: 20}}>Walkthroughs</Text>
          </TouchableOpacity>
        </View>

        </View>
    </ScrollView>
  );
}



export function PlacardScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Placard" navigation={navigation} videoName="Placard Video" sequenceName = "Placard Sequence" />
  </View>
</ScrollView>  
  );
}

export function PlacardVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Apex')}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Skip</Text>
        </TouchableOpacity>
      </View>
  </View>
</ScrollView>  
  );
}


export function PlacardSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color:"#FFFFFF", fontSize: 20}}>placard inspection steps</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 10, marginRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Apex')}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Next </Text>
        </TouchableOpacity>
      </View>
  </View>
</ScrollView>  
  );
}

export function ApexScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Apex" navigation={navigation} videoName="Apex Video" sequenceName = "Apex Sequence" />
  </View>
</ScrollView>  
  );
}

export function ApexVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color:"#FFFFFF", fontSize: 20}}>apex video</Text>
      </View>

  </View>
</ScrollView>  
  );
}


export function ApexSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color:"#FFFFFF", fontSize: 20}}>apex inspection steps</Text>
      </View>
  </View>
</ScrollView>  
  );
}