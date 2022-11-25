import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const Splash = () => {
  const navigation = useNavigation();
  let customFonts = {
    Cairo: require("../constants/fonts/Cairo-VariableFont_wght.ttf"),
    Philosopher: require("../constants/fonts/Philosopher-Regular.ttf"),
  };

  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) return null;
  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={["#2a2a72", "#009ffd"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View>
          <View>
            <Image
              source={require("../assets/bubble2.png")}
              style={{
                position: "absolute",
                width: 50,
                height: 50,
                top: 20,
                left: 190,
              }}
            />
            <Image
              source={require("../assets/bubble2.png")}
              style={{
                position: "absolute",
                width: 50,
                height: 50,
                top: 420,
                left: 365,
              }}
            />
            <Image
              source={require("../assets/bubble2.png")}
              style={{
                position: "absolute",
                width: 90,
                height: 90,
                top: 350,
                left: 250,
              }}
            />
            <Image
              source={require("../assets/bubble2.png")}
              style={{
                position: "absolute",
                width: 150,
                height: 150,
                top: 20,
                left: 300,
              }}
            />
             <Image
              source={require("../assets/banner.png")}
              style={{
                position: "absolute",
                width: 380,
                height: 150,
                top: 30,
                // left: 300,
              }}
            />
            <Image
              source={require("../assets/bubble2.png")}
              style={{
                position: "absolute",
                width: 170,
                height: 170,
                top: 170,
                left: -20,
              }}
            />
            <Image
              source={require("../assets/dollar.png")}
              style={{
                position: "absolute",
                width: 130,
                height: 130,
                top: 190,
                left: 2,
              }}
            />
            <Image
              source={require("../assets/dollar.png")}
              style={{
                position: "absolute",
                width: 100,
                height: 100,
                top: 40,
                left: 320,
              }}
            />
            <Image
              source={require("../assets/dollar.png")}
              style={{
                position: "absolute",
                width: 60,
                height: 60,
                top: 365,
                left: 265,
              }}
            />
          </View>
        </View>

        {/* ************* */}
        <View
          style={{
            top: 470,
            width: 350,
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Philosopher",
              fontSize: 28,
              letterSpacing: 2,

              color: "white",
              textAlign: "center",
            }}
          >
            Seamlessly Handle
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "Cairo",
                fontSize: 26,
                margin: 4,

                // fontWeight: "bold",
                color: "goldenrod",
                textAlign: "center",
              }}
            >
              GOLD
            </Text>
            <Text
              style={{
                fontFamily: "Cairo",
                fontSize: 26,
                // fontWeight: "bold",
                color: "white",
                textAlign: "center",
                margin: 4,
              }}
            >
              Crypto Currency
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: "85%",
            backgroundColor: "rgba(255,255,255,0.85)",
            height: 65,
            borderRadius: 50,
            top: 600,
            alignSelf: "center",
          }}
          onPress={()=>navigation.navigate('OnBoarding')}
        >
          <View>
            <Text
              style={{
                color: "#009ffd",
                fontFamily: "Cairo",
                fontSize: 20,
                textAlign: "center",
                padding: 12,
              }}
            >
              Let's Discover
            </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
