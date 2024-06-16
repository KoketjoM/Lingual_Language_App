import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setshowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-500 font-pmedium">{title}</Text>
            <View className="w-full h-14 px-4 bg-white-100 border-2 border-white-200 rounded-full focus:border-secondary-100 items-center flex-row">
                <TextInput
                    className="flex-1 text-black font-psemibold"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {/* Feature to show or hide password */}
                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeOff}
                            className="w-6 h-6"
                            resizeMode='contain'
                            tintColor='#383F66'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField