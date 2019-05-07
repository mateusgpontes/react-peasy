import { createStore } from "easy-peasy";
import UserStore from "./userStore";

const store = createStore({
  user: UserStore
});

export default store;
