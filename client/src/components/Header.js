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
            {isAuth ? (
              <div className="header-links links">
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={handleLogout} type="button" className="btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="header-auth-links links">
                <Link to="/login">Login</Link>
                <Link className="btn" to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
