import React, { Component } from "react";
import "./text.css";
export class Test extends Component {
  state = {
    count: 0,
    tags: [
      {
        text: "tag1",
        id: 1,
      },
      {
        text: "tag2",
        id: 2,
      },
    ],

    //     imageURL: "https://picsum.photos/200",
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.testFunction()}</span>
        <button className="btn btn-success btn-sm">Increment</button>
        <ul style={{ color: "white" }}>
          {this.state.tags.map((tag) => (
            <li key={tag.id}>{tag.text}</li>
          ))}
        </ul>
      </div>
    );
  }
  testFunction() {
    const { count } = this.state;
    return count === 0 ? <h3>Zero</h3> : <h3>{count}</h3>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
