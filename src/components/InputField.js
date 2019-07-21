import React from 'react'
import { TextInput, Text, View } from 'react-native';

const InputField = ({onChangeText, value, placeholder, secureTextEntry}) => {
    return(
        <View style = {styles.containerStyle}>
            <TextInput
                value = {value}
                onChangeText = {onChangeText}
                style = {styles.inputStyle}
                autocorrect = {false}
                placeholder = {placeholder}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        height: 20,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20, 
        flex: 1
    },
    containerStyle: {
        width: 250,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10
    }
}

export default InputField;