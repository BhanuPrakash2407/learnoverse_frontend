import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default function VideoItem({ video, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
        <Text style={styles.channel}>{video.channel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", margin: 10, backgroundColor: "#f9f9f9", borderRadius: 8, overflow: "hidden" },
  thumbnail: { width: 120, height: 70 },
  info: { flex: 1, marginLeft: 10, justifyContent: "center" },
  title: { fontSize: 14, fontWeight: "bold" },
  channel: { fontSize: 12, color: "gray", marginTop: 4 }
});
