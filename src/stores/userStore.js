import {action, thunk} from "easy-peasy";
import axios from "axios";

const userStore = {
   user:{},
   users: [],
   setUsers: action((state, payload) => {
      state.users = payload
   }), 

   getUsers: thunk(async (actions, user) => {
      const {data} = await axios.get(
         `https://api.github.com/search/users?q=${user}`
      );
      console.log(data);
      actions.setUsers(data.items)
   }),
   selectUser: action((state, user) => {
      state.user = user;
   })
};

export default userStore;