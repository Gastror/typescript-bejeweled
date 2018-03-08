import * as React from 'react';

import Field from '../../components/field';

import { Base } from '../';

export interface IGameProps {
  score: number;
}

export default class Game extends React.Component<IGameProps, any> {
  static defaultProps = {
    score: 0
  };

  handleScoreChange(change: number): number {
    return this.props.score + change;
  }

  render() {
    return (
      <Base>
        <Field onScoreChange={this.handleScoreChange} />
      </Base>
    );
  }
}
