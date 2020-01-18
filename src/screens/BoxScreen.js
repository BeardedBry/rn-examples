import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        left: 0,
        right: 0,
        height: 150
    },
    textOneStyle: {
        alignSelf: 'flex-start',
        height: 75,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'red',
    },
    textTwoStyle: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        height: 75,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'green'
    },
    textThreeStyle: {
        position: 'absolute',
        right: 0,
        height: 75,
        width: 100,
        borderWidth: 1,
        backgroundColor: 'purple'
    },
    textFourStyle: {
        position: 'absolute', // absolute ignores siblings, but positions relative to parent with some flex-box properties
        bottom: 0,
        right: 0,
        borderWidth: 3,
        borderColor: 'red',
        flex: 2
    }
})

export default BoxScreen;