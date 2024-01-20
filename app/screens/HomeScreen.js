import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import ScreenLayout from "../ScreenLayout";
import { IMAGES, THEMES } from "../constants";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
} from "react-native-heroicons/outline";

export default function () {
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

        <TouchableOpacity className="bg-slate-800 rounded-md ml-4 p-2 ">
          <MapPinIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {/* FORECAST SCREEN */}
      <View className="space-y-2">
        <Text className="text-white text-3xl  mt-5 ml-5 tracking-widest">
          Today's Report
        </Text>
      </View>

      <View className="justify-center items-center mt-10 mb-10">
        <Image source={IMAGES.partlyCloudy} className="mt-5 self-center" />
      </View>
      <View className="space-y-2">
        <Text className="text-center text-white text-xl ml-5 mb-3 tracking-widest">
          Partly Cloudy
        </Text>
        <Text className="text-center font-bold text-white text-6xl ml-5">
          29&#176;
        </Text>
      </View>

      <View className="mb-12 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
          <CalendarDaysIcon size="22" color="white" />
          <Text className="text-white text-base">Daily forecast</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          <View
            className="flex justify-center items-center w-20 rounded-xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: THEMES.bgWhite(0.55) }}
          >
            <Image source={IMAGES.heavyRain} className="h-5 w-5" />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>

          <View
            className="flex justify-center items-center w-20 rounded-xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: THEMES.bgWhite(0.55) }}
          >
            <Image source={IMAGES.sunny} className="h-5 w-5" />
            <Text className="text-white">Tuesday</Text>
            <Text className="text-white text-xl font-semibold">19&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-20 rounded-xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: THEMES.bgWhite(0.55) }}
          >
            <Image source={IMAGES.heavyRain} className="h-5 w-5" />
            <Text className="text-white">Wednesday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-20 rounded-xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: THEMES.bgWhite(0.55) }}
          >
            <Image source={IMAGES.drop} className="h-5 w-5" />
            <Text className="text-white">Thursday</Text>
            <Text className="text-white text-xl font-semibold">14&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-20 rounded-xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: THEMES.bgWhite(0.55) }}
          >
            <Image source={IMAGES.sunny} className="h-5 w-5" />
            <Text className="text-white">Friday</Text>
            <Text className="text-white text-xl font-semibold">23&#176;</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
}
