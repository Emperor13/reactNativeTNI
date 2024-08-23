import { ActivityIndicator, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListCallBackend = () => {
  //กำหนดstateสำหรับเก็บข้อมูล
  const [data, setdata] = useState<User[]>([]);
  const [loading, setloading] = useState(true);

  //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ Component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  //ฟังก์ชั่น _renderItem สำหรับใช้ใน flatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? ( // ถ้ายังโหลดข้อมูลอยู่จะแสดง ActivityIndicator
        <ActivityIndicator size="large" color="red" />
      ) : (
        //ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง flatList
        <FlatList
          data = {data}
          renderItem = {_renderItem}
          keyExtractor = {item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatListCallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});