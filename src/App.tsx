import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
