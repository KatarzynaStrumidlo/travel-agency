import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render', () => {
    const component = shallow(<OrderOption type='someType' name='someName'/>);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  /*it('should render correct title', () => {
    const component = shallow(<OrderOption />);
  });*/
});
