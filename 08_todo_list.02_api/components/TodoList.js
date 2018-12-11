class TodoList extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.toggleItem = this.toggleItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  componentDidMount(){
    $.get(this.props.url)
    .then(list => this.setState({list}));
    console.log(this.state.list);
  }
  addItem(text){
    $.ajax({
      method: 'POST',
      url: this.props.url,
      data: {text}
    }).then(list => this.setState({list}));
  }
  toggleItem(id){
    $.ajax({
      method: 'PUT',
      url: this.props.url,
      data: {id}
    }).then(list => this.setState({list}));
  }
  render () {
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem} />
          TodoList
        <ul className="todo-items">
          {
            this.state.list.map((item) => {
              return(
                <TodoItem
                  id={item.id}
                  done = {item.done}
                  key = {item.id}
                  toogleItem = {this.toggleItem}
                  >
                  {item.text}
                </TodoItem>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
