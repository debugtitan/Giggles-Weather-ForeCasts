import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import ScreenLayout from "../ScreenLayout";
import { THEMES } from "../constants";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function Search() {
  return (
    <ScreenLayout>
      <View className="items-center justify-center">
        <Text className="text-white text-xl font-bold tracking-widest">
          Pick Location
        </Text>
        <Text
          style={{ color: THEMES.bgWhite(0.3), fontSize: 17 }}
          className=" text-center p-4"
        >
          Find the area or city that you want to know the detailed weather info
          at this time
        </Text>
      </View>
      <View className="flex flex-row justify-between p-3 mt-4">
        <TouchableOpacity className="bg-slate-900 rounded-md w-64">
          <View className="absolute left-3 bottom-3">
            <MagnifyingGlassIcon size="17" color="gray" />
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={"gray"}
            className="pl-6 h-10 flex-1 text-base ml-8 text-gray-400"
          />
        </TouchableOpacity>

        <TouchableOpacity className="bg-slate-900 rounded-md ml-4 p-2 ">
          <MapPinIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}
