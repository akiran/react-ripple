var React = require('react');
require('./docs.scss');

var RippleDocs = React.createClass({
  render: function () {
    return (
      <div>ripple 11!</div>
    );
  }
});


React.render(<RippleDocs />, document.getElementById('app'));