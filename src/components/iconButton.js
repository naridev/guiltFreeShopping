import React from 'react';

// Components
import { TouchableOpacity, Image } from 'react-native';

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