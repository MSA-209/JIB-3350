import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, Dimensions} from 'react-native';
import {IconButton} from 'react-native-paper'
import { AddedVideosContext } from './videoContext';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Video } from 'expo-av';
import VideoThumbnail from 'react-video-thumbnail';

const screenDimension = Dimensions.get("screen")
const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
       videoCard: {
      borderRadius: 8,
      // width: isLargeScreen? 600: 430,
      // height: isLargeScreen? 350 : 350,
      height: 250,
      width: 350,
      aspectRatio: 16 / 9,
      // width: isLargeScreen? window.width : 320,
      backgroundColor: '#ffcc01',
      padding: 2,
      backgroundColor: 'black',
      margin: 30,
      overflow: 'hidden',
      shadowColor: '#848785',
      shadowOffset: {
        width: 3,
        height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  }
)
const VideoComp = ({video,  handleAddToPlaylist, addedVideos, videoLinks, currentVideoID}) => {
  const navigation = useNavigation();
   return ( 
        <View>
       <View style={styles.videoCard}>            
                <TouchableOpacity onPress={() => {
                  // navigation push will cause previous videos to continue playing and navigate just doesnt work
                  // replace will replace the current stack with new, if navigating from video hub -> video player
                  // pressing back will go to air assault home sicne video hub will be replaced by video player stack 
                  // if want to avoid this, can modify back button or figure out how to auto pause videos when using push
                  // navigate works now and it auto pauses the vid
                  navigation.navigate('Video Player', {description: video.description, 
                  title: video.title,
                  link: video.link,
                  handleAddToPlaylist,
                  addedVideos, videoLinks, currentVideoID})}} style={{ marginTop: -45, width: 345, alignSelf: 'center' , zIndex: 1}}>
            {/* <Image
              source={{ uri: `https://img.youtube.com/vi/${video.link.split('v=')[1]}/0.jpg` }}
              style={{ marginTop: 10, width: 345, height: 290, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }}
            /> */}
            
              <View >
            <VideoThumbnail
              videoUrl={video.link}
              thumbnailHandler={(thumbnail) => console.log(thumbnail)}
              style={{ width: 345, height: 290, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8, zIndex: 0}}
              />
              </View>
        <View style={{position: 'absolute',marginTop: -50, justifyContent: 'space-between', 
        flexDirection: 'row', backgroundColor: '#ffcc01', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} >
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 8, flexDirection: 'start' }}>
                {video.title}
      </Text>
    <TouchableOpacity onPress={() => handleAddToPlaylist(video)}  style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                  { addedVideos[video.link] ? 'Remove from' :'Add to'}</Text>
      <IconButton
      icon="playlist-play"
      size={20}
      color="#000000"
    />
          </TouchableOpacity>
           </View>
           </TouchableOpacity>
       </View>
    </View>
  );
 
}
export const VideoPlayerScreen = ({navigation, route}) =>{
  const {id, description, title, videoLinks, addedVideos, handleAddToPlaylist, link} = route.params;
  const [playing, setPlaying] = useState(false);
  const screen = route.name;
  const [showDescription, setShowDescription] = useState(false);
  const resolution = 9/16;
  const video = {link, id, description, title}; // create video item for playlist button
  const showDesc = () =>{
    setShowDescription(!showDescription);
  }
  // used to rerender the remove from / add to playlist button
  const[isAdded, setIsAdded] = useState(!!addedVideos[link]);
  const handleAdd = (video) => {
    handleAddToPlaylist(video);
    setIsAdded(!isAdded);
  }
  return (
    
    <ScrollView style={{ marginTop: -10, marginBottom: 0 }} showsVerticalScrollIndicator={true}>
    <View style={{ alignItems: 'center', backgroundColor: "#221f20", height: 45, borderTopWidth: 5, borderBottomWidth: 3, borderColor: "#ffcc01" }}>
      <Text style={{ color: "#FFFFFF", fontSize: 20 }} variant='headlineLarge'>{screen}</Text>
    </View>
     <View style ={{ justifyContent: 'center', alignItems:'center'}} >
      {/* <YoutubePlayer
        stlye={{  width:'100%', }}
        height={resolution*(screenDimension.height)}
        width={resolution*(screenDimension.width)}
        play={playing}
        videoId={id}
                /> */} 
      <View style={{justifyContent: 'center', alignItems:'center'}}>
      <Video 
        source={{ uri: link}}
        style={{ width: resolution*(screenDimension.width), height: resolution*(screenDimension.height) ,alignSelf: 'center'}}
        useNativeControls
        resizeMode={Video.RESIZE_MODE_CONTAIN}
      />   
      </View>  
      <View style={{marginTop: -80, width: resolution*(screenDimension.width), justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#ffcc01', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} >
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 8, flexDirection: 'start' }}>
                {title}
      </Text>
    <TouchableOpacity onPress={() => handleAdd(video)}  style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                  { isAdded ? 'Remove from' :'Add to'}</Text>
      <IconButton
      icon="playlist-play"
      size={20}
      color="#000000"
    />
          </TouchableOpacity>
           </View>
      <View style = {{ width: resolution*(screenDimension.width),backgroundColor: '#ffcc01', borderTopRightRadius: 5,borderTopLeftRadius: 5,borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
      <TouchableOpacity onPress={showDesc}  style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                { showDescription ? 'Hide Description' :'Show Description'}</Text>
      </TouchableOpacity>
      {showDescription &&  <Text> {description}</Text> }
      </View>
      <View>
        <VideoButton videoLinks={videoLinks} currentVideoID={link}/>
      </View>
    </View>
  </ScrollView>
    
  );
}

const VideoButton = ({ videoLinks, currentVideoID }) => {

  const { addedVideos, setAddedVideos } = React.useContext(AddedVideosContext);
  const otherVideos = videoLinks.filter(video => video.link !== currentVideoID);
  const handleVideoPress = (video) => {
    // Open YouTube app or browser with the video link
    Linking.openURL(video.link);
  };


  const handleAddToPlaylist = (video) => {
    // Toggle the added status of the video
    setAddedVideos(prevState => ({
      ...prevState,
      [video.link]: !prevState[video.link]
    }));
    console.log(addedVideos)
  };
  return (

     <View style ={styles.container}>
        
         {otherVideos.map((video) => (
          <VideoComp key={video.link} video={video}
          handleAddToPlaylist={handleAddToPlaylist} 
          addedVideos={addedVideos}
          videoLinks={videoLinks}
          currentVideoID = {currentVideoID}
          />
         ))}
    </View>
      

    /*
    <ScrollView vertical showsVerticalScrollIndicator={true}>
      {videoLinks.map((video, index) => (
        <View key={index} style={{ marginRight: 16 }}>

  

      {<TouchableOpacity onPress={() => handleVideoPress(video)} style={{ width: 320, alignSelf: 'center' }}>
            <Image
              source={{ uri: `https://img.youtube.com/vi/${video.link.split('v=')[1]}/0.jpg` }}
              style={{ marginTop: 20, width: 320, height: 180, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }}
            />
            <View style={{backgroundColor: '#ffcc01', width: 320, alignSelf: 'center', borderBottomLeftRadius:8, borderBottomRightRadius: 8, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                {video.title}
              </Text>
              {/* Below changes depending on if user added it to playlist already or not}
              <TouchableOpacity onPress={() => handleAddToPlaylist(video)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                  {addedVideos[video.link] ? 'Remove from' : 'Add to'}
                </Text>
                <IconButton
                  icon="playlist-play"
                  size={20}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          *</TouchableOpacity>}
        
          
          
        </View>
      ))}
    </ScrollView>
    */
  );
};


export default VideoButton;
