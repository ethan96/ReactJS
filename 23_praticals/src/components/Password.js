import React, { Component } from 'react';

export default class Password extends Component {
  state = {
    strength: '',
    value: '',
    showPassword: false,
  }
  onInputChange = (e) => {
    const { value } = e.target;
    const strength = this.calcStrength(value);
    this.setState({
      strength,
      value,
    });
  }
  onCheckboxChange = (e) => {
    this.setState({
      showPassword: e.target.checked,
    });
  }
  calcStrength = (value) => {
    let score = value.length;

    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    if (score > 20) return 'Perfect';
    if (score > 10) return 'Perfect';
    return 'Weak';
  }
  render() {
    const { strength, value, showPassword } = this.state;
    const type = showPassword ? 'text' : 'password';
    return (
      <section>
        <h2>Password</h2>
        <input
          type={type}
          value={value}
          onChange={this.onInputChange}
        />
        <p>{strength}</p>
        <label>
          <input type="checkbox" onChange={this.onCheckboxChange} />顯示密碼
        </label>
      </section>
    );
  }
}
