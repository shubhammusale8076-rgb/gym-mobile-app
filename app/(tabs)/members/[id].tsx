import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const MemberDetails = () => {
  
  
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Member Details : {id}</Text>
       <Link href="/" className="text-blue-500 mt-4"> Go Back</Link> 
    </View>
  )
}

export default MemberDetails;