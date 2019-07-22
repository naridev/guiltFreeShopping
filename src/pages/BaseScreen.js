import React from 'react';

import { Text, View, Image, Animated } from 'react-native';

import styled from 'styled-components';

//base images
import header from '../images/h1.png';

//components
import PinkButton from '../components/PinkButton';
import ImageLoader from '../components/ImageLoader';
import Carousel from '../components/Carousel';

import { withRouter } from 'react-router-native';

const Container = styled.View`
    flex:1;
	justify-content: center;
    align-items: center;
    background-color: #f6f6f6;
`;

const Logo = styled.View`
    height: 200;
    justify-content: flex-end;
    align-items: center;
    paddingBottom: 20;
`;

const BaseSection = styled.View`
    flex: 2;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

const ButtonSection = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 10;
`;

const BaseScreen = props => {
    return(
        <Container>
            <Logo>
                <ImageLoader
                    source={header}
                />
            </Logo>

            <BaseSection>
                <Carousel/>
            </BaseSection>

            <ButtonSection>
                <PinkButton  
                    title={'Start Shopping'}         
                    onPress={()=>{
                    props.history.push('/login');
                    }}
                />
            </ButtonSection>
        </Container>
    )
}

export default withRouter(BaseScreen);