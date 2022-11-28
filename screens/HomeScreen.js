import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/common/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
          ...,
          restaurants[] -> {
            ...,
          }
        }`
      )
      .then((res) => {
        setFeaturedCategories(res);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header />

      {/* body */}
      <ScrollView
        className=" bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}

        {featuredCategories?.map((category) => (
          <FeaturedRow
            title={category.name}
            description={category.short_description}
            id={category._id}
            key={category._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
