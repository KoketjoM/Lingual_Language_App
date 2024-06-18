import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { useState } from 'react'
import React from 'react'

import { icons } from '../constants'

const QuizCard = ({ title, cardStyles, textStyles, isLoading, handlePress, iconStyles, iconTint }) => {

    // Automatically set by quiz function (TBD)
    const [isDone, setIsDone] = useState(false)

    return (
        <TouchableOpacity
            className={`w-full h-16 bg-white border-2 border-lightGrey rounded-full mt-4 flex-row justify-evenly items-center  
                ${cardStyles} ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <TouchableOpacity onPress={() => setIsDone(!isDone)}>
                <Image
                    source={!isDone ? icons.circle : icons.checkCircle}
                    resizeMode='contain'
                    className={`w-8 h-8 ${iconStyles}`}
                    tintColor={!isDone ? iconTint : '#FF9841'}
                />
            </TouchableOpacity>

            <Text className={`font-pregular text-base text-black-100 min-w-[200px] ${textStyles}`}>{title}</Text>
            {/* Need to implement page nav for this button */}
            <TouchableOpacity>
                <Image
                    source={icons.chevronRight}
                    resizeMode='contain'
                    className={`w-8 h-8 ${iconStyles}`}
                    tintColor={`#455370 ${iconTint}`}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default QuizCard