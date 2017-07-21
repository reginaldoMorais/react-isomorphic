const React = require('react');
const ReactDOM = require('react-dom');
const Dashboard = require('../views/view/Dashboard/Dashboard.jsx');

const props = window.PROPS;

ReactDOM.render(
    React.createElement(Dashboard, props), document
);
