class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: ['學會 JS', '學會 React', '投遞履歷', '年薪百萬']
    };
    this.addList = this.addList.bind(this);
  }
  addList(){
    // this.setState({
    //   list: this.state.list.push(this.children)
    // });
    console.log(this.state);
  }
  render(){
    return(
      <ol className="list">
      {
        // this.state.list.map(function(text){
        //   return <li>{text}</li>;
        // })
        this.state.list.map((text)=> <li onClick={this.addList}>{text}</li>)
      }
      </ol>
    )
  }
}
ReactDOM.render(
  <List />,
  document.getElementById('app')
)