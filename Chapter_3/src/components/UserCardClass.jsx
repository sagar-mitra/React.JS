import React from "react";

class UserCardClass extends React.Component {
  constructor(props) {
    super(props);

    // Creating state variables
    this.state = {
      count: 0, // First state variable
      userInfo: {
        // Second state variable
        name: "default-name",
        location: "default-location",
      },
    };

    console.log(`${this.props.name} Constructed`);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sagar-mitra"); // made a API call
    const json = await data.json();
    this.setState({
      userInfo: json,
    })

    console.log(`${this.props.name} Component Did Mount`);
  }

  render() {
    // Destructuring
    // const { name, type, age } = this.props;
    const { count} = this.state;
    const{name, location} = this.state.userInfo

    // Updating the state variable
    const handleUserCardBtn = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    console.log(`${this.props.name} Rendered`);

    return (
      <div className="userCard-container">
        <h1>{name}</h1>
        <h2>Frontend Developer</h2>
        Qualification: B.Tech in EE
        <p>Location: {location}</p>
        <p>Component type: {this.props.type}</p>
        <p>Count: {count}</p>
        <button className="userCard-button" onClick={handleUserCardBtn}>
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserCardClass;
