class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: this.props.start
    }
    this.addCount = this.addCount.bind(this);

    //如果要自動加一的話
    setInterval(()=>{
      this.addCount();
    }, 1000);
  }
  addCount(){
    //console.log('+1');
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <div className="count">{this.state.count}</div>
        <button onClick={this.addCount}>+1</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Counter start={0} />
    <Counter start={10}/>
  </div>,
  // 如果要數字或布林值，請用大括號包住，如果要用文字，則用"文字"包住
  document.getElementById('app')
)