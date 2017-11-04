var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  render: function(){

    var answersCode=this.props.info.answers.map( v =>
        React.DOM.div({key:v.code,className:'Answer'},
          React.DOM.span({className:'Count'},v.count),
          React.DOM.span({className:'Text'},v.text),
        )
      );
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.props.info.question ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});