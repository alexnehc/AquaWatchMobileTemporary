import React from "react";
import { View } from "react-native";
import CustomWebView from "../components/CustomWebView";

export default function StoryScreen() {
  return (
    <View style={{flex: 3, background: "#333333"}}>
      <CustomWebView uri="https://bluecolab.pace.edu/about-us-2/" />
    </View>
  )
}
