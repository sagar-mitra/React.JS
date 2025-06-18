import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="notfound-container">
      <h1>
        {error.status}: {error.statusText}
      </h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default ErrorPage;
