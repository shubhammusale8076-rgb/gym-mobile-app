import React, { useState, useCallback } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { authService } from '@/lib/authService';
import "@/global.css";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      await authService.forgotPassword(email);
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={['top']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          className="px-8 pt-6"
        >
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => router.back()}
            className="size-12 rounded-full bg-surface-container-low items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Go Back"
          >
            <Ionicons name="arrow-back" size={24} color="#1f1a21" />
          </TouchableOpacity>

          <View className="mt-10">
            <Text className="text-3xl font-sans-bold text-on-surface">
              Forgot Password
            </Text>
            <Text className="mt-2 text-base font-sans-medium text-on-surface-variant leading-6">
              Enter your email address and we &apos;ll send password reset instructions.
            </Text>
          </View>

          {isSuccess ? (
            <View className="mt-10 bg-success-bg p-6 rounded-4xl items-center">
              <View className="size-16 bg-white rounded-full items-center justify-center mb-4">
                <Ionicons name="mail-unread-outline" size={32} color="#116b3a" />
              </View>
              <Text className="text-lg font-sans-bold text-success-text text-center">
                Reset Link Sent!
              </Text>
              <Text className="mt-2 text-sm font-sans-medium text-success-text text-center opacity-80">
                Password reset instructions have been sent to {email}.
              </Text>
              
              <TouchableOpacity 
                className="mt-8 btn-primary w-full bg-success-text"
                onPress={() => router.replace('/(auth)/log-in')}
              >
                <Text className="btn-primary-text">Back to Login</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="mt-10">
              {error && (
                <View className="mb-4 p-3 bg-danger-bg rounded-xl">
                  <Text className="text-danger-text text-sm font-sans-medium">{error}</Text>
                </View>
              )}

              <View>
                <Text className="input-label uppercase tracking-widest text-[10px]">
                  Email Address
                </Text>
                <View className="flex-row items-center border border-outline-variant bg-surface-container-low rounded-2xl px-4 py-4">
                  <Ionicons name="mail-outline" size={20} color="#6f6672" />
                  <TextInput 
                    className="flex-1 ml-3 text-on-surface font-sans-medium"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    accessibilityLabel="Email Address"
                  />
                </View>
              </View>

              <TouchableOpacity 
                className={`mt-10 btn-primary flex-row justify-center items-center ${isLoading ? 'opacity-70' : ''}`}
                onPress={handleSubmit}
                disabled={isLoading}
                accessibilityRole="button"
                accessibilityLabel="Send Reset Link"
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="btn-primary-text">Send Reset Link</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => router.replace('/(auth)/log-in')}
                className="mt-6 items-center"
              >
                <Text className="text-sm font-sans-bold text-primary">
                  Back to Login
                </Text>
              </TouchableOpacity>
            </View>
          )}

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;