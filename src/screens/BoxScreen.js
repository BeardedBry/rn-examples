import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle} />
            <View style={styles.textTwoStyle} />
            <View style={styles.textThreeStyle} />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        right: 0,
        left: 0,
        height: 150,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    textOneStyle: {
        height: 75,
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'red',
    },
    textTwoStyle: {
        height: 75,
        flex: 1,
        marginTop: 75,
        marginRight: 50,
        marginLeft: 50,
        borderWidth: 1,
        backgroundColor: 'green'
    },
    textThreeStyle: {
        height: 75,
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'purple',
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