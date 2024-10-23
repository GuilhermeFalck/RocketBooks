import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

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
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Novo Gênero"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
