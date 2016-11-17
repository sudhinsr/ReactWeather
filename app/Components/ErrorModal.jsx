var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return{
      title: 'Error'
    }
  },
  componentDidMount: function (){
    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open();
  },
  render: function () {
    return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal>
          <h4>Some Title</h4>
          <p>Error Message</p>
          <button className="button hollow" data-close>
            Oky
          </button>
        </div>
    );
  }
});

module.exports = ErrorModal;
