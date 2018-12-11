import React, { Component } from 'react';
import zipCodes from '../data/zipCodes';

export default class RegionSelect extends Component {
  state = {
    cityIdx: 0,
    areaIdx: 0,
  }
  onChangeCity = (e) => {
    this.setState({
      cityIdx: e.target.value,
      areaIdx: 0,
    });
  }
  onChangeArea = (e) => {
    this.setState({
      areaIdx: e.target.value,
    });
  }
  getRegion = () => {

  }
  render() {
    const { cityIdx, areaIdx } = this.state;
    const city = zipCodes[cityIdx];
    const area = city.areas[areaIdx];
    return (
      <section>
        <div>
          <label>縣市</label>
          <select value={cityIdx} onChange={this.onChangeCity}>
            {zipCodes.map(({ name }, idx) =>
              <option value={idx} key={name}>{name}</option>)}
          </select>
        </div>
        <div>
          <label>地區</label>
          <select value={areaIdx} onChange={this.onChangeArea}>
            {city.areas.map(({ name }, idx) =>
              <option value={idx} key={name}>{name}</option>)}
          </select>
        </div>
        <div>
          <label>zip</label>
          <input type="text" readOnly value={area.zip} />
        </div>
      </section>
    );
  }
}
