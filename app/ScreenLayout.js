import { StatusBar } from "expo-status-bar";
import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { IMAGES } from "./constants";

export default function ScreenLayout({ children }) {
  return (
    <View className="flex-1 relative bg-black">
      <StatusBar style="light" />
      {/*<Image
        source={IMAGES.bg}
        className="absolute w-full h-full"
        blurRadius={120}
  />*/}
      <SafeAreaView className="flex flex-1">
        <View className=" mt-14 mx-4 z-50">{children}</View>
      </SafeAreaView>
    </View>
  );
}
