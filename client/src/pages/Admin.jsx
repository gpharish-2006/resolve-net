import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Admin() {

  const [complaints, setComplaints] = useState([]);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
    users: 0,
  });


  useEffect(() => {

    fetchComplaints();

  }, []);

  const fetchComplaints = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/complaints"
      );

      setComplaints(response.data);

      calculateStats(response.data);

    } catch (error) {

      console.log("Error fetching complaints", error);

    }

  };


  const calculateStats = (data) => {

    const totalComplaints = data.length;

    const pendingComplaints = data.filter(
      (item) => item.status === "Pending"
    ).length;

    const resolvedComplaints = data.filter(
      (item) => item.status === "Resolved"
    ).length;

    const uniqueUsers = [
      ...new Set(data.map((item) => item.userId)),
    ].length;

    setStats({
      total: totalComplaints,
      pending: pendingComplaints,
      resolved: resolvedComplaints,
      users: uniqueUsers,
    });

  };
  const updateStatus = async (id, newStatus) => {

    try {

      await axios.put(
        `http://localhost:5000/api/complaints/${id}`,
        {
          status: newStatus,
        }
      );

      fetchComplaints();

    } catch (error) {

      console.log("Error updating status", error);

    }

  };


  const deleteComplaint = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/complaints/${id}`
      );

      fetchComplaints();

    } catch (error) {

      console.log("Error deleting complaint", error);

    }

  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",

          background:
            "linear-gradient(to right, #020024, #090979, #000428)",

          paddingTop: "100px",

          color: "white",
        }}
      >

        <div className="container">

          {/* HEADING */}

          <h1
            className="text-center mb-5"
            style={{
              fontWeight: "bold",
            }}
          >
            Admin Dashboard
          </h1>

          {/* STATS */}

          <div className="row g-4 mb-5">

            <div className="col-md-3">

              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(255,255,255,0.08)",

                  backdropFilter: "blur(10px)",
                }}
              >

                <h5>Total Complaints</h5>

                <h2>{stats.total}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(255,255,255,0.08)",
                }}
              >

                <h5>Pending</h5>

                <h2>{stats.pending}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(255,255,255,0.08)",
                }}
              >

                <h5>Resolved</h5>

                <h2>{stats.resolved}</h2>

              </div>

            </div>

            <div className="col-md-3">

              <div
                className="p-4 rounded"
                style={{
                  background: "rgba(255,255,255,0.08)",
                }}
              >

                <h5>Users</h5>

                <h2>{stats.users}</h2>

              </div>

            </div>

          </div>

          {/* TABLE */}

          <div
            className="p-4 rounded"
            style={{
              background: "rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",
            }}
          >

            <h3 className="mb-4">
              Complaint Management
            </h3>

            <div className="table-responsive">

              <table className="table table-dark table-hover align-middle">

                <thead>

                  <tr>

                    <th>ID</th>

                    <th>Title</th>

                    <th>Category</th>

                    <th>Status</th>

                    <th>Date</th>

                    <th>Actions</th>

                  </tr>

                </thead>

                <tbody>

                  {complaints.map((item) => (

                    <tr key={item._id}>

                      <td>{item.complaintId}</td>

                      <td>{item.title}</td>

                      <td>{item.category}</td>

                      <td>

                        <select
                          className="form-select"
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(
                              item._id,
                              e.target.value
                            )
                          }
                        >

                          <option>
                            Pending
                          </option>

                          <option>
                            In Progress
                          </option>

                          <option>
                            Resolved
                          </option>

                        </select>

                      </td>

                      <td>
                        {new Date(
                          item.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteComplaint(item._id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Admin;