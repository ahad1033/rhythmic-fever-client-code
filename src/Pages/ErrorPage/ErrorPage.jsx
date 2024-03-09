import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700 mb-6">
          Oops! Something went wrong. Please try again later.
        </p>
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
