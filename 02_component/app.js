class MyComponent extends React.Component{
  render(){
    return (
      <div className="my-component">
        這是一個組件
      </div>
    )
  }
}
ReactDOM.render(
  <MyComponent />,
  document.getElementById('app')
);