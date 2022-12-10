import { useState } from "react";
import axios from "axios";

import Button from "./Button";
import Input from "./Input";
import Item from "./Item";
import List from "./List";
import Page from "./Page";
import Title from "./Title";

export default function App() {
  const [list, setList] = useState([]);
  const [token, setToken] = useState("");

  function login() {
    // faça o login e armazene o token no estado token
  }

  function fetchList() {
    // busque a lista enviando o token no cabeçalho
    // e coloque-a no estado list
  }

  return (
    <Page>
      <Title>
        Bootcamper
        <br />
        Shopping List
      </Title>
      <Input type="text" placeholder="Digite seu email..." />
      <Input type="text" placeholder="Digite sua senha..." />
      <Button onClick={login}>Entrar</Button>
      {token ? (
        <Button onClick={fetchList}>Buscar lista de compras</Button>
      ) : (
        ""
      )}
      <List>
        {list.map((i) => (
          <Item>{i}</Item>
        ))}
      </List>
    </Page>
  );
}
