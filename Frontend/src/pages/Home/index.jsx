import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Header } from "../../components/header";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketBooks</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Romance" />
        </li>
        <li>
          <ButtonText title="Comedia" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo livro" icon={FiSearch} />
      </Search>

      <Content></Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
