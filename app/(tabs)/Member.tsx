import {  Text } from 'react-native'
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const Member = () => {
  return (
    <SafeAreaView>
      <Text>Member</Text>
    </SafeAreaView>
  )
}

export default Member