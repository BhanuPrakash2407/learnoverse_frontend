import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoDetailScreen({ route }) {
  const { video } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <YoutubePlayer height={250} play={true} videoId={video.videoId} />
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.channel}>{video.channel}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 10, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  channel: { fontSize: 14, color: "gray", marginTop: 5 }
});
