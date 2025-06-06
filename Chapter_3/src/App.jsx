import "./App.css";
import resList from "./resList";

function App() {
  

  console.log(resList[0].data.name);

  // Header
  const Header = () => {
    return <h1>This is Header</h1>;
  };

  // Restaurant Card
  const RestaurantCard = ({ resData }) => {
    const { name, cuisines, cloudinaryImageId, slaString } = resData?.data;
    return (
      <div className="restaurant-card">
        <img
          src={
            `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` 
          
          }
          alt={name}
          className="restaurant-image"
        />
        <div className="restaurant-details">
          <h2 className="restaurant-name">{name}</h2>
          <p className="restaurant-cuisines">
            {cuisines.join(", ")}
          </p>
          <p className="restaurant-time">{slaString}</p>
        </div>
      </div>
    );
  };

  // Body
  const Body = () => {
    return (
      <div className="bodyRestCards">
        {resList.map((restData) => {
          return <RestaurantCard resData={restData} />;
        })}
      </div>
    );
  };

  // Footer
  const Footer = () => {
    return <h1>This is Footer</h1>;
  };

  const AppLayout = () => {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  };

  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
