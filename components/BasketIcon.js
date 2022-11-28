import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from 'react-currency-formatter'

const BasketIcon = () => {
  const navigator = useNavigation();
  const items = useSelector(selectBasketItems)
  const total = useSelector(selectBasketTotal)

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity className="flex-row bg-[#00CCBB] mx-5 p-4 rounded-lg items-center space-x-1">
        <Text className="text-white font-semibold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-center text-white text-lg font-semibold">View Basket</Text>
        <Text className="text-white font-semibold text-lg"><Currency quantity={total} currency="lkr" /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
