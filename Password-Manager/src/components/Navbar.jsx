import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const logout = () => {
    localStorage.removeItem(
      "loggedInUser"
    );

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Password Manager</h2>

      <div>
        <Link to="/">Home</Link>

        {user ? (
          <>
            <span className="user-name">
              {user.name}
            </span>

            <button onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

