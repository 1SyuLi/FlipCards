import React from "react";
import { StyleSheet, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Card, Title } from "react-native-paper";

interface CardProps extends TouchableOpacityProps {
    image: any;
}


export function FlipCard({ image, ...rest }) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0}>
            <Card style={styles.card}>
                <Card.Content>
                    <Image source={image} style={styles.image} />
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 400,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 18,
    },
    image: {
        width: 300,
        height: 400,
        resizeMode: 'contain',
        marginTop: -20,
    }
});