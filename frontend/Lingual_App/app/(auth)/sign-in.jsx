import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { supabase } from '../../utils/supabase'
import { AppState, Alert } from 'react-native'

import { images } from '../../constants'
import FormField from '../../components/formField'

import CustomButton from '../../components/customButton'
import IconButton from '../../components/iconButton'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

const SignIn = () => {

    // USED FOR DEVELOPMENT ONLY
    const submit = () => {

        // Set to global state . . .

        // Route to home page
        router.replace('/home')
    }
    //

    // Supabase
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }
    // End Supabase

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className="w-[230px] h-[70px]"
                    />

                    <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Log in to Lingual</Text>

                    {/* Email form field */}
                    <FormField
                        title="Email"
                        value={email}
                        handleChangeText={(text) => setEmail(text)}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder='email@address.com'
                    />

                    {/* Password form field */}
                    <FormField
                        title="Password"
                        value={password}
                        handleChangeText={(text) => setPassword(text)}
                        otherStyles="mt-7"
                        placeholder='Password'
                    />

                    <CustomButton
                        title="Sign-In"
                        // handlePress={() => signInWithEmail()}
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={loading}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-darkGrey font-pregular">
                            Don't have an account?
                        </Text>
                        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
                    </View>

                    {/* Goole and apple log in */}
                    <View className="justify-center pt-5 flex-row gap-2 items-center">
                        <Image
                            source={images.path}
                            tintColor="#455370"
                            resizeMode='contain'
                            className="w-16"
                        />
                        <Text className="text-sm text-darkGrey font-pregular">Or sign up with</Text>
                        <Image
                            source={images.path}
                            tintColor="#455370"
                            resizeMode='contain'
                            className="w-16"
                        />
                    </View>

                    {/* Logo Buttons */}
                    <View className="pt-5 flex-row gap-2 items-center justify-evenly">
                        <IconButton
                            image={images.googleLogo}
                            // handlePress={submit}
                            isLoading={loading}
                            containerStyles="w-16 h-16 rounded-full justify-center items-center border-2 border-black-100"
                        />

                        <IconButton
                            image={images.appleLogo}
                            // handlePress={submit}
                            isLoading={loading}
                            containerStyles="w-16 h-16 rounded-full justify-center items-center border-2 border-black-100"
                        />
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn