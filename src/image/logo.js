import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      style={{ height: 30 }}
      resizeMode="contain"
      source={require('../image/logo.png')}
    />
  );
};

export default Logo;