import { style } from 'typestyle';
import { viewHeight, viewWidth } from 'csx/lib';

import { StyleConstants } from '../../core';
import { gridAreas } from '../../utility/formatters';

const {
  appSize,
  Colours: {
    BackgroundPrimary,
    Foreground
  }
} = StyleConstants;

export const layout = style({
  display: 'grid',
  gridTemplateColumns: `1fr ${appSize} 1fr`,
  gridTemplateRows: `1fr ${appSize} 1fr`,
  gridTemplateAreas: gridAreas(['. . .', '. content .', '. . .']),
  height: viewHeight(100),
  width: viewWidth(100),
  backgroundColor: BackgroundPrimary.toString(),
  color: Foreground.toString()
});

export const mainSection = style({
  gridArea: 'content',
});
