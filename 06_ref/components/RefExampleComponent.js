class RefExampleComponent extends React.Component {
  constructor(props){
    super(props);
    this.onToggleBox1 = this.onToggleBox1.bind(this);
    this.onToggleBox2 = this.onToggleBox2.bind(this);
    this.refBoxHandler = this.refBoxHandler.bind(this);
  }
  onToggleBox1(){
    var box1 = this.refs.box1;
    //console.log(box1);
    TweenMax.to(box1, 2, {x:200});
  }
  onToggleBox2(){
    TweenMax.from(this.box2, 2, {x: 200});
  }
  refBoxHandler(dom){
    this.box2 = dom;
  }
  render () {
    return (
      <div className="ref-example-component">
        <section>
          <div>
            <div className="box box--1" ref="box1"></div>
            <button onClick={this.onToggleBox1}>Toggle box1</button>
          </div>
        </section>
        <section>
          <div>
            <div className="box box--2" ref={this.refBoxHandler}></div>
            <button onClick={this.onToggleBox2}>Toggle box2</button>
          </div>
        </section>
      </div>
    );
  };
}
