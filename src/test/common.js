import App from '../../App'

// Chai
const chai = require('chai');
const expect = chai.expect;

//Enzyme
const { configure, shallow } = require('enzyme');

//React
const React = require('react');
const ReactDOM = require('react-dom');

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });