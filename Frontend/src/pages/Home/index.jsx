import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

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

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "O acordo",
              tags: [
                { id: "1", name: "Romance" },
                { id: "2", name: "Comedia" },
              ],
            }}
          />
          <Note
            data={{
              title: "O acordo",
              tags: [
                { id: "1", name: "Romance" },
                { id: "2", name: "Comedia" },
              ],
            }}
          />
          <Note
            data={{
              title: "O acordo",
              tags: [
                { id: "1", name: "Romance" },
                { id: "2", name: "Comedia" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
