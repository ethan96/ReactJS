/* eslint no-unused-vars:0 */
import React from 'react';

import Password from './components/Password';
// import FormExample from './components/FormExample';
import RegionSelect from './components/RegionSelect';
// import FilterList from './components/FilterList';
// import FilterListWithColor from './components/FilterListWithColor';
// import InfiniteScroll from './components/InfiniteScroll';
// import ImageSlider from './components/ImageSlider';

// import items from './data/repos.json';
// import imgs from './data/streamers.json';

import './app.css';

function App() {
  return (
    <div className="app">
      {/* <Password /> */}
      {/* <FormExample /> */}
      <RegionSelect />
      {/* <FilterList items={items} /> */}
      {/* <FilterListWithColor items={items} /> */}
      {/* <InfiniteScroll url="./mockAPI.txt" /> */}
      {/* <ImageSlider imgs={imgs} /> */}
    </div>
  );
}


export default App;
