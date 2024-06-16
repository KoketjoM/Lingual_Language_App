import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconButton from '../../components/iconButton';

import { icons } from '../../constants';
import FormField from '../../components/formField';

const HomePage = () => {

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                {/* Top Bar */}
                <View className="min-h-[120px] bg-white justify-evenly flex-row items-center">
                    <View>
                        <Text className="font-pregular text-gray-400 text-sm min-w-[220px]">Hey there,</Text>
                        <Text className="font-psemibold text-black mt-1 text-2xl">UserName 👋</Text>
                    </View>
                    <IconButton
                        image={icons.user}
                        containerStyles="w-14 h-14 rounded-fll justify-center items-center border-2 border-grey-200"
                        iconTint="#455370"
                    />
                </View>

                {/* Main section */}
                <View className="mt-6 px-6">

                    {/* Search Bar */}
                    <Text className="font-psemibold text-darkGrey text-xl">Need Help?</Text>
                    <TouchableOpacity className="w-full h-12 px-4 bg-white border-2 border-lightGrey rounded-full mt-2 flex-row justify-center items-center">
                        <TextInput
                            className="flex-1 text-black font-pregular"
                            //value={value}
                            placeholder='Ask a question'
                            placeholderTextColor="#ADB3BC"
                        // onChangeText={handleChangeText}
                        />
                        <Image
                            source={icons.search}
                            className="w-6 h-6"
                            resizeMode='contain'
                            tintColor='#ADB3BC'
                        />
                    </TouchableOpacity>

                    {/* Quiz section */}
                    <View className="mt-6">
                        <Text className="font-psemibold text-darkGrey text-xl">Daily Quizzes</Text>

                        {/* Quiz Card */}
                        <TouchableOpacity className="w-full h-16 bg-white border-2 border-lightGrey rounded-full mt-4 flex-row justify-evenly items-center">
                            <Image
                                source={icons.checkCircle}
                                resizeMode='contain'
                                className="w-8 h-8"
                                tintColor="#FF9841"
                            />
                            <Text className="font-pregular text-base text-black-100 min-w-[200px]">Vocabulary Quizz</Text>
                            <Image
                                source={icons.chevronRight}
                                resizeMode='contain'
                                className="w-8 h-8"
                                tintColor="#455370"
                            />
                        </TouchableOpacity>

                        {/* Quiz Card */}
                        <TouchableOpacity className="w-full h-16 bg-white border-2 border-lightGrey rounded-full mt-4 flex-row justify-evenly items-center">
                            <Image
                                source={icons.checkCircle}
                                resizeMode='contain'
                                className="w-8 h-8"
                                tintColor="#FF9841"
                            />
                            <Text className="font-pregular text-base text-black-100 min-w-[200px]">Grammar Quizz</Text>
                            <Image
                                source={icons.chevronRight}
                                resizeMode='contain'
                                className="w-8 h-8"
                                tintColor="#455370"
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomePage