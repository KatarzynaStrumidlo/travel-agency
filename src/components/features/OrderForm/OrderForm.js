import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({options, tripCost}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);
OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;
