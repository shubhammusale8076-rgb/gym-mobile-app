import { Platform, ScrollView, Text } from 'react-native'
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '@/components/appHeader/AppHeader';

const SafeAreaView = styled(RNSafeAreaView);

const Member = () => {
  return (
    <SafeAreaView
      className="screen"
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: Platform.OS === 'ios' ? 100 : 80
        }}
      >
        <AppHeader
          title="Members Directory"
          subtitle="Manage members,"
        />


      </ScrollView>
    </SafeAreaView>
  )
}

export default Member