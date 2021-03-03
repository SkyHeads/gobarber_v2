import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/img/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default SignIn;
