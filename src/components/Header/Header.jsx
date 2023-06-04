import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//importing actions
import { toggleSidebar } from "../../slices/reducerSlices/uiSlice";
import { logout } from "../../slices/reducerSlices/authSlice";
//icons
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
//components
import Logo from "../Logo";
const Header = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //selectinf states
  const { userInfo } = useSelector((state) => state.auth);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav>
      <div className="nav">
        <div className="nav-center">
          <button type="button" className="toggle-btn" onClick={handleSidebar}>
            <FaAlignLeft />
          </button>
          <div>
            <Logo className="logo" />

            <h3 className="logo-text">dashboard</h3>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="nav-btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {userInfo?.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <button type="button" className="dropdown-btn" onClick={onLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
