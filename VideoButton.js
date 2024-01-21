import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking, ScrollView } from 'react-native';
import {IconButton} from 'react-native-paper'
import { AddedVideosContext } from './videoContext';

const VideoButton = ({ videoLinks }) => {
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
    <ScrollView vertical showsVerticalScrollIndicator={true}>
      {videoLinks.map((video, index) => (
        <View key={index} style={{ marginRight: 16 }}>
          <TouchableOpacity onPress={() => handleVideoPress(video)} style={{ width: 320, alignSelf: 'center' }}>
            <Image
              source={{ uri: `https://img.youtube.com/vi/${video.link.split('v=')[1]}/0.jpg` }}
              style={{ marginTop: 20, width: 320, height: 180, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }}
            />
            <View style={{backgroundColor: '#ffcc01', width: 320, alignSelf: 'center', borderBottomLeftRadius:8, borderBottomRightRadius: 8, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                {video.title}
              </Text>
              {/* Below changes depending on if user added it to playlist already or not*/}
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
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};


export default VideoButton;
