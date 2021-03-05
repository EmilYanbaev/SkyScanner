import './App.css';

import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import InitializeApp from './Component/InitializeApp';

function App() {

  return (
    <div className="App">
      {/* <Provider> */}
      {/* <HashRouter > */}
      <BrowserRouter>
        <InitializeApp />
      </BrowserRouter>
      {/* </HashRouter> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
