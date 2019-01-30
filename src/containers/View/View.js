import React, { Fragment } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import { Route } from 'react-router-dom';

export default () => {
  return (
    <Fragment>
      <Route path='/recent' component={Carousel} />
    </Fragment>)
}