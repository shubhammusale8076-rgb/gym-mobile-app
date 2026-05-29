import React from 'react'
import { Text, View, TouchableOpacity } from "react-native";


export default function SplashScreen() {
  return (
  <View className="flex-1 bg-surface" >
      <View className="flex-1 items-center justify-center ">

        <View
          className="w-28 h-28 rounded-full items-center justify-center bg-primary mb-8"
          style={{
            shadowColor: "#8034ad",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.4,
            shadowRadius: 20,
            elevation: 10,
          }}
        >
          {/* <MaterialCommunityIcons
            name="dumbbell"
            size={48}
            color="#FFFFFF"
          /> */}
        </View>
        <Text className="text-[50px] mb-3 font-bold text-primary"

        >
          KINETIX</Text>
        <Text className="text-lg font-bold text-on-surface-variant"
          style={{
            letterSpacing: 6,
          }}
        >THE KINETIX ATHLETE</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          className="mt-10 px-14 py-4 rounded-full bg-surface-container-low shadow-xl "

        >
          <Text
            className=" text-[16px] font-bold uppercase text-primary"
            style={{
              letterSpacing: 2,
            }}
          >
            Transform Yourself
          </Text>
        </TouchableOpacity>
      </View>

      <View className="pb-14 px-12 items-center">

        {/* Progress Line */}
        <View className="w-full h-0.5 bg-[#E5E0E7] rounded-full overflow-hidden">
          <View className="w-1/2 h-full bg-primary" />
        </View>

        {/* Loading Text */}
        <Text
          className="mt-10 text-on-surface-variant text-[12px] uppercase w-100 text-center"
          style={{
            letterSpacing: 3,
          }}
        >
          Establishing Secure Connection
        </Text>

        {/* Footer */}
        <Text className="mt-3 text-on-surface text-[16px] font-bold text-center">
          EST. MMXXIV
        </Text>
      </View>
    </View>
  )
}
