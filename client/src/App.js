import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './helper/authRoute';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import EditProfile from './views/EditProfile';

import Header from './components/Header';
import Upload from './views/Upload';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/upload" component={Upload} />
        <ProtectedRoute exact path="/edit-profile" component={EditProfile} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
