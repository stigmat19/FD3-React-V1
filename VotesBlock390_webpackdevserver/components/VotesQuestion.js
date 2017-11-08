import React from 'react';
import PropTypes from 'prop-types';

require('./VotesQuestion.css');

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  render() {
    return <div className='VotesQuestion'>{this.props.question}</div>;
  }

}

export default VotesQuestion;
