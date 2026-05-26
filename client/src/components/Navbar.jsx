import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  let role = null;

  if (token) {
    try {

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      role = payload.role;

    } catch (err) {

      console.log(err);

    }
  }

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

    window.location.reload();

  };

  return (

    <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">

      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/">
          ResolveNet
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav ms-auto align-items-center gap-3">

            <Link to="/" className="nav-link text-light">
              Home
            </Link>

            <Link to="/services" className="nav-link text-light">
              Services
            </Link>

            {
              token && (
                <>

                  <Link
                    to="/complaints"
                    className="nav-link text-light"
                  >
                    Complaints
                  </Link>

                  <Link
                    to="/track"
                    className="nav-link text-light"
                  >
                    Track
                  </Link>

                  <Link
                    to="/profile"
                    className="nav-link text-light"
                  >
                    Profile
                  </Link>
                </>
              )
            }

            {
              role === "admin" && (
                <Link
                  to="/admin"
                  className="nav-link text-warning fw-bold"
                >
                  Admin
                </Link>
              )
            }

            {
              token ? (
                <button
                  className="btn btn-danger px-4"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="login-btn"
                >
                  Sign In / Sign Up
                </Link>
              )
            }

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;