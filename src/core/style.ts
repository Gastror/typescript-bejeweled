import * as csstips from 'csstips';
import { cssRule, cssRaw } from 'typestyle';

import { BaseConstants, StyleConstants } from './constants';

export const initializeStyle = () => {
  cssRaw(`@import ${StyleConstants.Font.source};`);
  csstips.normalize();
  csstips.setupPage(BaseConstants.containerSelector);

  cssRule('html, body', {
    fontFamily: StyleConstants.Font.family,
    fontSize: StyleConstants.Font.size
  });
};
