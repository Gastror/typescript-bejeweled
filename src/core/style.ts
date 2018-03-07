import * as csstips from 'csstips';
// import { style } from 'typestyle';

import { BaseConstants } from "./constants";

export const initializeStyle = () => {
  csstips.normalize();
  csstips.setupPage(BaseConstants.containerSelector);
}
