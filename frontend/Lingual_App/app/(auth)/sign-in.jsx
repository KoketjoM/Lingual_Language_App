import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { images } from '../../constants'
import FormField from '../../components/formField'

import CustomButton from '../../components/customButton'
import IconButton from '../../components/iconButton'

const SignIn = () => {

    const [form, setform] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setisSubmitting] = useState(false)

    const submit = () => {

    }

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
                        value={form.email}
                        handleChangeText={(e) => setform({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    {/* Password form field */}
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setform({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign-In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
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
                            handlePress={submit}
                            isLoading={isSubmitting}
                            containerStyles="w-16 h-16 rounded-full justify-center items-center border-2 border-black-100"
                        />

                        <IconButton
                            image={images.appleLogo}
                            handlePress={submit}
                            isLoading={isSubmitting}
                            containerStyles="w-16 h-16 rounded-full justify-center items-center border-2 border-black-100"
                        />
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignIn