import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "this is message",
    };
  }

  render() {
    const { stalin } = this.props;
    const testFunctin = () => {
      this.setState({ message: "changed" });
    };
    return (
      <div>
        <div onClick={testFunctin}>hello hai</div>
        <div>{this.state.message}</div>
        <div>{stalin}</div>
      </div>
    );
  }
}

export default Test;
