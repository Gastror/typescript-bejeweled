import { px, url, color } from 'csx';

export namespace BaseConstants {
  export const containerSelector =  '#approot';
}

export namespace StyleConstants {
  export const appSize = px(700);

  export namespace Colours {
    export const BackgroundPrimary = color('#282a36');
    export const BackgroundSecondary = color('#44475a');
    export const BackgroundTertiary = color('#666666');
    export const Foreground	= color('#f8f8f2');
    export const Cyan	= color('#8be9fd');
    export const Green	= color('#50fa7b');
    export const Orange = color('#ffb86c');
    export const Pink = color('#ff79c6');
    export const Purple = color('#bd93f9');
    export const Red = color('#ff5555');
    export const Yellow = color('#f1fa8c');
    export const Sandstone = color('#cfcfc2');
  }

  export namespace Font {
    export const source = url('https://fonts.googleapis.com/css?family=Syncopate');
    export const family = ' \'Syncopate\', sans-serif ';
    export const size = px(16);
  }
}
