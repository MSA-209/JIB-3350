import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme } from 'react-native-paper';
import { styles } from './styleSheet';
import {SlingloadTitle} from './slingloadTitle.js';
import {SlingloadVideo} from './slingloadVideo.js';
import {SlingloadSequence} from './slingloadSequence.js';
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
  <SlingloadVideo  navigation={navigation} videoName="Placard Video" sequenceName = "Placard Sequence" />
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
  <SlingloadSequence inspectionSteps="Placard instructions 1. asd" navigation={navigation} videoName="Placard Video url" nextItem = 'Apex' />
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
  <SlingloadVideo  navigation={navigation} videoName="Apex Video" sequenceName = "Apex Sequence" />
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
  <SlingloadSequence inspectionSteps="Apex instructions 1. asd" navigation={navigation} videoName="Apex Video url" nextItem = "Grabhook" />
  </View>
</ScrollView>  
  );
}

export function GrabhookScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Grabhook" navigation={navigation} videoName="Grabhook Video" sequenceName = "Grabhook Sequence" />
  </View>
</ScrollView>  
  );
}

export function GrabhookVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Grabhook Video" sequenceName = "Grabhook Sequence" />
  </View>
</ScrollView>  
  );
}


export function GrabhookSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadSequence inspectionSteps="Grabhook instructions 1. asd" navigation={navigation} videoName="Grabhook Video url" nextItem = "ChainClevis" />
  </View>
</ScrollView>  
  );
}

export function ChainClevisScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Chain-Clevis" navigation={navigation} videoName="ChainClevis Video" sequenceName = "ChainClevis Sequence" />
  </View>
</ScrollView>  
  );
}

export function ChainClevisVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="ChainClevis Video" sequenceName = "ChainClevis Sequence" />
  </View>
</ScrollView>  
  );
}


export function ChainClevisSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadSequence inspectionSteps="ChainClevis instructions 1. asd" navigation={navigation} videoName="MediumClevis Video url" nextItem = "MediumClevis" />
  </View>
</ScrollView>  
  );
}


export function MediumClevisScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Medium Clevis" navigation={navigation} videoName="MediumClevis Video" sequenceName = "MediumClevis Sequence" />
  </View>
</ScrollView>  
  );
}

export function MediumClevisVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="MediumClevis Video" sequenceName = "MediumClevis Sequence" />
  </View>
</ScrollView>  
  );
}


export function MediumClevisSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadSequence inspectionSteps="MediumClevis instructions 1. asd" navigation={navigation} videoName="MediumClevis Video url" nextItem = "Suspension1" />
  </View>
</ScrollView>  
  );
}

export function Suspension1Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Suspension Strap 1" navigation={navigation} videoName="Suspension1 Video" sequenceName = "Suspension1 Sequence" />
  </View>
</ScrollView>  
  );
}

export function Suspension1Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension1 Video" sequenceName = "Suspension1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadSequence inspectionSteps="Suspension1 instructions 1. asd" navigation={navigation} videoName="Suspension1 Video url" nextItem = "Suspension2" />
  </View>
</ScrollView>  
  );
}

export function Suspension2Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
      <SlingloadTitle title="Suspension Strap 2" navigation={navigation} videoName="Suspension2 Video" sequenceName = "Suspension2 Sequence" />
  </View>
</ScrollView>  
  );
}

export function Suspension2Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension2 Video" sequenceName = "Suspension2 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension2Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
  </View>
  <SlingloadSequence inspectionSteps="Suspension2 instructions 1. asd" navigation={navigation} videoName="Suspension2 Video url" nextItem = "Grabhook" />
  </View>
</ScrollView>  
  );
}