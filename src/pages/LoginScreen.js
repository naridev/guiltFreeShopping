import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';

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
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50;
`;

const ImgWrapper = styled.View`
    height: 70;
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
                    style={{alignSelf:'flex-start'}}
                />
            </BackSection>

            <InputSection>
                <InputField
                    placeholder='Email'
                />
                <View style={{flexDirection: 'row'}}>
                <InputField
                    placeholder='Password'
                />
                <TouchableOpacity style={{
                    position: 'absolute',
                    left: '50%',
                    marginTop: 15 
                }}>
                    <Text style={{color: '#808080'}}>Forgot?</Text>
                </TouchableOpacity>
                </View>
                <PinkButton
                    title={'Sign In'}
                />
                <ImgWrapper>
                    <Image
                        source={facebook}
                    />
                </ImgWrapper>
                <Image
                    source={twitter}
                />
            </InputSection>

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