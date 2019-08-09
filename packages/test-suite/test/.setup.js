// Chai
const chai = require('chai');
global.expect = chai.expect;

//Enzyme
const { configure, shallow } = require('enzyme');
global.shallow = shallow;
global.configure = configure;

//React
const React = require('react');
const ReactDOM = require('react-dom');
global.React = React;
global.ReactDOM = ReactDOM;

//HelperProps
function helperProps(src,target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] == 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(src,prop));
    Object.defineProperties(target,props);
}

//Helpers
global.itRenders = Component => {
    const wrapper = shallow(Component);
    expect(shallow(Component).length).to.equal(true);
    return wrapper;
};

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });