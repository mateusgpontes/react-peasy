import React from "react";
import { useStore, usaActions } from "easy-peasy";
import { ListaUsuario, ListaImg, ListaAncora } from "./StylesC";

function UserList() {
  const users = useStore(state => {
    return state.user.users;
  });
  console.log(users);

  return (
    <div>
      {users.map((user, index) => (
        <ListaUsuario key={index}>
          <ListaImg
            src={user.avatar_url}
            alt="Avatar"
            width={100}
            height={100}
          />
          <ListaAncora>{user.login}</ListaAncora>
        </ListaUsuario>
      ))}
    </div>
  );
}

export default UserList;
