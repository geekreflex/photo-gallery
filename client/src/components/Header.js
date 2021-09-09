import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userSlice';

const Header = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <div className="inner-header">
        <div className="header-left">
          <div className="logo-wrap">
            <Link to="/">
              <h3>Photo Gallery</h3>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <div className="header-links-wrap">
            <div className="links">
              <Link to="/explore">Explore</Link>
              {isAuth ? (
                <div className="auth-links">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/upload">Upload</Link>
                  <button onClick={handleLogout} type="button" className="btn">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="auth-links">
                  <Link to="/login">Login</Link>
                  <Link className="btn" to="/register">
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
