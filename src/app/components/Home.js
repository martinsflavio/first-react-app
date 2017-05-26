import React from "react";

export class Home extends React.Component {
  constructor (props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0
    };
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age + 3
    });
  }

  render() {

    return (
        <div>
          <div>
            <p>User name : {this.props.name}</p>
            <p>User age  : {this.state.age}</p>
            <hr/>
            <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
          </div>
        </div>
    );
  }
}



Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
};