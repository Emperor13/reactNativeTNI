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
        borderWidth: 2,
      },
      profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 10,
        marginTop: 30,
        shadowColor: "#4682b4",
      },
      profileName: {
        fontWeight: "semibold",
        fontSize: 20,
        color: "#4682b4",
        fontStyle: "italic"
      },  
      nameContainer: {
        width: 180,
        marginLeft: 20,
      },
});