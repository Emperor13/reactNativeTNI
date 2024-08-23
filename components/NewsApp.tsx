import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

interface NewItem {
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

const NewsApp = (): React.JSX.Element => {
  const [news, setnews] = useState([]);
  const [loading, setloading] = useState(true);

  const apiKey = "333b9c477d464918a4dad6c92947de0c"
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-07-23&sortBy=publishedAt&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((news) => {
        setnews(news.articles);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  //ฟังก์ชั่น _renderItem สำหรับใช้ใน flatList
  const _renderItem = ({ item }: { item: NewItem }) => (
    <View style={styles.item}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? ( // ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง flatList
        <FlatList
          data={news}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
  item: {
    backgroundColor: "lightblue",
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
