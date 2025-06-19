import { Component } from "react";
import "../CSS/userCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "component did mount");
  }

  render() {
    console.log(this.props.name + "rendered");
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

// const UserCard = ({name, type}) => {
//     return (
//         <div className="userCard-container">
//             <h1>{name}</h1>
//             <h2>Frontend Developer</h2>
//             Qualification: B.Tech in EE
//             <p>Age: 23 yrs</p>
//             <p>Component type: {type}</p>
//             <p>@dev.sagarr</p>
//         </div>
//     )
// }

export default UserCard;
