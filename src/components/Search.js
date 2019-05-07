import React, { useState } from "react";
import { Form } from "./StylesC";
import { useActions } from "easy-peasy";

function Search() {
  const [text, setText] = useState("");
  const getUsers = useActions(actions => {
    return actions.user.getUsers;
  });
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <div className="form-group">
        <label>Buscar Usuários github</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className="form-control"
          id="user"
          placeholder="digite aqui o nome do usuário"
        />
      </div>
      <button
        onClick={() => {
          getUsers(text);
          setText("");
        }}
      >
        Buscar
      </button>
    </Form>
  );
}

export default Search;
