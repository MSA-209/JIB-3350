import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button, useWindowDimensions} from 'react-native';
import {IconButton} from 'react-native-paper'
import { AddedVideosContext } from './videoContext';
import YoutubePlayer from "react-native-youtube-iframe";

const isLargeScreen = window.innerWidth >= 768;
const styles = StyleSheet.create(
  {
    responsiveContainer: {
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
    videoStyle: {
      marginBottom: 0,
    },
}
)

function VideoComp({video, playing, handleAddToPlaylist, addedVideos}){

  return (
    <View>
      <View style={styles.videoCard}>

            <YoutubePlayer
                height={'100%'}
                width={340}
                play={playing}
                videoId={video.id}
                />
        <View style={{marginTop: -50, justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#ffcc01', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}} >
          <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 8, flexDirection: 'start'}}>
            {video.title}
          </Text>
          <TouchableOpacity onPress={() => handleAddToPlaylist(video)}  style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5, flexDirection: 'end' }}>
            { addedVideos[video.link] ? 'Remove from' :'Add to'}</Text>
            <IconButton
            icon="playlist-play"
            size={20}
            color="#000000"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const VideoButton = ({ videoLinks }) => {
  //Layout for big screen as tablet and above
  const window = useWindowDimensions();
  const [playing, setPlaying] = useState(false);
  const { addedVideos, setAddedVideos } = React.useContext(AddedVideosContext);

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
     <ScrollView contentContainerStyle={styles.responsiveContainer}>      
         {videoLinks.map((video) => (
            <VideoComp 
            key={video.id}
            video={video}
            handleAddToPlaylist={handleAddToPlaylist} 
            addedVideos={addedVideos}
            isLargeScreen={isLargeScreen}
            videoStyle={styles.videoStyle} // Apply additional video styles here

          />
         ))}
    </ScrollView>
  );
};
export default VideoButton;
     /* <View style ={styles.container}>
      
      <YoutubePlayer
        height={300}
        width={300}
        play={playing}
        videoId={"fNk_zzaMoSs"}
        />
         
    </View>
     */
  

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

