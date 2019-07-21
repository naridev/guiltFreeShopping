import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

// import { MonoText } from '../components/StyledText';


// // Images
// import header from '.../assets/images/h1.png';
// import baseImage from '.../assets/images/base.png'
// import baseImage2 from '.../assets/images/base3.png'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View
          style = {styles.logo}
        >
          <Image
            style={{
              // height: 320,
              // width: 320,
              marginBottom: 10,
              marginTop: 100
            }}
            source={header}
            // resizeMode="contain"
          />
        </View>

        <View
          style = {styles.baseImages}
        >
          <Image
            style={{
              position: 'relative'
            }}
            source={baseImage}
            // resizeMode="contain"
          />
          <Image
            style={{
              // height: 290,
              // width: 40,
              // marginBottom: 100
              position: 'relative'
            }}
            source={baseImage2}
            // resizeMode="contain"
          />
        </View>
        
        <View style={styles.container}>
          </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseImages: {
    flex:1,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },

});
