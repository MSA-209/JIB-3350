import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme, Menu, Appbar, Divider, Button } from 'react-native-paper';
import { styles } from './styleSheet';
import {SlingloadTitle} from './slingloadTitle.js';
import {SlingloadVideo} from './slingloadVideo.js';
import {SlingloadSequence} from './slingloadSequence.js';
export function SlingloadScreen({ navigation, route }) {
  const screen = route.name
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
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
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
        <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
          <SlingloadDropdown/>
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Placard Video url" sequenceName = "Placard Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Placard instructions 1. asd" navigation={navigation} videoName="Placard Video" nextItem = 'Apex' />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Apex Video url" sequenceName = "Apex Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Apex instructions 1. asd" navigation={navigation} videoName="Apex Video" nextItem = "Grabhook" />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Grabhook Video url" sequenceName = "Grabhook Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Grabhook instructions 1. asd" navigation={navigation} videoName="Grabhook Video" nextItem = "ChainClevis" />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="ChainClevis Video url" sequenceName = "ChainClevis Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="ChainClevis instructions 1. asd" navigation={navigation} videoName="MediumClevis Video" nextItem = "MediumClevis" />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="MediumClevis Video url" sequenceName = "MediumClevis Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="MediumClevis instructions 1. asd" navigation={navigation} videoName="MediumClevis Video" nextItem = "Suspension1" />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension1 Video url" sequenceName = "Suspension1 Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Suspension1 instructions 1. asd" navigation={navigation} videoName="Suspension1 Video" nextItem = "Suspension2" />
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
    <SlingloadDropdown/>
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
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension2 Video url" sequenceName = "Suspension2 Sequence" />
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
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Suspension2 instructions 1. asd" navigation={navigation} videoName="Suspension2 Video" nextItem = "Suspension3" />
  </View>
</ScrollView>  
  );
}

export function Suspension3Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Suspension Strap 3" navigation={navigation} videoName="Suspension3 Video" sequenceName = "Suspension3 Sequence" />
  </View>
</ScrollView>  
  );
}

export function Suspension3Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension3 Video url" sequenceName = "Suspension3 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension3Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Suspension3 instructions 1. asd" navigation={navigation} videoName="Suspension3 Video" nextItem = "Suspension4" />
  </View>
</ScrollView>  
  );
}

export function Suspension4Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Suspension Strap 4" navigation={navigation} videoName="Suspension4 Video" sequenceName = "Suspension4 Sequence" />
  </View>
</ScrollView>  
  );
}

export function Suspension4Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension4 Video url" sequenceName = "Suspension4 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension4Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Suspension4 instructions 1. asd" navigation={navigation} videoName="Suspension4 Video" nextItem = "SusStrapOrder" />
  </View>
</ScrollView>  
  );
}

export function SusStrapOrderScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Sus. Strap Order" navigation={navigation} videoName="SusStrapOrder Video" sequenceName = "SusStrapOrder Sequence" />
  </View>
</ScrollView>  
  );
}

export function SusStrapOrderVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="SusStrapOrder Video url" sequenceName = "SusStrapOrder Sequence" />
  </View>
</ScrollView>  
  );
}


export function SusStrapOrderSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Sus. Strap Order instructions 1. asd" navigation={navigation} videoName="SusStrapOrder Video" nextItem = "S1P2" />
  </View>
</ScrollView>  
  );
}

export function S1P2Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="188 S1 P2" navigation={navigation} videoName="S1P2 Video" sequenceName = "S1P2 Sequence" />
  </View>
</ScrollView>  
  );
}

export function S1P2Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="S1P2 Video url" sequenceName = "S1P2 Sequence" />
  </View>
</ScrollView>  
  );
}


export function S1P2Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="188 S1 P2 instructions 1. asd" navigation={navigation} videoName="S1P2 Video" nextItem = "TopLateralC1" />
  </View>
</ScrollView>  
  );
}

export function TopLateralC1Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Top Lateral C1" navigation={navigation} videoName="TopLateralC1 Video" sequenceName = "TopLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}

export function TopLateralC1Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="TopLateralC1 Video url" sequenceName = "TopLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function TopLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="TopLateralC1 instructions 1. asd" navigation={navigation} videoName="TopLateralC1 Video" nextItem = "MidLateralC1" />
  </View>
</ScrollView>  
  );
}

export function MidLateralC1Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Middle Lateral C1" navigation={navigation} videoName="MidLateralC1 Video" sequenceName = "MidLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}

export function MidLateralC1Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="MidLateralC1 Video url" sequenceName = "MidLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function MidLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Middle Lateral C1 instructions 1. asd" navigation={navigation} videoName="MidLateralC1 Video" nextItem = "LateralC1" />
  </View>
</ScrollView>  
  );
}

export function BotLateralC1Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
      <SlingloadTitle title="Bottom Lateral C1" navigation={navigation} videoName="BotLateralC1 Video" sequenceName = "BotLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}

export function BotLateralC1Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="BotLateralC1 Video url" sequenceName = "BotdLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function BotLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
    <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    <SlingloadDropdown/>
  </View>
  <SlingloadSequence inspectionSteps="Bottom Lateral C1 instructions 1. asd" navigation={navigation} videoName="BotLateralC1 Video" nextItem = "Slingload Integration" />
  </View>
</ScrollView>  
  );
}



const SlingloadDropdown = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={<Button icon="menu" onPress={openMenu} backgroundColor={"#FFFFFF"} />}
      style={{position: "absolute", marginTop: 48, left: '75%'}}
    >
      <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
      <Menu.Item onPress={() => { navigation.navigate('Placard'); closeMenu(); }} title="Placard" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Apex'); closeMenu(); }} title="Apex" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Grabhook'); closeMenu(); }} title="Grabhook" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('ChainClevis'); closeMenu(); }} title="ChainClevis" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('MediumClevis'); closeMenu(); }} title="MediumClevis" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension1'); closeMenu(); }} title="Suspension1" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension2'); closeMenu(); }} title="Suspension2" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension3'); closeMenu(); }} title="Suspension3" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension4'); closeMenu(); }} title="Suspension4" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('SusStrapOrder'); closeMenu(); }} title="SusStrapOrder" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('S1P2'); closeMenu(); }} title="S1P2" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('TopLateralC1'); closeMenu(); }} title="TopLateralC1" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('MidLateralC1'); closeMenu(); }} title="MidLateralC1" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('BotLateralC1'); closeMenu(); }} title="BotLateralC1" />
      <Divider style= {{backgroundColor: "#ffcc01", height: 3, marginBottom: -10}}></Divider>
    </Menu>
  );
};

export default SlingloadDropdown;