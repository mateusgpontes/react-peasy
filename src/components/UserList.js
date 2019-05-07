import React from "react";
import { useStore, usaActions } from "easy-peasy";

function UserList() {
  const users = useStore(state => {
    return state.user.users;
  });
  console.log(users);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.avatar_url} alt="Avatar" width={100} height={100} />
          <a>{user.login}</a>
        </div>
      ))}
    </div>
  );
}

export default UserList;
