import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
      },
      profileImage: {
        borderRadius: 200,
        width: 100,
        height: 100,
        borderColor: "#add8e6",
        borderWidth: 4,
      },
      profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        marginTop: 30,
      },
      profileName: {
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 16,
        color: "#4682b4"
      },  
});