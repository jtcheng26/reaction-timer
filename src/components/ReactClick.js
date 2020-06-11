import React from 'react';
import BottomBar from './Wait';
import '../reactionApp.css'

class ReactClick extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.startSequence = this.startSequence.bind(this);
    this.stopSequence = this.stopSequence.bind(this);
    this.setRed = this.setRed.bind(this);
    this.setGreen = this.setGreen.bind(this);
    this.setBlack = this.setBlack.bind(this);
    this.red = "#EE1010";
    this.green = "#10EE10";
    this.black = "#242424";
    this.count = 0;
    this.results = [];
    this.state = {color: this.black, showing: true, phrase: "Start", reactTime: ""};
  }
  handleChange() {
    var aColor = this.state.color;
    if (aColor === this.black) {
      this.startSequence();
    } else if (aColor === this.green){
      this.stopSequence();
    } else if (aColor === this.red){
      this.misClick();
      console.log("too early.");
    }
  }
  startSequence() {
    this.setRed();
    if (this.state.reactTime === "" || this.state.reactTime === "done") {
      this.setState({reactTime: "000ms"})
    }
    var delay = (Math.random()*2) + 1;
    console.log("delay: " +delay);
    this.timer = setTimeout(function(){
      this.setGreen();
      var d = new Date();
      this.setState({startTime: d.getTime()});
    }.bind(this), delay * 1000);
  }
  stopSequence() {
    var d = new Date();
    var end = d.getTime();
    var result = end - this.state.startTime;
    this.count++;
    this.results[this.count - 1] = result;
    if (this.count === 6) {
      this.setState({reactTime: "done"});
      this.count = 0;
    } else {
      this.setState({reactTime: result + "ms"});
    }
    this.setBlack();
    console.log("result: " + result);
    console.log("attempt: " + this.count);
  }
  setRed() {
    this.setState({color: this.red, phrase: "Wait"});
  }
  setGreen() {
    this.setState({color: this.green, phrase: "Click"});
  }
  setBlack() {
    this.setState({color: this.black, showing: true, phrase: "Start"});
  }
  misClick() {
    clearTimeout(this.timer);
    this.setState({reactTime: "Too early."});
    this.setBlack();
  }

  render() {
    return(
      <div>
        <div className="reactApp" style={{
          backgroundColor: this.state.color
        }} onClick = {this.handleChange}>
          {this.state.phrase}
        </div>
        <div className="bottombg">
          <BottomBar time={this.state.reactTime} times={this.results} />
        </div>
        <div className="info" id="base">
        <a className="info" id="base" href="https://github.com/jtcheng26">https://github.com/jtcheng26</a>
        </div>
      </div>
    );
  }
}

export default ReactClick;
