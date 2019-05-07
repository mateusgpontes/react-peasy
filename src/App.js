import React from 'react';
import Home from './components/Home';
import { StoreProvider } from 'easy-peasy';
import store from './stores'

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Home />
      </StoreProvider>
    </div>
  );
}

export default App;
