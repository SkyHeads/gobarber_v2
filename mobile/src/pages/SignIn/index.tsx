import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/img/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
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
            <Title>Faça seu logon</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />

          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('Deu');
            }}
          >
            Entrar
          </Button>

          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </KeyboardAvoidingView>

      <CreateAccountButton
        activeOpacity={0.8}
        onPress={() => {
          console.log('CreateAccountButton');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
