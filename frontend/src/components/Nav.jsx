import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            MERN Blog
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            {!token ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/create"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Create Post
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
