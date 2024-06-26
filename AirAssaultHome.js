import * as React from 'react';


import {  
          LayoutAnimation,
          Linking,
          Image,
          StyleSheet,
          View,
          TouchableOpacity,
          SafeAreaView,
          ScrollView,
          TextInput,
          Dimensions,
        } from 'react-native';
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
import axios from 'axios';



// this const below is for firebase
// for future maintainers, please get a new apiKey
// this github has been public for a while  --Eric



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

//  below is a stylesheet, you can change it to whatever you like
//  if a refresh is needed

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

//  Below is the flashcard display function. It's fed a flashcard object
//  and then it will display that flashcard. It's called using a map function
//  which iterates through an array of flashcard objects.

function Flashcard({ flashcard }) {
  const theme = useTheme();

  const [isFlipped, setIsFlipped] = React.useState(false);

  const toggleFlip = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); //LayoutAnimation animates the flash cards when they are clicked.
                                                                          //unfortunately the animation is skipped on web browsers, so changes
                                                                          //need to be previewed with mobile versions  --Eric

    setIsFlipped(!isFlipped); //sets isFlipped to the opposite of what it was before being clicked
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
                  {isFlipped && ( //isFlipped is a boolean that determines if the card shows the answer or not  --Eric
                    <View>
                      <Divider style={{backgroundColor:theme.colors.onBackground, marginTop:16, marginBottom: 16, marginHorizontal: -16}} bold={true}/>
                      <Text variant="titleMedium">{flashcard.answer}</Text>   
                      {/* when isFlipped becomes true, the card expands to show flashcard.answer.  --Eric */}
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


export function AirAssaultScreen({ navigation, route }) {
  //strapi implementation
const [data, setData] = React.useState([])
const [courseScope, setCourseScope] = React.useState("")
const [purpose, setPurpose] = React.useState("")
const [insertTimes, setInsertTimes] = React.useState("")
const [videoArray, setVideoArray] = React.useState("")
React.useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL + "course-informations")
      const res = await axios.get(
        "https://airdbnew.onrender.com/api/air-assault-programs" ,
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
  console.log(data)
  
fetchData();
}, []);
React.useEffect(() => {
  if (data.length > 0) {
    if (data[0].attributes) {
      console.log(data[0].attributes.courseScope)
      setCourseScope(data[0].attributes.courseScope)
      setPurpose(data[0].attributes.purpose)
      setInsertTimes(data[0].attributes.insertTimes)
    } else {
      console.log("No attributes");
    }
  } else {
    console.log("Data is empty");
  }
}, [data]);
  const theme = useTheme();
  const screen = route.name
  return(
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: -10, marginBottom: 8}}>
        <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
        </View>
        <View style={styles.card}>
          <Card style={{marginTop: -16, marginBottom: 20}}>
            <View style={{borderBottomWidth: 3, borderBottomColor: "#ffcc01"}}>
              <Image source={require("./assets/Assault2.png")}
                style={{
                  width: 'auto',
                  height: 230,
                }}
              />
            </View>
            {/* The URL is hard-coded because there is not a high chance it'll change in the future.
                If the URL does change, then just paste the updated URL down here. --Eric */}
            <TouchableRipple
              onPress={() => {Linking.openURL('https://home.army.mil/campbell/index.php/tsaas/air-assault');}}
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
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase I')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 1"
                subtitle="Flashcards"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <TouchableRipple
                onPress={() => {navigation.navigate('Air Assault Program: Phase II')}}
                borderless={true}
                style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Phase 2"
                subtitle="Flashcards"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
              {/* There's a link to quizlet down here in case users want to use it.*/}
            <TouchableRipple
              onPress={() => {Linking.openURL('https://quizlet.com/AirAssaultSchool');}}
              borderless={true}
              style={{borderRadius: 0}}
            >
              <Card.Title 
                title="Quizlet"
                titleVariant="titleLarge"
                left={(props) => <Icon name='card-multiple-outline' color={theme.colors.primary} size={24} style={{marginLeft:8}}/>}
                right={(props) => <Icon name='open-in-new' color={theme.colors.primary} size={24} style={{marginRight: 32}}/>}
              />
            </TouchableRipple>
            <Card.Content>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>PURPOSE:</Text>
                <View style={styles.rectangle}></View>
              </View>

              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/*To train Soldiers in Air Assault operations, sling-load operations, and rappelling. Upon graduation of 
                the course each Soldier will be able to perform skills required to make maximum 
              use of helicopter assets in training and in combat to support their unit operations.*/}
              {purpose}
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>COURSE SCOPE:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/*Soldiers are trained on the missions performed by rotary wing aircraft, aircraft safety, 
                aero-medical evacuation procedures, pathfinder operations, principles and techniques of 
                combat assaults, rappelling techniques, and sling-load operations. The core POI 
                requires minimum support assets and is adaptable to organic aviation elements. Both the 
              core instruction and the additional instruction are conducted in a classroom/field environment.*/}
              {courseScope}
              </Text>
              <Divider></Divider>
              <View style={{alignSelf: 'flex-start'}}>
                <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10}}>INSERT TIMES:</Text>
                <View style={styles.rectangle}></View>
              </View>
              <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 10}}>
                {/*Day Zero - 0600{"\n"}{"\n"}
                Phase One - Day One - 0800{"\n"}{"\n"}
                Phase Two - Day Three - 0900{"\n"}{"\n"}
                Phase Three - Day Six - 1400{"\n"}{"\n"}
                12 mile Foot March - Day Nine - 1300*/}
                {insertTimes}
              </Text>
            </Card.Content>
            <Divider bold={true}></Divider>
            <TouchableRipple
              onPress={() => {
                navigation.navigate('Video Hub',{ 
                  source: 'airassault' // or 'airassault' for airassaulthome.js
                  });
              }}
              borderless={true}
              style={{ borderRadius: 0 }}
            >
              <Card.Title
                title="Video Hub"
                titleVariant="titleLarge"
                left={(props) => <Icon name='video' color={theme.colors.primary} size={24} style={{ marginLeft: 8 }} />}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{ marginRight: 32 }} />}
              />
          </TouchableRipple>
          <Divider bold={true}></Divider>
          <TouchableRipple
              onPress={() => {
                navigation.navigate('Slingload Integration',{ 
                  source: 'airassault' // or 'airassault' for airassaulthome.js
                  });
              }}
              borderless={true}
              style={{ borderRadius: 0 }}
            >
              <Card.Title
                title="Slingload Training"
                titleVariant="titleLarge"
                left={(props) => <Image source={require("./assets/AssaultBadgeClear.png")} 
                style={{
                  width: 35,
                  height: 20,
                  resizeMode:"contain",
                  marginLeft: 5
                  }}/>}
                right={(props) => <Icon name='chevron-right' color={theme.colors.primary} size={24} style={{ marginRight: 32 }} />}
              />
          </TouchableRipple>
          </Card>
          {/* {videoData && videoData.length > 0 && (
        <Video
          source={{ uri: videoData[0].link }}
          style={{ width: '100%', height: 300 }}
          useNativeControls
          resizeMode={Video.RESIZE_MODE_CONTAIN}
        />
      )} */}
        </View>
      </View>
    </ScrollView>
  );
}

