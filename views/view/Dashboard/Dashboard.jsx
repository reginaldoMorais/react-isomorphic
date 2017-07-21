var React = require('react');

module.exports = React.createClass({
  _handleClick: function() {
      alert('Hello!!');
  },
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
            <link rel='stylesheet' href='/bundle.css' />
        </head>
        <body>
          <div id="wrapper">
            <h1>Hello World!</h1>
            <h2>{this.props.title}</h2>
            <p>Isn't server-side rendering remarkable?</p>
            <button onClick={this._handleClick}>Click Me</button>
          </div>

          <script dangerouslySetInnerHTML={{
            __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});
