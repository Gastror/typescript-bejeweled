import { style } from 'typestyle';
import { viewHeight, viewWidth, rgb } from 'csx/lib';

import { StyleConstants } from '../../core';
import { gridAreas } from '../../utility/formatters';

const { appSize } = StyleConstants;

export const layout = style({
  display: 'grid',
  gridTemplateColumns: `1fr ${appSize} 1fr`,
  gridTemplateRows: `1fr ${appSize} 1fr`,
  gridTemplateAreas: gridAreas(['. . .', '. content .', '. . .']),
  height: viewHeight(100),
  width: viewWidth(100)
});

export const mainSection = style({
  gridArea: 'content',
  background: rgb(255, 0, 0).toString()
});
