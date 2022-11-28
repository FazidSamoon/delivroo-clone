import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemWithId } from "../features/basketSlice";

const DishRow = ({ key, id, name, description, image, price }) => {
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) {
      return
    }
    dispatch(removeFromBasket({id}))
  }
  return (
    <>
      <TouchableOpacity
        className={`px-4 bg-white py-4 `}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="LKR" />
            </Text>
          </View>

          <View className="">
            <Image
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="transition-all ease-in-out duration-500 bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={items.length <= 0} onPress={removeItemFromBasket}>
              <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
