import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'
import App from '../src/js/App'



describe('(Component) App', () => {
  it('renders...', () => {
	const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });
});