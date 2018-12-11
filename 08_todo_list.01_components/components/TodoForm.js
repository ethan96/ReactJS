class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputRef = this.inputRef.bind(this);
    this.inputRef1 = this.inputRef1.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    var text = this.input.value;
    this.input.value = '';
    console.log('Text: ' + text);

    var text1 = this.input1.value;
    this.input1.value = '';
    var m = parseInt(text) + parseInt(text1);
    //this.props.addItem(text);
    this.props.addItem(m);
  }
  inputRef(input){
    this.input = input;
    console.log('Ref: ' + input);
  }
  inputRef1(input){
    this.input1 = input;
    console.log('Ref: ' + input);
  }
  render() {
    return (
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.inputRef1}/>
        <button type="submit" style={{display:'none'}}>button</button>
      </form>
    );
  }
}
