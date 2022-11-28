import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClients from "../sanity";

const FeaturedRow = ({ id, description, title }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClients
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {
            ...,
          }
        },
        
      }[0]
    `,
        { id: id }
      )
      .then((res) => {
        setRestaurants(res?.restaurants);
      });
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-gray-500 text-sm">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      >
        {/* restaurantCards */}

        {restaurants?.map((data) => (
          <RestaurantCard
            key={data._id}
            id={data._id}
            imageUrl={data.image}
            title={data.name}
            rating={4.5}
            genre="Japanese"
            address={data.address}
            short_description={data.short_description}
            dishes={data.dishes}
            long={data.long}
            lat={data.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
