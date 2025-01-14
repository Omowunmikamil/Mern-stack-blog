import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 ERROR!</h1>
      <p>Sorry, the page you are looking for does not exist...</p>
      <p>Are you lost?</p>
      <Link to="/">Go back to the home page</Link>
    </>
  );
};

export default NotFoundPage;
