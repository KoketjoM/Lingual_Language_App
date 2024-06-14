import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Separate layout for auth screens and onboarding (No bottom menu)

const AuthLayout = () => {
    return (
        <>
            <Stack>

                {/* Sign in screen */}
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />

                {/* Sign up screen */}
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />

            </Stack>

            <StatusBar
                backgroundColor='#FBF6FC'
                style='dark'
            />
        </>
    )
}

export default AuthLayout