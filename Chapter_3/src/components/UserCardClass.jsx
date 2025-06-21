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
    });

    console.log(`${this.props.name} Component Did Mount`);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    // Destructuring
    // const { name, type, age } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    // Updating the state variable
    const handleUserCardBtn = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    console.log(`${this.props.name} Rendered`);

    return (
      <div className="userCard-container w-[300px] h-[400px] border flex flex-col items-center justify-between p-4 rounded-xl">
        <img className="h-30 rounded-full" src={avatar_url} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h1>
          <h2 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Frontend Developer
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Location: {location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Component type: {this.props.type}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Count: {count}
          </p>
        </div>
        <button className="userCard-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleUserCardBtn}>
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserCardClass;
