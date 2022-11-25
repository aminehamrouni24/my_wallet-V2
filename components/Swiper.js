import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


const Swiper = () => {
    let customFonts = {
      Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
      Philosopher: require("../constants/fonts/Philosopher-Regular.ttf"),
    };

    const [isLoaded] = useFonts(customFonts);
    if (!isLoaded) return null;
  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{
        width: "90%",
        alignSelf: "center",
      }}
    >
      {/* Image part */}
      <Image
        source={require("../assets/onboard1.png")}
        resizeMode="contain"
        style={{
          width: 220,
          height: 200,
          tintColor: "#FA8072",
          alignSelf: "center",
          marginTop: 85,
          marginBottom: 35,
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          borderBottomEndRadius: 120,
          borderTopEndRadius: 130,
          borderBottomStartRadius: 170,
          borderTopStartRadius: 90,
          backgroundColor: "rgba(250,128,114,0.15)",
          position: "absolute",
          top: 210,
          left: 50,
        }}
      ></View>
      <View
        style={{
          width: 150,
          height: 150,
          borderBottomEndRadius: 170,
          borderTopEndRadius: 90,
          borderBottomStartRadius: 120,
          borderTopStartRadius: 130,
          backgroundColor: "rgba(250,128,114,0.15)",
          position: "absolute",
          top: 210,
          left: 170,
        }}
      ></View>
      {/* Text Part */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 35,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            letterSpacing: 2,
            // fontWeight: "bold",
            fontFamily: "Philosopher",
          }}
        >
          Take hold
        </Text>
        <Text
          style={{
            fontSize: 33,
            letterSpacing: 2,
            fontFamily: "Philosopher",

            // fontWeight: "bold",
          }}
        >
          Of your finances
        </Text>
      </View>

      {/* ****** */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: 35,
          marginBottom: 150,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "justify",
            fontFamily: "Philosopher",
          }}
        >
          Running your finances with Gold Crypto-currency is much easier ..
        </Text>
      </View>
      {/* Skip Part */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,255,0.75)",
            width: 60,
            height: 60,
            borderBottomEndRadius: 400,
            borderTopEndRadius: 400,
            borderBottomStartRadius: 400,
            borderTopStartRadius: 400,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              padding: 2,
              alignItems: "center",
              fontSize: 15,
              marginTop: 15,
              color: "white",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>

        {/* ******** */}
        <Text
          style={{
            padding: 2,
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 15,
            color: "black",
          }}
        >
          . . .
        </Text>
        {/* <Text style={{
            padding:2,
            alignItems:"center",
            fontSize:16,
            fontWeight:"bold",
            marginTop:20,
            color:"black"
          }}>1/3</Text> */}
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(250,128,114,0.75)",
            width: 60,
            height: 60,
            borderBottomEndRadius: 400,
            borderTopEndRadius: 400,
            borderBottomStartRadius: 400,
            borderTopStartRadius: 400,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("SecondPage")}
        >
          <Text
            style={{
              padding: 2,
              alignItems: "center",
              fontSize: 15,
              marginTop: 15,
              color: "white",
            }}
          >
            1/3
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Swiper;

const styles = StyleSheet.create({});
