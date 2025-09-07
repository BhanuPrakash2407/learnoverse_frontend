import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import VideoItem from '../components/VideoItem';

export default function VideoListScreen({ navigation }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/videos/");
        // ⚠️ Android Emulator → http://10.0.2.2:8000
        // ⚠️ iOS Simulator → http://localhost:8000
        // ⚠️ Real Device → http://<your-computer-LAN-IP>:8000
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" style={{ flex: 1, justifyContent: "center" }} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.videoId}
        renderItem={({ item }) => (
          <VideoItem
            video={item}
            onPress={() => navigation.navigate("VideoDetail", { video: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" }
});
