import React, { useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const Hello: React.FC = () => {
    const color = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(color, {
            toValue: 150,
            duration: 1500,
        }).start();
    });

    const interpolateColor = color.interpolate({
        inputRange: [0, 150],
        outputRange: ['rgb(0, 0, 0)', 'rgb(51, 250, 170)'],
    });

    const animatedStyle = {
        color: interpolateColor,
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, animatedStyle]}>CODELEX</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 48,
        letterSpacing: 2.5,
    },
});
