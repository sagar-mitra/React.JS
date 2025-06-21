import UserCardClass from "./UserCardClass";
import { Component } from "react";


class About extends Component {
  constructor(props) {
    super(props)
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Rendered");
     return (
    <div className="about-container mt-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5">About Page</h1>
      <div className="about-cards flex gap-6">
        <UserCardClass name="First Child" type="Class based" age="23"/>
        <UserCardClass name="Second Child" type="Class based" age="23"/>
      </div>
    </div>
  );
  }
}







// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Page</h1>
//       <div className="about-cards">
//         <UserCard name="Sagar Mitra" type="Functional" />
//         <UserCardClass name="Sagar Mitra" type="Class based" age="23"/>
//       </div>
//     </div>
//   );
// };

export default About;
