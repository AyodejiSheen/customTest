import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, Text } from 'react-native'

export const Rating = ({ value, text }) => {

    const size = 9;

    return (
        <>
            <View className="flex-row gap-0.5 items-center">
                <FontAwesome
                    name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
                    color="orange"
                    size={size} />

                <FontAwesome
                    name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
                    color="orange"
                    size={size} />

                <FontAwesome
                    name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
                    color="orange"
                    size={size} />

                <FontAwesome
                    name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
                    color="orange"
                    size={size} />

                <FontAwesome
                    name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
                    color="orange"
                    size={size} />

                {
                    text !== null && (
                        <Text className="ml-4">{text}</Text>
                    )
                }
            </View>

        </>
    )
}
