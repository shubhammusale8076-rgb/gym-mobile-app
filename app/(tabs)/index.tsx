import { Text } from 'react-native';
import "@/global.css";
import { Link } from 'expo-router';
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView} from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
  <>
    <SafeAreaView className="flex-1 items-center justify-center bg-surface-lowest">
      {/* <SplashScreen /> */}

      <Text className="text-[50px]  font-bold text-primary ">KINETIX</Text>

      <Link href="/(auth)/log-in" className="mt-10 px-14 py-4 rounded-full bg-surface-container-low shadow-xl ">
        <Text
          className=" text-[16px] font-bold uppercase text-primary"
          style={{
            letterSpacing: 2,
          }}
        >
          Transform Yourself
        </Text>
      </Link>
    </SafeAreaView>
  </>
  );
} 