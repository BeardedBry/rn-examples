import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
            <Text style={styles.textFourStyle}>Child #4</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject, // left: 0, top: 0, right: 0, bottom: 0
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'flex-end', //defualt 'stretch'
        flex: 4
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2
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