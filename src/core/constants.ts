import { px, url } from 'csx';

export namespace BaseConstants {
  export const containerSelector =  '#approot';
}

export namespace StyleConstants {
  export const appSize = px(700);

  export namespace Font {
    export const source = url('https://fonts.googleapis.com/css?family=Syncopate');
    export const family = ' \'Syncopate\', sans-serif ';
    export const size = px(16);
  }
}
