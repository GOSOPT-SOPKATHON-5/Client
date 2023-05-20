import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
#modal, #root, body, html {
    width:100%;
    height: 100vh;
    margin: 0 auto;

    font-family: 'Pretendard-Regular';
}
html {
    font-size: 62.5%;
}
* {
    box-sizing: border-box;
}`;
