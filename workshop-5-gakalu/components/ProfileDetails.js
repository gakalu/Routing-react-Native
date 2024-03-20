import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import Badge from "./components/Badge";

const ProfileDetails = ({
  route: {
    params: { data },
  },
}) => {
  const detailsArr = [
    "company",
    "location",
    "followers",
    "following",
    "email",
    "bio",
  ];
  const profile = detailsArr.map((item) => {
    return (
      <View key={item}>
        <Text style={styles.rowContent}>{item}</Text>
        <Text style={styles.rowTitle}>{data[item]}</Text>
      </View>
    );
  });
  return (
    <View>
      <Badge userInfo={data} />
      {profile}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: "#48BBEC",
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});
export default ProfileDetails;
