import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <Provider store={appStore}>
      <TodoApp />
    </Provider>
  );
}

export default App;
