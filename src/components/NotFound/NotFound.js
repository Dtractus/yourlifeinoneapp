// At the top of your NotFound.js file
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">Oops! The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
