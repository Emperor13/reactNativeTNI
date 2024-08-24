import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

//Define types for the data structure
type User = {
  id: number;
  name: string;
  email: string;
};

const AxiosGetData = (): React.JSX.Element => {

    const [user, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [err, setErr] = useState<string|null>(null);

    //get Data by Axios
    const url = `https://jsonplaceholder.typicode.com/users`;
    const fetchData = async () => {
        try{
            
            const res = await axios.get<User[]>(url);
            setUser(res.data);
        } catch {
            setErr("Failed to fetch data.");
        } finally {
            setLoading(false);
        } //end try/catch
    }; 
    
    useEffect(() => {
        fetchData();
    }, []);

    
    if(loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#3cfff0"/>
            </View>
        );
    }

    if(err) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{err}</Text>
            </View>
        );
    }



  return (
    <FlatList 
        contentContainerStyle = {styles.container}
        data = {user}
        renderItem = {({item}) => (
            <View style = {styles.item}>
                <Text style = {styles.name}>{item.name}</Text>
                <Text style = {styles.email}>{item.email}</Text>
            </View>
        )}
        keyExtractor={item=>item.id.toString()} // Always convert id from number to String when using KeyExtractor
    
    />
  );
};

export default AxiosGetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#f8d53e",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
