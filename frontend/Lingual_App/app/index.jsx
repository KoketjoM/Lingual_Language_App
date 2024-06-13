import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Onboarding images
import { images } from '../constants';
import CustomButton from '../components/customButton';
// import CustomButton from '../components';

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center h-full px-4">

                    {/* Logo */}
                    <Image
                        source={images.logo}
                        className="w-[248.5px] h-[72.8]"
                        resizeMode='contain'
                    />

                    {/* Splash Image */}
                    <Image
                        source={images.illustOne}
                        className="max-w-[380px] w-full h-[300px] mt-7"
                        resizeMode='contain'
                    />

                    {/* Text view */}
                    <View className="relative mt-5">
                        <Text className="text-3xl text-black font-bold text-center">
                            Practice by Speaking with <Text className="text-firstAccent">Lingual</Text>
                        </Text>
                    </View>

                    <Text className="text-sm font-pregular text-black-100 mt-7 text-center">
                        Become fluent quickly with an on demand language exchange buddy
                    </Text>

                    {/* Custom component button */}
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            {/* Phone timebar */}
            <StatusBar backgroundColor='#FBF6FC' style='dark' />
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
