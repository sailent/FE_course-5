/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.isCounting === true && !this.timer) {
      this.timer = setInterval(
        () => this.setState((prevState) => ({ count: prevState.count + 1 })),
        1000,
      );
    }
    if (this.state.isCounting === false && this.timer) {
      clearInterval(this.timer);
      this.timer = false;
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  handleStart = () => {
    this.setState({ isCounting: true });
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.timer);
    this.timer = false;
  };

  handleReset = () => {
    this.setState({ count: 0 });
    this.setState({ isCounting: false });
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
        <hr />
      </div>
    );
  }
}
