import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CreatePostScreen = ({navigation}:any):React.JSX.Element => {
    const [postText, setPost] = useState("");

    const enterPost = (val:string) => {
        setPost(val);
    }

    const toHome = () => {
        navigation.navigate({
            name: "Home",
            params: {
                post:postText,
            }
        })
    }
  return (
    <View>
      <TextInput onChangeText={enterPost} placeholder='Tell me something...' value={postText} style={{height: 200, padding: 10, backgroundColor:"white"}}></TextInput>
      <Button title="Create Post" onPress={toHome}/>
    </View>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({})