import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking, ScrollView , Alert, Button} from 'react-native';
import {IconButton} from 'react-native-paper'
import { AddedVideosContext } from './videoContext';
 
  
import YoutubePlayer from "react-native-youtube-iframe";

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
)
function VideoComp({video, playing, handleAddToPlaylist, addedVideos}){

  return (
    
    <View style={{backgroundColor: '#ffcc01', width: 320,   alignSelf: 'center', 
    borderBottomLeftRadius:8, borderBottomRightRadius: 8, 
    borderTopRightRadius:8,borderTopLeftRadius:8,
    marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}} >
        
        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 10 }}>
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
      <YoutubePlayer
        height={200}
        width={300}
        play={playing}
        videoId={video.id}
        />
    </View>
  );

}
const VideoButton = ({ videoLinks }) => {

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
     
     <View style ={styles.container}>
       
         {videoLinks.map((video) => (
          <VideoComp key={video.id} video={video}
          handleAddToPlaylist={handleAddToPlaylist} 
          addedVideos={addedVideos}
          />
         ))}
    </View>
      
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
  );
};


export default VideoButton;
