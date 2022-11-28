import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray-300 p-4"
            source={{
              uri: urlFor(imageUrl).url(),
            }}
          />

          <TouchableOpacity
            className="absolute top-10 left-5 p-2 bg-gray-200 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00CC88" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="p-4">
            <Text className="text-2xl font-semibold">{title}</Text>
            <View className="flex-row space-x-2 my-2">
              <View className="flex-row space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-green-500">
                  {rating}. {genre}
                </Text>
              </View>

              <View className="flex-row space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-green-500">{address}.</Text>
              </View>
            </View>

            <View className="">
              <Text className="text-gray-600 mt-3 pb-4">
                {short_description}
              </Text>
            </View>

            <TouchableOpacity className="space-x-2 flex-row items-center">
              <QuestionMarkCircleIcon size={22} color="gray" opacity={0.5} />
              <Text className="flex-1 pl-2 text-base font-semibold">
                Have a food allergy?
              </Text>
              <ChevronRightIcon size={22} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="pb-28">
          <Text className="px-4 pt-6 mb-3 text-xl font-semibold">Menu</Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish._key}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;
