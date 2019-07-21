import React from 'react';

// Components
import { TouchableOpacity, Image } from 'react-native';

/*

  Props
  onPress: sets function called when icon button is pressed
  image: path to image, sets icon image

*/

const IconButton = ({image, onPress}) => {
  return(
    <TouchableOpacity
      style={{
        padding: 12
      }}
      onPress={onPress}
    >
      <Image
        source={image}
      />
    </TouchableOpacity>
  )
}

export default IconButton;