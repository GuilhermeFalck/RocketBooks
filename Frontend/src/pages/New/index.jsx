import { Link } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form, CapaLivro } from "./styles";
import { LiaBookSolid } from "react-icons/lia";

import capa from "../../img/Acordo.jpg"; // Imagem importada localmente

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          {/* Passamos a prop `$imageUrl` para o componente */}
          <CapaLivro $imageUrl={capa}>
            <img src={capa} alt="Foto do Livro" />
            <label htmlFor="avatar">
              <LiaBookSolid />
              <input id="avatar" type="file" />
            </label>
          </CapaLivro>

          <Section title="Nota">
            <div className="nota">
              <Input placeholder="Nota" min="0" max="10" type="number" />
            </div>
          </Section>

          <Section title="Gêneros">
            <div className="tags">
              <NoteItem value="Romance" />
              <NoteItem isNew placeholder="Novo Gênero" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
