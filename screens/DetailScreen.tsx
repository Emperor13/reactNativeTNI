import { ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProducbyId } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";
import { Tile } from "@rneui/themed";
import { Dimensions } from "react-native";

const DetailScreen = (): React.JSX.Element => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const prod_id = route.params.id;
  const getProdById = async () => {
    try {
      const res = await findProducbyId(prod_id);
      setData(res.data.data);
      setLoading(true);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProdById();
    }, [])
  );

  if (loading) {
    <ActivityIndicator size="large" color="blue" />;
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View style={styles.tileContainer}>
        <Tile
          imageSrc={{
            uri: "https://www.b-sides.tv/wp-content/uploads/2019/03/aurora.jpg",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          featured
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          activeOpacity={1}
          width={Dimensions.get('screen').width - 20} //ลบขอบทั้งสองข้าง
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.ch_id}
        onRefresh={async () => {
          await getProdById();
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#f7f7f7", // สีพื ้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", // สีขาวส าหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //ก าหนดให้เนื ้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู ่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "#000", // สีขาวส าหรับวันที่
  },
});
