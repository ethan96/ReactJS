class ChildComponent extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.props.onCallParent(new Date().getTime());
  }
  render() {
    return (
      <div className="child-component">
        <h3>ChildComponent</h3>
        <p>props.count:{this.props.count}</p>
        <button onClick={this.onClick}>call Parent</button>
      </div>
    );
  }
}
