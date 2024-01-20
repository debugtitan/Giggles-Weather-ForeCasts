import { StatusBar } from "expo-status-bar";
import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { IMAGES } from "./constants";

export default function ScreenLayout({children}) {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={IMAGES.bg}
        className="absolute w-full h-full"
        blurRadius={40}
      />
      <SafeAreaView className="flex flex-1">
        <View
          style={{ height: "10%" }}
          className=" mt-12 mx-4 relative z-50"
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  );
}
