import React from 'react';
import '../reactionApp.css';

class Result extends React.Component {
  render() {
    if (this.props.best === this.props.index) {
      return(
        <div className="timer" style={{
          borderColor: "#10EE10"
        }}> {this.props.resultList[this.props.index]}ms
        </div>
      )
    } else if (this.props.worst === this.props.index) {
      return(
        <div className="timer" style={{
          borderColor: "#EE1010"
        }}> {this.props.resultList[this.props.index]}ms
        </div>
      )
    } else {
      return(
        <div className="timer">
          {this.props.resultList[this.props.index]}ms
        </div>
      );
    }
  }
}

export default Result;
