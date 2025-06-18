import UserCard from "./UserCard";
import "../CSS/about.css";
import UserCardClass from "./UserCardClass";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Page</h1>
      <div className="about-cards">
        <UserCard name="Sagar Mitra" type="Functional" />
        <UserCardClass name="Sagar Mitra" type="Class based" age="23"/>
      </div>
    </div>
  );
};

export default About;
