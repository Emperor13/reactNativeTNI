import { StyleSheet } from "react-native";

const stylesPractice = StyleSheet.create({
  titleBg: {
    backgroundColor: "lightgreen",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  bgColor: {
    alignItems: "flex-end",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  myText: {
    color: "gray",
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 8,
},

});


const stylesProfile = StyleSheet.create({
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
    fontStyle: "italic",
  },
  nameContainer: {
    width: 180,
    marginLeft: 20,
  },
});

export { stylesProfile, stylesPractice };
