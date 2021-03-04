import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/img/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Crie sua conta</Title>
          </View>

          <Input name="name" icon="user" placeholder="Nome" />

          <Input name="email" icon="mail" placeholder="E-mail" />

          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('Deu');
            }}
          >
            Criar conta
          </Button>
        </Container>
      </KeyboardAvoidingView>

      <BackToSignIn
        activeOpacity={0.8}
        onPress={() => {
          console.log('BackToSignIn');
        }}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Voltar para Logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
