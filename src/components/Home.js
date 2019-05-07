import React from "react";
import Search from "./Search";
import UserList from "./UserList";

function Home() {
  return (
    <div>
      <Search />
      <hr />
      <UserList />
    </div>
  );
}

export default Home;
