import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    subBg: string;
    color: string;
  }
  export interface darkTheme {
    bg: string;
    subBg: string;
    color: string;
  }
  export interface lightTheme {
    bg: string;
    subBg: string;
    color: string;
  }
}
