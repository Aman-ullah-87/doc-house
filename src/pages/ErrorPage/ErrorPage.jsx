import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-28">
      <h1 className="font-source font-bold text-center text-black text-6xl ">
        Sorry,
      </h1>
      <p>This page is not found.</p>
      <img src="/src/assets/error.png" alt="" className="text-center" />
      <Link>
        <button className="bg-main text-white px-6 py-2 rounded-lg">Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
