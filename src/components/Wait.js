import React from 'react';
import '../reactionApp.css'
import ResultScreen from './ResultScreen'

class BottomBar extends React.Component {
  render() {
    if (this.props.time === "") {
      return(
        <div className="info">
          <h1>Reaction Time Test</h1>
          <p>Click on the screen when it changes to green.</p>
          <p>Click to start.</p>
        </div>
      );
    } else if (this.props.time === "done") {
      return(
        <ResultScreen resultList={this.props.times}/>
      );
    } else {
      return(
        <div className="timer">
          {this.props.time}
        </div>
      );
    }
  }
}

export default BottomBar;
