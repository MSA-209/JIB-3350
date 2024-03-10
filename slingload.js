import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ScrollView, TextInput, FlatList, screen} from 'react-native';
import 'react-native-svg'
import { Card, Provider, Text, useTheme, Menu, Appbar, Divider, Button, TouchableWithoutFeedback} from 'react-native-paper';
import { styles } from './styleSheet';
import {SlingloadTitle} from './slingloadTitle.js';
import {SlingloadVideo} from './slingloadVideo.js';
import {SlingloadSequence} from './slingloadSequence.js';
import ModelComp from './ModelComp';
import { FontAwesome } from '@expo/vector-icons'; 

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
        <View style={styles.headerTitleContainer}>
          <View style={{left: '0%'}}>
            <SlingloadDropdown/>
        </View>
          <View style={styles.titleTextBox}>
            <Text style={styles.titleText} variant='headlineLarge'>{screen}</Text>
          </View>
        {/* don't remove the empty view container, it keep the title center */}
        <View style={{ width: 40 }}></View> 
      </View>

      </View>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <TouchableOpacity onPress={() => navigation.navigate('Placard')}>
            <View style={styles.walkThrough}>
              <View style={styles.innerBox}>
                <Text style={styles.walkThroughText}>Walkthroughs</Text>
              </View>
              <View style={{paddingLeft: 11}}>
                <FontAwesome name="chevron-right" size={16} color="#ffcc01" />
              </View>
            </View>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}



export function PlacardScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>

    <View style={styles.titleTextBox}>
      <Text style={styles.titleText} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  </View>

  <View style={{fontSize: 50}}>
    {/* <View style={{marginTop: 40}}>
      <Text style={{fontSize: 50, fontWeight: 700}}>PLACARD</Text>
    </View> */}
    <SlingloadTitle title="PLACARD" navigation={navigation} videoName="Placard Video" sequenceName = "Placard Sequence" />
  </View>
</ScrollView>  
  );
}

export function PlacardVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Placard" sequenceName = "Placard Sequence" />
  </View>
</ScrollView>  
  );
}



import placardArray from './placardArray.js';
import { color } from 'react-native-reanimated';
import { Color } from 'three';
export function PlacardSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadSequence inspectionSteps="Placard instructions 1. asd" navigation={navigation} videoName="Placard Video" nextItem = 'Apex' />
  </View>
  <ModelComp imageArray = {placardArray}/>
</ScrollView>  
  );
}

export function ApexScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Apex" sequenceName = "Apex Sequence" />
  </View>
</ScrollView>  
  );
}


export function ApexSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Grabhook" sequenceName = "Grabhook Sequence" />
  </View>
</ScrollView>  
  );
}


export function GrabhookSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="ChainClevis" sequenceName = "ChainClevis Sequence" />
  </View>
</ScrollView>  
  );
}


export function ChainClevisSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="MediumClevis" sequenceName = "MediumClevis Sequence" />
  </View>
</ScrollView>  
  );
}


export function MediumClevisSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension1" sequenceName = "Suspension1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension2" sequenceName = "Suspension2 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension2Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension3" sequenceName = "Suspension3 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension3Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="Suspension4" sequenceName = "Suspension4 Sequence" />
  </View>
</ScrollView>  
  );
}


export function Suspension4Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="SusStrapOrder" sequenceName = "SusStrapOrder Sequence" />
  </View>
</ScrollView>  
  );
}


export function SusStrapOrderSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadSequence inspectionSteps="Sus. Strap Order instructions 1. asd" navigation={navigation} videoName="SusStrapOrder Video" nextItem = "StrapSide" />
  </View>
</ScrollView>  
  );
}
export function StrapSideScreen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
      <SlingloadTitle title="188 in Strap Side 1" navigation={navigation} videoName="StrapSide Video" sequenceName = "StrapSide Sequence" />
  </View>
</ScrollView>  
  );
}

export function StrapSideVideo({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="StrapSide" sequenceName = "StrapSide Sequence" />
  </View>
</ScrollView>  
  );
}


export function StrapSideSequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadSequence inspectionSteps="StrapSide instructions 1. asd" navigation={navigation} videoName="StrapSide" nextItem = "S1P2" />
  </View>
</ScrollView>  
  );
}
export function S1P2Screen({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
      <SlingloadTitle title="188 in S1 P2" navigation={navigation} videoName="S1P2 Video" sequenceName = "S1P2 Sequence" />
  </View>
</ScrollView>  
  );
}

export function S1P2Video({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="S1P2" sequenceName = "S1P2 Sequence" />
  </View>
</ScrollView>  
  );
}


export function S1P2Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="TopLateralC1" sequenceName = "TopLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function TopLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="MidLateralC1" sequenceName = "MidLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function MidLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
  </View>
  <SlingloadVideo  navigation={navigation} videoName="BotLateralC1" sequenceName = "BotdLateralC1 Sequence" />
  </View>
</ScrollView>  
  );
}


export function BotLateralC1Sequence({ navigation, route }) {
  const theme = useTheme();
  return (
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
  <View style={{marginTop: -10, marginBottom: 8}}>
  <View style={styles.headerTitleContainer}>
    <View style={{left: '0%'}}>
      <SlingloadDropdown/>
    </View>
    <View style={styles.titleTextBox}>
      <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>Slingload Simulator</Text>
    </View>
    <View style={{width: 40}}>
    </View>
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
      style={{position: "absolute", marginTop: 30, marginLeft: -10}}
    >
      <Menu.Item onPress={() => { navigation.navigate('Placard'); closeMenu(); }} title="Placard" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Apex'); closeMenu(); }} title="Apex" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Grabhook'); closeMenu(); }} title="Grabhook" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('ChainClevis'); closeMenu(); }} title="ChainClevis" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('MediumClevis'); closeMenu(); }} title="MediumClevis" />
          <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension1'); closeMenu(); }} title="Suspension1" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension2'); closeMenu(); }} title="Suspension2" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension3'); closeMenu(); }} title="Suspension3" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('Suspension4'); closeMenu(); }} title="Suspension4" />
          <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
          <Menu.Item onPress={() => { navigation.navigate('SusStrapOrder'); closeMenu(); }} title="SusStrapOrder" />
          <Divider></Divider>
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('StrapSide'); closeMenu(); }} title="StrapSide" />
          <Divider></Divider>
          <Menu.Item onPress={() => { navigation.navigate('S1P2'); closeMenu(); }} title="S1P2" />
          <Divider style= {{backgroundColor: "#ffcc01", height: 3}}></Divider>
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
