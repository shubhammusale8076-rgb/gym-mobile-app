import {  Text } from 'react-native'
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const setting = () => {
  return (
    <SafeAreaView>
      <Text>setting</Text>
    </SafeAreaView>
  )
}

export default setting