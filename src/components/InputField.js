import React from 'react'
import { TextInput, View } from 'react-native';

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
                placeholderTextColor="#515151"
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        height: 20,
        paddingRight: 5,
        paddingLeft: 12,
        fontSize: 14,
        lineHeight: 23,
        flex: 2,
        fontWeight: '500'
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