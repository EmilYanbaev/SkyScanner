import './App.css';
import store from './redux/store';
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import InitializeApp from './Component/InitializeApp';

function App() {

  return (
    <div className="App">
      <Provider store = {store}>
      <HashRouter >
      {/* <BrowserRouter> */}
        <InitializeApp />
      {/* </BrowserRouter> */}
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
