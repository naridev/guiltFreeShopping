import React from 'react';

import { Text, View, Image } from 'react-native';

import styled from 'styled-components';

//images
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import back from '../images/back.png';
import group from '../images/group.png';
import layerCopy from '../images/layerCopy2.png';

//components
import PinkButton from '../components/PinkButton';
import InputField from '../components/InputField';
import IconButton from '../components/IconButton';

import { withRouter } from 'react-router-native';


const Container = styled.View`
    flex:1;
    background-color: #F1F1F1;
`;

const InputSection = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SocialSection = styled.View`
    justify-content: center;
    flex-direction: column;
`;

const BackSection = styled.View`
    padding-top: 50;
    padding-left: 10;
    justify-content: flex-start;
`;

const BackImage = styled.Image`
    position: absolute;
    top: 20%;
    left: 50%;
`;


const LoginScreen = props => {
    return(
        <Container>
            <BackSection>
                <IconButton 
                    image={back}
                    onPress={()=>{
                    props.history.push('/base');
                    }}
                    style={{alignSelf:'flex-start',justifyContent: 'flex-start'}}
                />
            </BackSection>

            <InputSection>
                <InputField
                    placeholder='label1'
                />
                <InputField
                    placeholder='label2'
                />
                <PinkButton
                    title={'Sign In'}
                />
            </InputSection>

            <SocialSection>
                <Image
                    source={facebook}
                />
                <Image
                    source={twitter}
                />
            </SocialSection>

            <BackImage
            source={group}
            style={{zIndex:-1}}
            />
            <BackImage
            source={layerCopy}
            style={{zIndex:-2, left:'40%', top: '15%'}}
            />
        </Container>
    )
}

export default withRouter(LoginScreen);