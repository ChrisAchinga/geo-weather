import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getLocation}>
          <p>
            <button>See Weather</button>
          </p>
        </form>
      </div>
    );
  }
}
export default Form;
