import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const IconButton = ({ image, handlePress, containerStyles, imageStyles, isLoading, iconTint }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`min-h-[30px] min-w-[30px] rounded-full justify-center items-center border-2 border-black-100 
                ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Image
                source={image}
                resizeMode='contain'
                className={`w-8 h-8 px-1 ${imageStyles} ${isLoading ? 'opacity-50' : ''}`}
                tintColor={iconTint}
            />
        </TouchableOpacity>
    )
}

export default IconButton