import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import React from "react";
import { IMAGES } from "./constants";

export default function ScreenLayout() {
  return (
    <View className="flex relative">
      <StatusBar style="light"/>
      <Image source={IMAGES.bg} />
    </View>
  );
}
