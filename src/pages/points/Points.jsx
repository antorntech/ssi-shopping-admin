import React, { useEffect, useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";

const Points = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetchPoints();
  }, []);

  const fetchPoints = () => {
    // Fetch data from API (Mocked data)
    setPoints([
      { id: 1, email: "tYjJH@example.com", point: 10 },
      { id: 2, email: "pXKQa@example.com", point: 20 },
    ]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this gift?")) {
      // Implement delete logic here
      setPoints(points.filter((gift) => gift.id !== id));
    }
  };
  return (
    <>
      <PageTitle title="Points" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Point List</h4>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {points.length > 0 ? (
                      points.map((item, index) => (
                        <tr key={index}>
                          <td>{item.email}</td>
                          <td>{item.point}</td>
                          <td>
                            <button
                              className="btn border border-secondary btn-sm"
                              onClick={() => handleDelete(item.id)}
                            >
                              <i className="fa fa-trash"></i> Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">
                          No gifts added yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Points;