export function Phase1Screen({ navigation, route }) {

const [testdata, settestData] = React.useState([])
const [testCards, setTestCards] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true); // add new state variable
React.useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL + "flashcards")
      const res = await axios.get(
        "https://airdbnew.onrender.com/api/flashcards" ,
      {
        headers: {
          Authorization: "bearer " + "2f30ba70854a898c7ec8c7e9bec66d3a7365c62feeea4d12e540c6cacebc3f169b1db46cc6b2b7b9367e5a60bfdd8488c4866cb97f0dc80ac7356caafe17d927397d26b52669a2bf3be2160346eed23a6f3043b08749e7fffa0ed3f0dd3e6c35bdaa42a756258cd95a864b4136f295c02ed9e4a4aff8b0128118e53cc44085b9"
          /*{"77f8b9051e98185e8415940294a97ccfaa98676aaef1b5a728ff3cad09197502ddac6a2494767c24f4447d8ee68d56226ee8319849ab6074c8460c2d33d65972383838a7dc2a2ca2db871d658424547ec55a5df560b82568759f3d78161e12599c42363c91e23bef25aeffce1d81d671da1cc712e615236fe0bc61a4e17699bf"}**/,
        }
      }
    )
    console.log(res.data)
    console.log(res.data.data)
    settestData(res.data.data)
    const testCards = Object.keys(res.data.data).map((key) => {
      return { ...res.data.data[key], id: key };
    });
    setTestCards(testCards)
    console.log(testCards)
    setIsLoading(false); // set loading status to false once flashcards are loaded

  } catch (err) {
    console.log(err);
   }
  }
  fetchData();
  console.log(testdata)
  
}, []);
          
  const theme = useTheme();
  const screen = route.name
          /*
  const [flashcards, setFlashcards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // add new state variable
  const flashcardsRef = ref(getDatabase(), "airAssaultPhaseOne");

  React.useEffect(() => {
    // here onValue will get initialized once
    // and on db changes its callback will get invoked
    // resulting in changing your state value

    
    onValue(flashcardsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flashcards = Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        });
        setFlashcards(flashcards);  //  This updates the Flashcards const to load the flashcards from the database  --Eric
        setIsLoading(false); // set loading status to false once flashcards are loaded
      } else {
        console.log("No data available");
      }
    });


    return () => {
      // this is cleanup function, will call just on component will unmount
      // you can clear your events listeners or any async calls here
    }
  }, [])
*/
  return (
    <ScrollView style={{marginTop: -10, marginBottom: 0}} showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
      </View>
      <View style={styles.scrollViewCards}>
        {isLoading ? ( // show loading indicator when isLoading is true
          <ActivityIndicator size="large" style={{marginTop:50}} color={theme.colors.primary} />
        ) : (
          testCards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard.attributes} />
          ))
        )}
      </View>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

