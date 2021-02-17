import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
  it('renders input component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("search-bar"));
  });
});

describe('<App />', () => {
  it('renders current weather', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("location-container"));
  });
});

describe('<App />', () => {
  it('renders forecast weather', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("forecastWeatherBox"));
  });
});

