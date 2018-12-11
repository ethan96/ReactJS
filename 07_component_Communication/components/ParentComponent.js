class ParentComponent extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
      count: 0,
      date: ''
    }
    this.onCallParent = this.onCallParent.bind(this);
  }  
  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return{
          count: this.state.count + 1
        }
      });
      this.setState((state) => 
        ({count: this.state.count + 1}))
    }, 1000);
  }
  componetWillUnmount(){
    clearInterval(this.intervalId);
  }
  onCallParent(date){
    this.setState({
      date: date
    })
    console.log('onCallParent', date);
  }
  render () {
    //var {count, date} = this.state;
    return (
      <div className="parent-component">
        <h1>ParentComponent</h1>
        <p>state.count:{this.state.count}</p>
        <p>state.date:{this.state.date}</p>
        <ChildComponent count={this.state.count} onCallParent={this.onCallParent}/>
      </div>
    );
  };
}
