import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ScreenLayout from "../ScreenLayout";
import { IMAGES, THEMES } from "../constants";

export default function ({ navigation }) {
  return (
    <ScreenLayout>
      <View className=" mt-20 mx-4 z-50">
        <View className="justify-center items-center mb-10">
          <Image source={IMAGES.partlyCloudy} className="mt-20 self-center" />
        </View>
        <View className="flex mt-8 p-2">
          <Text className="text-white text-4xl text-center mb-5">
            Discover the Weather in Your City
          </Text>

          <Text
            style={{ color: THEMES.bgWhite(0.5), fontSize: 20 }}
            className="text-center"
          >
            Get to know your weather maps and radar forecast information.
          </Text>
        </View>
      </View>

      <View className=" mt-32">
        <TouchableOpacity
          className="mx-4 items-center p-4 border-none rounded-lg  bg-blue-500"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text className="text-white text-xl">Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}
