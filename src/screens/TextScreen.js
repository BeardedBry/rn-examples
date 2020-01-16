import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () =>{

    const [pass, setPass] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={pass}
                onChangeText={(input)=>{
                    return setPass(input);
                }}
            />
            {pass.length < 5 && pass.length > 0 ? <Text>Error, password must be atleast 5 characters</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;