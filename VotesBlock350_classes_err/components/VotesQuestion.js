import React from 'react';

require('./VotesQuestion.css');

class VotesQuestion extends React.Component {

  static propTypes = {
    question: React.PropTypes.string.isRequired,
  };
  
  render() {
    return React.DOM.div( {className:'VotesQuestion'}, this.props.question );
  }

}

export default VotesQuestion;
