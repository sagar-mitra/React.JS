import React from "react";

class UserCardClass extends React.Component {
  constructor(props) {
    super(props);

    // Creating state variables
    this.state = {
      count: 0, // First state variable
      count2: 2, // Second state variable
    };
  }
  render() {
    // Destructuring
    const { name, type, age } = this.props;
    const { count, count2 } = this.state;

    // Updating the state variable
    const handleUserCardBtn = () => {
      this.setState({
        count: this.state.count + 1,
      })
    }

    return (
      <div className="userCard-container">
        <h1>{name}</h1>
        <h2>Frontend Developer</h2>
        Qualification: B.Tech in EE
        <p>Age: {age} yrs</p>
        <p>Component type: {type}</p>
        <p>Count: {count}</p>
        <button className="userCard-button" onClick={handleUserCardBtn}>
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserCardClass;
