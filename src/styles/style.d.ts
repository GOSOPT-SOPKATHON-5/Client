import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      test_blue: string;
    };
    fonts: {
      test_h1: SerializedStyles;
    };
  }
}
