import { GlobalStyle } from './styles/globalStyle';
import Router from './components/common/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import AA from './api/get';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        <div>{AA}</div>
      </ThemeProvider>
    </>
  );
}

export default App;
