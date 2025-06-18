import React from "react";

class UserCardClass extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className="userCard-container">
        <h1>{this.props.name}</h1>
        <h2>Frontend Developer</h2>
        Qualification: B.Tech in EE
        <p>Age: 23 yrs</p>
        <p>Component type: {this.props.type}</p>
        <p>@dev.sagarr</p>
      </div>
    );
  }
}

export default UserCardClass;