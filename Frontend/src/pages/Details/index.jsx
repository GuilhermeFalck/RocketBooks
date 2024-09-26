import { Container, Rate, Content, ProgressBar } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

import capaImg from "../../img/Acordo.jpg";

const nota = 10;

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>O Acordo</h1>
          <p>
            O Acordo é o tipo de romance que logo nas primeiras páginas já ganha
            o coração do leitor. Além de uma trama divertida, romântica e
            extremamente reflexiva, a história surpreende por debater temas
            clichês para a literatura new adult– por exemplo, relacionamento de
            conveniência, abuso sexual, agressão física, e os pré-conceitos por
            trás dos grupos estudantis – e torná-los únicos. Sem dúvida, é isso
            que mais amo nesse livro: a maneira como a autora usa pontos de
            reflexão previsíveis para criar um romance cativante, emocionante e
            pra lá de surpreendente. O fato é que lemos muitas histórias com
            essa mesma premissa, mas poucas são tão intensas quanto à escrita
            pela Elle Kennedy. Já é a segunda vez que leio esse livro e a
            sensação de amor é a mesma; não resisti e acabei apaixonada pela
            simplicidade por trás desse romance tão fofo e acolhedor.
          </p>

          <div>
            <img src={capaImg} alt="" />
          </div>

          <Section title="Nota">
            <Rate>
              <li>
                0 <ProgressBar value={nota} /> 10
              </li>
            </Rate>
          </Section>

          <Section title="Gênero">
            <Tag title="Romance" />
            <Tag title="Comédia" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
