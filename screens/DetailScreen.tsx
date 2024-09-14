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
      <View>
        <Text>{item.ch_title}</Text>
        {/* <Text>{item.ch_dateadd}</Text> */}
      </View>
    );
  };

  return (
    <View>
      <FlatList
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
});
