import React from 'react';
import '../reactionApp.css'
import Result from './Result';

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    var worst = 0;
    var best = 0;
    for (var i=0; i<this.props.resultList.length; i++) {
      if (this.props.resultList[i] > this.props.resultList[worst]) {
        worst = i;
      } else if (this.props.resultList[i] < this.props.resultList[best]) {
        best = i;
      }
    }
    this.worst = worst;
    this.best = best;
  }
  render() {
    var results = []; var average = 0;
    for (var i = 0; i < 6; i++) {
        results.push(<Result worst={this.worst} best={this.best} resultList={this.props.resultList} index={i} />);
        average += this.props.resultList[i];
    }
    average /= 6;
    average = Math.round(average);
    return(
      <div className="info">
        <h1>Results</h1>
        {results}
        <p>Average: {average}ms</p>
      </div>
    );
  }
}

export default ResultScreen;
