import React from 'react';

import { Text, View, Image } from 'react-native';

import styled from 'styled-components';

//base images
import header from '../images/h1.png';
import baseImage from '../images/base.png'
import baseImage2 from '../images/base3.png'

//components
import PinkButton from '../components/PinkButton';

const Container = styled.View`
    flex:1;
	justify-content: center;
    align-items: center;
`;

const Logo = styled.View`
    height: 350;
    justify-content: center;
    align-items: center;
`;

const BaseSection = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 400
`;

const ButtonSection = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 70;
`;


const BaseScreen = props => {
    return(
        <Container>
            <Logo>
                <Image
                    source={header}
                />
            </Logo>
        <BaseSection>
            <Image
                style={{
                    alignSelf: 'center',
                    left: 12,
                }}
                source={baseImage}
            />
            <View
                style={{  
                    alignSelf: 'flex-end',
                    right: 20
                }}
            >
                <Image
                    source={baseImage2}
                />
            </View>
        </BaseSection>

        <ButtonSection>
            <PinkButton/>
        </ButtonSection>

        </Container>
    )
}

export default BaseScreen;