import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import "@/global.css";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';

const SafeAreaView = styled(RNSafeAreaView);

const LogIn = () => {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const [email, setEmail] = useState('member@kinetix.club');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError(null);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  }, [email, password, login]);

  return (
    <SafeAreaView className="auth-safe-area">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="auth-screen"
      >

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        >
          {/* <View className="h-2/5 w-full">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop' }}
              className="w-full h-full"
              resizeMode="cover"
            />

          </View> */}

          <View
            className="flex-1 bg-surface -mt-10  px-8 pt-10" >

            <View className="h-30 mb-8 flex-row items-center">
              <View className="mr-5 size-13 bg-surface-lowest rounded-full items-center justify-center"
                style={{
                  shadowColor: "#8034ad",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.4,
                  shadowRadius: 20,
                  elevation: 10,
                }}>
                <MaterialCommunityIcons
                  name="dumbbell"
                  size={24}
                  color="#661493"
                />
              </View>
              <Text className="ml-3 text-primary text-[50px] font-sans-bold tracking-widest">
                KINETIX
              </Text>
            </View>
            
            <Text className="text-4xl font-sans-extrabold text-on-surface">
              Welcome Back
            </Text>
            <Text className="mt-3 text-base font-sans-medium text-on-surface-variant leading-6">
              Enter your details to access your curator dashboard.
            </Text>

            {error && (
              <View className="mt-4 p-3 bg-danger-bg rounded-xl">
                <Text className="text-danger-text text-sm font-sans-medium">{error}</Text>
              </View>
            )}

            <View className="mt-8">
              <Text className="input-label uppercase tracking-widest ">
                Email Address
              </Text>
              <View className="flex-row items-center border border-[#6f66721a] bg-surface-container-low rounded-2xl px-4 py-4">
                <MaterialCommunityIcons
                  name="account-outline"
                  size={18}
                  color="#661493"
                />
                <TextInput
                  className="flex-1 ml-3 text-on-surface font-sans-medium"
                  placeholder="member@kinetix.club"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  accessibilityLabel="Email Address"
                />
              </View>
            </View>

            <View className="mt-6">
              <Text className="input-label uppercase tracking-widest ">
                Password
              </Text>
              <View className="flex-row items-center border border-[#6f66721a] bg-surface-container-low rounded-2xl px-4 py-4">
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={18}
                  color="#661493"
                />
                <TextInput
                  className="flex-1 ml-3 text-on-surface font-sans-medium"
                  placeholder="........"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  accessibilityLabel="Password"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  accessibilityRole="button"
                  accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                >
                  <MaterialCommunityIcons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#6f6672"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View className="mt-6 flex-row items-center justify-between">
              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => setRememberMe(!rememberMe)}
                accessibilityRole="checkbox"
                accessibilityLabel="Remember me"
              >
                <View className={`size-5 rounded border ${rememberMe ? 'bg-primary border-primary' : 'border-on-surface-variant'} items-center justify-center`}>
                  {rememberMe && <MaterialCommunityIcons name="checkbox-blank-outline" size={14} color="white" />}
                </View>
                <Text className="ml-2 text-sm font-sans-medium text-on-surface-variant">
                  Remember me
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push('/(auth)/forgot-password')}
                accessibilityRole="link"
                accessibilityLabel="Forgot Password"
              >
                <Text className="text-sm font-sans-bold text-primary">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              className={`mt-10 btn-primary flex-row justify-center items-center ${isLoading ? 'opacity-70' : ''}`}
              onPress={handleLogin}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Sign In"
            >
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="btn-primary-text">Sign In</Text>
              )}
            </TouchableOpacity>


          </View>
        </ScrollView>

      </KeyboardAvoidingView>


    </SafeAreaView>


  );
};

export default LogIn;