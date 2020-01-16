import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


// This is an example of using 'useReducer' in a situation where useState is more appropriate.
// It is just for practice / comparison.


// reducer functions take in two objects, and always returns state.
const reducer = (state, action) => {
    // state === {count: number}
    // action === {type: 'increase' || 'decrease', payload: 1 || -1}
    
    // usually done with a switch statement for many different action.type's
    if (action.type === 'increase'){
        return {...state, count: state.count + action.payload}; // Never change state directly, we pass it a new object that also overwrites the 'count' property.
    } else if (action.type === 'decrease') {
        return {...state, count: state.count - action.payload};
    } else {
        return state;
    }
}

const CounterScreenWithReducer = () =>{

    // first argument is our reducer function. the next is the inital state.
    // think of dipatch as 'callMyReducer'
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={ () => {
                return dispatch({type: 'increase', payload: 1}); // the object passed into dispatch is what we named 'action' in our reducer function.
            }}/>
            <Button title="Decrease" onPress={()=>{
                return dispatch({type: 'decrease', payload: 1});
            }}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default CounterScreenWithReducer;