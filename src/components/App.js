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
  const [form, setForm] = useState({ email: "", password: "" });

  function login(e) {
    // faça o login e armazene o token no estado token
    // bootcamper@respondeai.com.br
    // minha_senha_super_hiper_ultra_secreta_banana
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/exercise-login/auth/login";
    const promise = axios.post(URL, form);
    promise.then(res => setToken(res.data.token));
    promise.catch(err => console.log(`login catch: ${err.response.data}`));
  }

  function fetchList() {
    // busque a lista enviando o token no cabeçalho
    // e coloque-a no estado list
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/exercise-login/tasks";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const promise = axios.get(URL, config);
    promise.then(res => setList(res.data));
    promise.catch(err => console.log(`fetchList catch: ${err.response.data}`));
  }

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Page>
      <Title>
        Bootcamper
        <br />
        Shopping List
      </Title>
      <form onSubmit={login}>
        <Input name="email" onChange={handleForm} value={form.email} type="email" placeholder="Digite seu email..." />
        <Input name="password" onChange={handleForm} value={form.password} type="password" placeholder="Digite sua senha..." />
        <Button>Entrar</Button>
      </form>
      {token ? (
        <Button onClick={fetchList}>Buscar lista de compras</Button>
      ) : (
        ""
      )}
      <List>
        {list.map((i) => (
          <Item key={i}>{i}</Item>
        ))}
      </List>
    </Page>
  );
}
