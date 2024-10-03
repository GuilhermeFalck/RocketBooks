import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .nota {
    display: center;
    justify-content: center;
    align-items: center;

    padding: 0 235px;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const CapaLivro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  margin: 40px 0;
  width: 100%;
  height: 600px;
  padding: 20px; /* Adiciona um padding ao redor do container */

  /* Borda tracejada para o contêiner */
  border: ${({ $imageUrl }) =>
    $imageUrl ? "none" : "1px dashed black"}; /* Borda tracejada por padrão */
  border-radius: 10px;

  > img {
    width: 500px;
    height: 600px;
    margin: 10px; /* Adiciona espaçamento ao redor da imagem */
    display: ${({ $imageUrl }) =>
      $imageUrl ? "block" : "none"}; /* Mostra ou esconde a imagem */
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: ${({ $imageUrl }) =>
      $imageUrl ? "none" : "flex"}; /* Mostra o ícone se não houver imagem */
    align-items: center;
    justify-content: center;

    position: absolute;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