export function Phase2Screen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name
  const [testdata, settestData] = React.useState([])
  const [testCards, setTestCards] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true); // add new state variable
  React.useEffect(() => {
  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_API_URL + "flashcards")
      const res = await axios.get(
        "https://airdbnew.onrender.com/api/airassaultflashcardphase2s" ,
      {
        headers: {
          Authorization: "bearer " + "2f30ba70854a898c7ec8c7e9bec66d3a7365c62feeea4d12e540c6cacebc3f169b1db46cc6b2b7b9367e5a60bfdd8488c4866cb97f0dc80ac7356caafe17d927397d26b52669a2bf3be2160346eed23a6f3043b08749e7fffa0ed3f0dd3e6c35bdaa42a756258cd95a864b4136f295c02ed9e4a4aff8b0128118e53cc44085b9"
          /*{"77f8b9051e98185e8415940294a97ccfaa98676aaef1b5a728ff3cad09197502ddac6a2494767c24f4447d8ee68d56226ee8319849ab6074c8460c2d33d65972383838a7dc2a2ca2db871d658424547ec55a5df560b82568759f3d78161e12599c42363c91e23bef25aeffce1d81d671da1cc712e615236fe0bc61a4e17699bf"}**/,
        }
      }
    )
    console.log(res.data)
    console.log(res.data.data)
    settestData(res.data.data)
    const testCards = Object.keys(res.data.data).map((key) => {
      return { ...res.data.data[key], id: key };
    });
    setTestCards(testCards)
    console.log(testCards)
    setIsLoading(false); // set loading status to false once flashcards are loaded

  } catch (err) {
    console.log(err);
   }
  }
  fetchData();
  console.log(testdata)
}, []);
/*
  const [flashcards, setFlashcards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); // add new state variable
  const flashcardsRef = ref(getDatabase(), "airAssaultPhaseTwo");

  React.useEffect(() => {
    // here onValue will get initialized once
    // and on db changes its callback will get invoked
    // resulting in changing your state value
    onValue(flashcardsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const flashcards = Object.keys(data).map((key) => {
          return { ...data[key], id: key };
        });
        setFlashcards(flashcards);
        setIsLoading(false); // set loading status to false once flashcards are loaded
      } else {
        console.log("No data available");
      }
    });
    return () => {
      // this is cleanup function, will call just on component will unmount
      // you can clear your events listeners or any async calls here
    }
  }, [])
*/
  return (
    <ScrollView style={{marginTop: -10, marginBottom: 0}} showsVerticalScrollIndicator={false}>
      <View style={{alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01"}}>
          <Text style={{color:"#FFFFFF", fontSize: 20}} variant='headlineLarge'>{screen}</Text>
      </View>
      <View style={styles.scrollViewCards}>
        {isLoading ? ( // show loading indicator when isLoading is true
          <ActivityIndicator size="large" style={{marginTop:50}} color={theme.colors.primary} />
        ) : (
          testCards.map((flashcard) => (
            <Flashcard key={flashcard.id} flashcard={flashcard.attributes} />
          ))
        )}
      </View>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

// Video Screen thumbnail display
import VideoButton from './VideoButton';
// imports videoLinks
import videoLinks from './videoLinks'
import videoLinks2 from './videoLinks2'

export function VideoScreen({ navigation, route }) {
  const theme = useTheme();
  const screen = route.name;
  const source = route.params.source;
  const [airAssaultVideos, setAirAssaultVideos] = React.useState([])
  const [pathfinderVideos, setPathfinderVideos] = React.useState([])
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const videoLinksUsed = source === 'pathfinder' ? pathfinderVideos : airAssaultVideos;
  const [filteredData, setFilteredData] = React.useState(videoLinksUsed); //created filteredData for search filtering

//Strapi Videos  
  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const urls = [
          "https://airdbnew.onrender.com/api/air-assault-videos?populate=video,thumbnail",
          "https://airdbnew.onrender.com/api/pathfinder-videos?populate=video,thumbnail"
        ];
        const allRequests = urls.map(url =>
          axios.get(url, {
            headers: {
              Authorization: "bearer " + "2f30ba70854a898c7ec8c7e9bec66d3a7365c62feeea4d12e540c6cacebc3f169b1db46cc6b2b7b9367e5a60bfdd8488c4866cb97f0dc80ac7356caafe17d927397d26b52669a2bf3be2160346eed23a6f3043b08749e7fffa0ed3f0dd3e6c35bdaa42a756258cd95a864b4136f295c02ed9e4a4aff8b0128118e53cc44085b9"
            }
          })
        );
        Promise.all(allRequests).then(responses => {
          const airAssaultResponse = responses[0];
          const pathfinderResponse = responses[1];
          console.log(airAssaultResponse)
          if (airAssaultResponse.data && airAssaultResponse.data.data) {
            const formattedData = airAssaultResponse.data.data.map((item) => {
              return {
                link: item.attributes.video.data[0].attributes.url,
                title: item.attributes.title,
                description: item.attributes.description,
                thumbnail: item.attributes.thumbnail.data.attributes.url,
              };
            });
            console.log(formattedData + "air")
            setAirAssaultVideos(formattedData);
          }
  
          if (pathfinderResponse.data && pathfinderResponse.data.data) {
            const formattedData = pathfinderResponse.data.data.map((item) => {
              return {
                link: item.attributes.video.data[0].attributes.url,
                title: item.attributes.title,
                description: item.attributes.description,
                thumbnail: item.attributes.thumbnail.data.attributes.url,
              };
            });
            console.log(formattedData + "pathfinder")
            setPathfinderVideos(formattedData);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchVideos();
  }, []);  
  React.useEffect(() => {
    setFilteredData(videoLinksUsed);
  }, [videoLinksUsed]);  
  const onChangeSearch = query => { 
    setSearchQuery(query);
    const newFilteredData = videoLinksUsed.filter(videoLinks => videoLinks.title.toLowerCase().includes(query.toLowerCase()) || videoLinks.description.toLowerCase().includes(query.toLowerCase())); 
    console.log(videoLinksUsed)
    console.log("new", newFilteredData) // Changed this line
    setFilteredData(newFilteredData);
  } //filters the data by title or description based on the search query and updates the filteredData state
  return (
    <ScrollView style={{ marginTop: -10, marginBottom: 0 }} showsVerticalScrollIndicator={true}>
      <View style={{ alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
        <Text style={{ color: "#FFFFFF", fontSize: 20 }} variant='headlineLarge'>{screen}</Text>
      </View>
      {/* flex container so all on one row */}
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* Conditionally render the search bar shows when user clicks on search*/}
        {isSearchVisible && (
          <TextInput
            style={{ height: 40, borderColor:theme.colors.primary , borderWidth: 1, color:theme.colors.primary, flex: 100 }}
            onChangeText={text => onChangeSearch(text)}
            value={searchQuery}
          />
        )}
        <TouchableOpacity onPress={() => setIsSearchVisible(!isSearchVisible)}>
          <Text style={{color:theme.colors.primary, fontSize: 20}}>Search</Text>
          {/* navigates to playlistScreen which will only shows videos in playlist*/}
        </TouchableOpacity>
  
        <IconButton
        icon="playlist-play"
        color="black"
        size={20}
        onPress={() => navigation.navigate('Your Playlist')}
      />
      </View>
      {/* Display video button with an array of video links */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <VideoButton videoLinks={filteredData} currentVideoID={null} />
          </View>
         {/* changing filtered data to test videos, replace the videolinks with videodata from strapi */}
      <View style={{ marginBottom: 30 }}></View>
    </ScrollView>
  );
}

import { AddedVideosContext } from './videoContext';

export function PlaylistScreen({ navigation, route }) {
  const [airAssaultVideos, setAirAssaultVideos] = React.useState([]);
  const [pathfinderVideos, setPathfinderVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchVideos = async () => {
      try {
        const urls = [
          "https://airdbnew.onrender.com/api/air-assault-videos?populate=video",
          "https://airdbnew.onrender.com/api/pathfinder-videos?populate=video"
        ];
        const allRequests = urls.map(url =>
          axios.get(url, {
            headers: {
              Authorization: "bearer " + "2f30ba70854a898c7ec8c7e9bec66d3a7365c62feeea4d12e540c6cacebc3f169b1db46cc6b2b7b9367e5a60bfdd8488c4866cb97f0dc80ac7356caafe17d927397d26b52669a2bf3be2160346eed23a6f3043b08749e7fffa0ed3f0dd3e6c35bdaa42a756258cd95a864b4136f295c02ed9e4a4aff8b0128118e53cc44085b9"
            }
          })
        );
        Promise.all(allRequests).then(responses => {
          const airAssaultResponse = responses[0];
          const pathfinderResponse = responses[1];

          if (airAssaultResponse.data && airAssaultResponse.data.data) {
            const formattedData = airAssaultResponse.data.data.map((item) => {
              return {
                link: item.attributes.video.data[0].attributes.url,
                title: item.attributes.title,
                description: item.attributes.description,
                thumbnail: item.attributes.thumbnail.data.attributes.url,
              };
            });
            setAirAssaultVideos(formattedData);
          }

          if (pathfinderResponse.data && pathfinderResponse.data.data) {
            const formattedData = pathfinderResponse.data.data.map((item) => {
              return {
                link: item.attributes.video.data[0].attributes.url,
                title: item.attributes.title,
                description: item.attributes.description,
                thumbnail: item.attributes.thumbnail.data.attributes.url,
              };
            });
            setPathfinderVideos(formattedData);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideos();
  }, []);


  const { addedVideos } = React.useContext(AddedVideosContext);
  const theme = useTheme();
  const screen = route.name;
  const allVideoLinks = [...airAssaultVideos, ...pathfinderVideos];
  const playlistVideoLinks = allVideoLinks.filter(video => addedVideos[video.link]);

  return (
    <ScrollView style={{ marginTop: -10, marginBottom: 0 }} showsVerticalScrollIndicator={true}>
      <View style={{ alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
        <Text style={{ color: "#FFFFFF", fontSize: 20 }} variant='headlineLarge'>{screen}</Text>
      </View>
      <VideoButton videoLinks={playlistVideoLinks} currentVideoID={null} /> 
    </ScrollView>
  );
}
