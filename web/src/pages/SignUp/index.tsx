import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu Cadastro</h1>

          <Input
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Nome Completo"
          />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="text"
            placeholder="Senha"
          />

          <Button>Cadastrar</Button>
        </form>

        <a href="/#">
          <FiArrowLeft />
          Faça Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
