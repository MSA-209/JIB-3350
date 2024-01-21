import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking, ScrollView } from 'react-native';
import {IconButton} from 'react-native-paper'

const VideoButton = ({ videoLinks }) => {
  const [addedVideos, setAddedVideos] = React.useState({});

  const handleVideoPress = (videoLink) => {
    // Open YouTube app or browser with the video link
    Linking.openURL(videoLink);
  };

  const handleAddToPlaylist = (videoLink) => {
    // Toggle the added status of the video
    setAddedVideos(prevState => ({
      ...prevState,
      [videoLink]: !prevState[videoLink]
    }));
    console.log(addedVideos)
  };

  return (
    <ScrollView vertical showsVerticalScrollIndicator={true}>
      {videoLinks.map((videoLink, index) => (
        <View key={index} style={{ marginRight: 16 }}>
          <TouchableOpacity onPress={() => handleVideoPress(videoLink)} style={{ width: 320, alignSelf: 'center' }}>
            <Image
              source={{ uri: `https://img.youtube.com/vi/${videoLink.split('v=')[1]}/0.jpg` }}
              style={{ marginTop: 20, width: 320, height: 180, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }}
            />
            <View style={{backgroundColor: '#ffcc01', width: 320, alignSelf: 'center', borderBottomLeftRadius:8, borderBottomRightRadius: 8, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                Video {index + 1}
              </Text>
              {/* Below changes depending on if user added it to playlist already or not*/}
              <TouchableOpacity onPress={() => handleAddToPlaylist(videoLink)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                  {addedVideos[videoLink] ? 'Remove from' : 'Add to'}
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
