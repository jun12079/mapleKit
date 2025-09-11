import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CardLink = ({ to, icon, title, description }) => {
  return (
    <Link to={to} className="text-decoration-none">
      <div className="card border-0 shadow hover-lift">
        <div className="card-body p-4 p-md-5">
          <div className="d-flex align-items-center mb-2">
            <img
              src={icon}
              alt={`${title}_icon`}
              style={{ width: "32px", height: "32px", marginRight: "8px" }}
            />
            <p className="h5 fw-bold mb-1">{title}</p>
          </div>
          <p className="mb-0 text-muted">{description}</p>
        </div>
      </div>
    </Link>
  );
};

CardLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CardLink;
