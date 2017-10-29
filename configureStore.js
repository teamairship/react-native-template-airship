import { createStore } from "redux";
import App from "./app/reducers";

export default function configureStore() {
  let store = createStore(App);
  return store;
}
