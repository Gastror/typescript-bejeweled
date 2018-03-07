import * as React from 'react';

export interface IBasePageProps {
  children: React.ReactNode;
}

export default class BasePage extends React.Component<IBasePageProps, any> {
  render() {
    // console.log(styles);
    return this.props.children;
  }
}
