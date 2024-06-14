import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import { images } from '../../constants'

import FormField from '../../components/formField'
import CustomButton from '../../components/customButton'

const SignUp = () => {

    const [form, setform] = useState({
        username: '',
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

                    {/* Username form field */}
                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setform({ ...form, username: e })}
                        otherStyles="mt-7"
                    />

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
                        title="Sign-Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-darkGrey font-pregular">
                            Already have an account?
                        </Text>
                        <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Log In</Link>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp