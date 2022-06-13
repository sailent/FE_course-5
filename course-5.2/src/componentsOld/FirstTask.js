/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default class MinMax extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curCount: this.props.MinMax.min };
  }

  decrement = () => {
    if (this.state.curCount > this.props.MinMax.min) {
      this.setState((prevState) => ({
        curCount: Number(prevState.curCount) - 1,
      }));
    }
  };

  increment = () => {
    if (this.state.curCount < this.props.MinMax.max) {
      this.setState((prevState) => ({
        curCount: Number(prevState.curCount) + 1,
      }));
    }
  };

  setMin = (event) => {
    this.props.MinMax.min = event.target.value;
    if (this.state.curCount < this.props.MinMax.min) {
      this.setState(() => ({ curCount: this.props.MinMax.min }));
    }
  };

  setMax = (event) => {
    this.props.MinMax.max = event.target.value;
    if (this.state.curCount > this.props.MinMax.max) {
      this.setState(() => ({ curCount: this.props.MinMax.max }));
    }
  };

  changeCurCount = (event) => {
    // eslint-disable-next-line no-param-reassign
    event.target.value = event.target.value.replace(/[^\d.]/g, '');
    this.setState(() => ({ curCount: event.target.value }));
    if (event.target.value < this.props.MinMax.min) {
      this.setState(() => ({ curCount: this.props.MinMax.min }));
    }
    if (event.target.value > this.props.MinMax.max) {
      this.setState(() => ({ curCount: this.props.MinMax.max }));
    }
  };

  render() {
    return (
      <div>
        <hr />
        <input type="number" onChange={(event) => this.setMin(event)} />
        :min
        <input type="number" onChange={(event) => this.setMax(event)} />
        :max
        <button type="button" onClick={this.decrement}>
          Жми -
        </button>
        <input
          type="text"
          value={this.state.curCount}
          onChange={this.changeCurCount}
        />
        <button type="button" onClick={(event) => this.increment(event)}>
          Жми +
        </button>
        <hr />
      </div>
    );
  }
}
