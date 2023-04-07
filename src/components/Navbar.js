import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
          <Link to="/" className="link logo">
          <div className="logo-flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3824/3824371.png"
              alt="logo"
              style={{ marginRight: "8px", height: "28px", width: "28px" }}
            />
            WebMeet
          </div>
        </Link>
        <div>
          <Link to="/" className="link ">
            All Meetings
          </Link>
          <Link to="/" className="link ">
            My Meetings
          </Link>
          <Link to="/add-meetings" className="link logo">
            Add Meetings
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
