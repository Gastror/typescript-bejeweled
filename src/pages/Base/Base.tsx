import * as React from 'react';
import * as Style from './style';

export interface IBasePageProps {
  children: React.ReactNode;
}

export default class BasePage extends React.Component<IBasePageProps, any> {
  render() {
    return (
      <div className={Style.layout}>
        <section className={Style.mainSection}>
          {this.props.children}
        </section>
      </div>
    );
  }
}
