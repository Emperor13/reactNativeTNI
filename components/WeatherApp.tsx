import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBangkok from "./WeatherBangkok";

const WeatherApp = () => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  
  const toggleModal = (city:string) => {
    if(city === "London") {
        setisModalVisible(true);
        setSelectedCity("London");
    }
    if(city === "BKK") {
        setisModalVisible(true);
        setSelectedCity("BKK");
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeatherApp</Text>
      <Pressable style={[styles.button]} onPress={() => toggleModal("London")}>
        <Text style={styles.buttonText}>LONDON</Text>
      </Pressable>
      <Pressable style={[styles.button]} onPress={() => toggleModal("BKK")}>
        <Text style={styles.buttonText}>BANGKOK</Text>
      </Pressable>
      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
            {selectedCity == "London" && <WeatherLondon />}
            {selectedCity == "BKK" && <WeatherBangkok />}
          <Pressable
            style={[styles.closeButton]}
            onPress={() => setisModalVisible(!isModalVisible)}
          >
            <Text style={styles.closeButtonText}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default WeatherApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#3AA6B9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    padding: 20,
    margin:20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
});
