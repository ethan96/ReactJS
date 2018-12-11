class Agent extends React.Component{
  render(){
    return(
      <div className="agent">
        <img className="img" src={this.props.img}/>
        <div className="name">{this.props.name}</div>
        <div className="quote">{this.props.children}</div>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <h1>我們的客服</h1>
    <Agent img='http://fakeimg.pl/200x80/?text=milkmidi' name='Judy'>Milkmidi 您好!</Agent>
    <Agent img='http://fakeimg.pl/200x80/?text=scars' name='John'>Sacrs 您好!</Agent>
  </div>,
   document.getElementById('app')
);