import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/solid";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="bg-white py-4 px-4">
      <View className="flex flex-row items-center">
        <Image
          source={{
            uri: "https://media.timeout.com/images/105846896/image.jpg",
          }}
          className="w-10 h-10 rounded-full"
        />
        <View className="mx-2 flex-1">
          <Text className="text-sm font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold text-gray-400">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="mt-4 items-center space-x-2 pb-2 flex-row">
        <View className="flex flex-row flex-1 items-center space-x-2 bg-gray-200 p-2">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurant and Cousines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsHorizontalIcon size={24} color="#00CCBB" />
      </View>
    </View>
  );
};

export default Header;
