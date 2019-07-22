import React, { Component } from 'react';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

import { ENTRIES1 } from '../static/Entries';

export default class MyCarousel extends Component {

    _renderItem ({item}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.img}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    render () {
        return (
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth-110}
                itemHeight={screenWidth-40}
                data={ENTRIES1}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth-110,
    height: screenWidth-40,
    // flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
})