import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { ListItem, Avatar, Badge } from "@rneui/themed";

const MaterialHeaderButton = (props: any) => (
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "สินค้า",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);

  const getProduct = async () => {
    try {
      const res = await findAllProduct();
      setData(res.data.data);
      // console.log(res.data.data);
      setisLoading(true);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setisLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if (isLoading) {
    <ActivityIndicator size="large" color="blue" />;
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <View>
        <ListItem
          bottomDivider
          onPress={() =>
            navigation.navigate("Detail", {
              id: item.id,
              title: item.title,
              detail: item.detail,
            })
          }
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={isLoading}
      />
    </View>
  );
};

export default ProductScreen;
