import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Books</h1>
        <p>Aplicação para avaliação de livros.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">Criar Conta</a>
      </Form>

      <Background />
    </Container>
  );
}
