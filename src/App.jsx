import { GlobalStyle } from './styles/globalStyle';
import Router from './components/common/Router';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { useState } from 'react';

function App() {
  const [reviewFlag, setReviewFlag] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router reviewFlag={reviewFlag} setReviewFlag={setReviewFlag} />
      </ThemeProvider>
    </>
  );
}

export default App;
