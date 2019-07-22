import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styled from 'styled-components';

const Title = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16;
`;

const Button = styled.TouchableOpacity`
    background-color: #FF9FCE;
    padding-left: 16;
    padding-right: 16;
    font-size: 16;
    border-radius: 5;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Container = styled.View`
    width: 250;
    height: 50;
`;

const PinkButton = ({title, onPress}) => {
    return(
        <Container>
            <Button
                onPress={onPress}>
                <Title>
                    {title.toUpperCase()}
                </Title>
            </Button>
        </Container>
    );

}

export default PinkButton;