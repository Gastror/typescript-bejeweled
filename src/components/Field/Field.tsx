import * as React from 'react';

import { IFieldProps, IFieldState } from './Field.d';
import Chip from '../Chip';
import { GameConstants } from '../../core';

export default class Field extends React.Component<IFieldProps, IFieldState> {
  constructor(props: IFieldProps) {
    super(props);

    this.state = {
      chips: []
    };
  }

  initializeChips(): Chip[] {
    return Array(GameConstants.chipSize);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
