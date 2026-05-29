import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const MemberDetails = () => {
  
  
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Member Details : {id}</Text>
    </View>
  )
}

export default MemberDetails;