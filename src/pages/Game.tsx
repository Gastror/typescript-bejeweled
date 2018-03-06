import * as React from 'react';
import Base from './Base';

export interface IGameProps {
}

export default class Game extends React.Component<IGameProps, any> {
  render() {
    return (
      <Base>
        <div>
          Game content
        </div>
      </Base>
    );
  }
}
