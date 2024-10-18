import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme{
        colors:{
            background: string,
                black: string,
                white: string,
                borderLeft: string,
                gray: string
        }
    }
}