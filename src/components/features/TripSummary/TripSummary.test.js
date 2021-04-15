import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render link to the correct address', () => {
    const expectedLinkId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary
      image='picture.jpg'
      id={expectedLinkId}
      days={2}
      name='picture'
      cost='20'
      tags={[]}
    />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('img has correct src and alt', () => {
    const expectedSrc = 'picture.jpg';
    const expectedAlt = 'picture';
    const component = shallow(<TripSummary
      image={expectedSrc}
      id='abc'
      days={2}
      name={expectedAlt}
      cost='20'
      tags={[]}
    />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props name, cost, days', () => {
    const expectedDays = 2;
    const expectedName = 'name';
    const expectedCost = '20';
    const component = shallow(<TripSummary
      image='picture.jpg'
      id='abc'
      days={expectedDays}
      name={expectedName}
      cost={expectedCost}
      tags={[]}
    />);

    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedCost}`);
  });

  it('should render array with elements in right order', () => {
    const expectedTags = ['nice', 'common', 'unexpected'];
    const component = shallow(<TripSummary
      image='picture.jpg'
      id='abc'
      days={2}
      name='name'
      cost='20'
      tags={expectedTags}
    />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render array if props tags is falsy', () => {
    const component = shallow(<TripSummary
      image='picture.jpg'
      id='abc'
      days={2}
      name='name'
      cost='20'
    />);

    expect(component.find('.tag')).toBe(false);
  });

});