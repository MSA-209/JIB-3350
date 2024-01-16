import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking, ScrollView } from 'react-native';

const VideoButton = ({ videoLinks }) => {
  const handleVideoPress = (videoLink) => {
    // Open YouTube app or browser with the video link
    Linking.openURL(videoLink);
  };

  return (
    <ScrollView vertical showsVerticalScrollIndicator={true}>
      {videoLinks.map((videoLink, index) => (
        <TouchableOpacity key={index} onPress={() => handleVideoPress(videoLink)}>
          <View style={{ marginRight: 16 }}>
            <Image
              source={{ uri: `https://img.youtube.com/vi/${videoLink.split('v=')[1]}/0.jpg` }}
              style={{ marginTop: 20, width: 320, height: 180, alignSelf: 'center', borderTopLeftRadius: 8, borderBottomRightRadius: 8 }}
            />
            <View style={{backgroundColor: '#ffcc01', width: 320, alignSelf: 'center', borderBottomLeftRadius:8, borderBottomRightRadius: 8, marginBottom: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf: 'center', padding: 5 }}>
                Video {index + 1}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default VideoButton;
