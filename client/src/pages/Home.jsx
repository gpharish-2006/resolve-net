import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="hero-section">

        <div className="hero-content text-center text-light">

          <h1 className="mb-3">
            Citizen Service Management System
          </h1>

          <p className="mb-4">
            Help improve your city by reporting issues instantly.
          </p>

          <div>
            <Link to="/create-complaint" className="btn btn-info text-dark fw-bold me-3 px-4">
              Raise Complaint
            </Link>

            <Link to="/track" className="btn btn-light text-light fw-bold me-3 px-4">
              Track Status
            </Link>
          </div>

        </div>

      </div>

      <footer className="footer">

        <div className="container">

          <div className="row">

            <div className="col-md-4">

              <h4>SmartCity</h4>

              <p>
                Smart city complaint management system
                for reporting and tracking city issues.
              </p>

            </div>

            <div className="col-md-4">

              <h4>Quick Links</h4>

              <p><Link to="/" className="text-light">Home</Link></p>
              <p><Link to="/services" className="text-light">Services</Link></p>
              <p><Link to="/create-complaint" className="text-light">Raise Complaint</Link></p>

            </div>

            <div className="col-md-4">

              <h4>Emergency</h4>

              <p>Police: 100</p>
              <p>Ambulance: 108</p>
              <p>Fire Service: 101</p>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Home;