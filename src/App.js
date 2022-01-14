import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Cats from "./Components/Cats";
import Login from "./Components/Login";
import CatDetail from "./Components/CatDetail";
import NotFound from "./Components/NotFound";
import { useContext } from "react";
import { userContext } from "./Context/UserProvider";

function App() {
  let { isLogin, setIsLogin } = useContext(userContext);
  console.log(isLogin);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.getItem("isLogin");
    localStorage.setItem("isLogin", false);
  };
  return (
    <Router>
      <div className='d-flex'>
        <Link to='/' className='me-5'>
          Home
        </Link>
        {isLogin ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to='/Login' className='me-5'>
            Login
          </Link>
        )}
      </div>
      <Switch>
        <Route exact path='/'>
          {isLogin ? <Cats /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>{isLogin ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/cat/:namaKucing'>
          <CatDetail />
        </Route>
        <Route path='/:notFound'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
