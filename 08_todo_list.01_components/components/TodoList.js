class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {id: 1, text: 1, done: false},
        {id: 2, text: 2, done: false},
        {id: 3, text: 3, done: false}
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  addItem(text){
    var item = {
      id: this.state.list.length + 1,
      text: text,
      done: false
    };
    var list = this.state.list.concat(item);
    this.setState({
      list: list
    });
  }
  toggleItem(id){
    var newList = this.state.list.map((item) => {
      if(item.id === id){
        return {
          id: item.id,
          text: item.text,
          done: !item.done
        };
      }
      return item;
    });
    this.setState({
      list: newList
    });
  }
  render () {
    return (
      <div className="todo-list">
        <TodoForm addItem={this.addItem}/>
          TodoList
        <ul className="todo-items">
          {
            this.state.list.map((item) => {
              return(
                <TodoItem
                  id={item.id}
                  done = {item.done}
                  key = {item.id}
                  toggleItem={this.toggleItem} >
                  {item.text}
                </TodoItem>
              )
            })
          }
        </ul>
      </div>
    );
  };
}
