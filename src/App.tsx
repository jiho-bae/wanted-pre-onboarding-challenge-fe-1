import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Router from './components/Router';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
