import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, KeyboardAvoidingView } from "react-native";
import { FlipCard } from "./FlipCard";
import FrontImage from '../../assets/front.png';
import BackImage from '../../assets/back.gif';

const Home: React.FC = () => {
    const animate = useRef(new Animated.Value(0));
    const [isFlipped, setIsFlipped] = useState(false);
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    const frontRef = useRef();
    const backRef = useRef();

    const doAFlip = () => {
        Animated.timing(animate.current, {
            duration: 300,
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped);
        });
    };

    const interpolatedValueFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"],
    });

    const interpolatedValueBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["180deg", "360deg"],
    });

    const rotateFront = {
        transform: [
            {
                rotateY: interpolatedValueFront,
            },
        ],
    };

    const rotateBack = {
        transform: [
            {
                rotateY: interpolatedValueBack,
            },
        ],
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View style={[styles.hidden, styles.absolute, rotateFront]}>

                <FlipCard
                    title="Front"
                    image={FrontImage}
                    inputRef={frontRef}
                    onChange={(value) => setFront(value)}
                    value={front}
                    autoFocus={true}
                    onPress={doAFlip}
                />

            </Animated.View>

            <Animated.View style={[styles.hidden, styles.absolute, rotateBack]}>

                <FlipCard
                    title="Back"
                    image={BackImage}
                    inputRef={backRef}
                    onChange={(value) => setBack(value)}
                    value={back}
                    onPress={doAFlip}
                />

            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    hidden: {
        backfaceVisibility: "hidden",
    },
    card: {
        width: 200,
        height: 200,
    },
    absolute: {
        position: "absolute"
    },
    cardItem: {
        width: "100%",
        height: "100%",
    },
});

export { Home };