import * as React from 'react';
import { Linking, Image, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { useTheme } from 'react-native-paper';
import {   
  ActivityIndicator,
  Appbar,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  Avatar, 
  Card, 
  Divider,
  IconButton,
  List,
  Button, 
  Title,
  Text,
  Paragraph,
  TouchableRipple,
  Provider as PaperProvider,
} from 'react-native-paper';
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios"

const firebaseConfig = {
  apiKey: "AIzaSyA_5_RK8ebZPrHAErXJS9oPWoXTSvVCVxc",
  authDomain: "airassaultapp.firebaseapp.com",
  databaseURL: "https://airassaultapp-default-rtdb.firebaseio.com",
  projectId: "airassaultapp",
  storageBucket: "airassaultapp.appspot.com",
  messagingSenderId: "338517476325",
  appId: "1:338517476325:web:83c26d9ec94afea080650c",
  measurementId: "G-5704YDZHN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    justifyContent: 'center',
  },
  cardBtn: {
    borderRadius: 10
  },
  container: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  scrollViewCards: {
    marginHorizontal: 10,
  },
  newsImage: {
    borderWidth: 2,
    borderRadius: 8
  },
  rectangle: {
    height: 5,
    backgroundColor: '#ffcc01',
    position: 'relative', 
  },
});

function Flashcard({ flashcard }) {
  const theme = useTheme();

  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.card} key={flashcard.id} title={flashcard.question}>
      <TouchableRipple
        onPress={toggleFlip}
        borderless={true}
        style={styles.cardBtn}
      >
        <Card mode="contained">
          <Card.Content>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <View style={{ justifyContent: "flex-start" }}>
                  <Text variant="titleMedium">{flashcard.question}</Text>
                  {isFlipped && (
                    <View>
                      <Divider style={{backgroundColor:theme.colors.onBackground, marginTop:16, marginBottom: 16, marginHorizontal: -16}} bold={true}/>
                      <Text variant="titleMedium">{flashcard.answer}</Text>
                    </View>
                  )}
                </View>
              </View>
              <View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    marginTop: 8,
                  }}
                >
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableRipple>
    </View>
  );
}

export function RangerScreen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  //strapi implementation
const [data, setData] = React.useState([])
const [purposeScope, setPurposeScope] = React.useState("")
const [courseScope, setCourseScope] = React.useState("")
const [noteScope, setNoteScope] = React.useState("")
React.useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL + "ranger-programs")
      const res = await axios.get(
        "https://airdbnew.onrender.com/api/ranger-programs" ,
      {
        headers: {
          Authorization: "bearer " + "2f30ba70854a898c7ec8c7e9bec66d3a7365c62feeea4d12e540c6cacebc3f169b1db46cc6b2b7b9367e5a60bfdd8488c4866cb97f0dc80ac7356caafe17d927397d26b52669a2bf3be2160346eed23a6f3043b08749e7fffa0ed3f0dd3e6c35bdaa42a756258cd95a864b4136f295c02ed9e4a4aff8b0128118e53cc44085b9",
      }
    }
    )
    console.log(res.data)
    console.log(res.data.data)
    setData(res.data.data)
  } catch (err) {
    console.log(err);
  }
  }
  fetchData();
  console.log(data)
}, []);
React.useEffect(() => {
  if (data.length > 0) {
    if (data[0].attributes) {
      console.log(data[0].attributes.purpose)
      setPurposeScope(data[0].attributes.purpose)
      console.log(purposeScope + "asdasd")

      console.log(data[0].attributes.course)
      setCourseScope(data[0].attributes.courseScope)
      console.log(courseScope + "asdasd")

      console.log(data[0].attributes.note)
      setNoteScope(data[0].attributes.note)
      console.log(noteScope + "asdasd")
    } else {
      console.log("No attributes");
    }
  } else {
    console.log("Data is empty");
  }
}, [data]);

  return(
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -10, marginBottom: 8}}>
        <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
        </View>
        <View style={styles.card}>
          <Card style={{marginTop: -16, marginBottom: 20}}>
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={require("./assets/Ranger2.png")}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            <TouchableRipple
              onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas/pre-ranger');}}
              borderless={true}
              style={{borderRadius: 0}}
            >
              <Card.Title
                title="Webpage"
                titleVariant="titleLarge"
                left={(props) => <Icon name='web' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='open-in-new' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <Divider bold={true}></Divider>
            <Card.Content>
            <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>PURPOSE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/* /* To train, assess, and select Ranger Candidates in order to send the most capable, 
                qualified, and prepared Screaming Eagle Soldiers to the U.S. Army’s premier leadership school. */}
                {purposeScope}
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>COURSE SCOPE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/* This course covers the skills and concepts necessary to achieve success as a Ranger Student. 
                Candidates will be evaluated on their ability to complete an RPFT, 12-mile road march, CWSA, 
                and Land Navigation.  Training will cover individual Soldiers skills and Small Unit Tactics, 
                including Ambushes, Reconnaissance operations, Formations and Movement techniques,  and Troop 
                Leading Procedures. At the conclusion of the scourse, Candidates will be better prepared to 
                represent the Division at the U.S. Army Ranger school. */}
                  {courseScope}
              </Text>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>NOTE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/* Packets for entrance must consist of a digitally filled FC 4137 and a complete phase 1 physical 
                dated within 120 days of course start date along with a dental memorandum.  */}
                  {noteScope}
              </Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
