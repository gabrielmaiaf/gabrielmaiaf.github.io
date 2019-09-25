import React from 'react';

// Components
import Header from '../Header';
import Footer from '../Footer';

// Assets
// @ts-ignore
import Style from './style.scss';

interface Props {
  children: any;
}

const LayoutWrapper = (props: Props) => (
  <div className={Style.layoutWrapper}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default LayoutWrapper;