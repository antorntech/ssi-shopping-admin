import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageTitle = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean); // Get current path segments

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <li
        key={segment}
        className={`breadcrumb-item ${isLast ? "active" : ""}`}
        aria-current={isLast ? "page" : undefined}
      >
        {isLast ? (
          segment.charAt(0).toUpperCase() + segment.slice(1)
        ) : (
          <Link to={path}>
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </Link>
        )}
      </li>
    );
  });

  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0 font-size-18">{title}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {breadcrumbs}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
