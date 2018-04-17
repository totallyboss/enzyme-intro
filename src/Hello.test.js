import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

describe('<Hello />', () => {

  it('renders name give', () => {
    const hello = shallow(<Hello name="Jake" />);
    expect(hello.find('p').text()).toEqual('Hello, Jake!');
  });

  it('used "unknown" is name is not defined', () => {
    const component = shallow(<Hello />);
    expect(component.find('p').text()).toEqual('Hello, unknown!');
  });

});