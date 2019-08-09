import App from '../../App'

// Chai
const chai = require('chai');
const expect = chai.expect;

//Enzyme
const { configure, shallow } = require('enzyme');

//React
const React = require('react');
// const ReactDOM = require('react-dom');

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });


describe('App component testing', function() {
    it('renders welcome message', function() {
        const wrapper = shallow(<App />);
        const welcome = <h1 className='App-title'>Welcome to React</h1>;
        expect(wrapper.contains(welcome)).to.equal(true);
    });

    it('renders application name', function() {
        const wrapper = shallow(<App />);
        const app_name = <code>src/App.js</code>;
        expect(wrapper.contains(app_name)).to.equal(true);
        expect(wrapper.contains(app_name)).to.equal(true);
    });
});
