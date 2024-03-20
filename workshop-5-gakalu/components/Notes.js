import React, { Component } from "react";
import { StyleSheet } from "react-native";

function Notes({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>
        I am Getachew Akalu, Full stack web developer knowing on
        java,javascript,NodeJs,React.js,ReactNative,Angular,MongoDB,MySQL I am
        currently MSD graduate student and finishing my master soon .. very
        passionated working on Angular,React and Node. Ask me more about me.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  button: {
    height: 60,
    backgroundColor: "#48BBEC",
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: "#111",
    flex: 10,
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Notes;
