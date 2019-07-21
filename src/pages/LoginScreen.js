import React from 'react';

import { Text, View, Image } from 'react-native';

import styled from 'styled-components';

//base images
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';

//components
import PinkButton from '../components/PinkButton';

const Container = styled.View`
    flex:1;
	justify-content: center;
    align-items: center;
`;

const InputSection = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SocialSection = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ButtonSection = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 70;
`;


const LoginScreen = props => {
    return(
        <Container>
            <InputSection>
                <PinkButton
                title={'Sign In'}/>
            </InputSection>

            <SocialSection>
                <Image
                    source={facebook}
                />
                <Image
                    source={twitter}
                />
            </SocialSection>
        </Container>
    )
}

export default LoginScreen;