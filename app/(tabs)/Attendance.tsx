import {  Text } from 'react-native'
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);


const Attendance = () => {
  return (
    <SafeAreaView>
      <Text>Attendance</Text>
    </SafeAreaView>
  )
}

export default Attendance