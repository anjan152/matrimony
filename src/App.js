import logo from './logo.svg';
import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom";
import  {LoginPage} from "./custom_screens/login"
import  {RegistrationPage} from "./custom_screens/registration"
import  {SearchPage} from "./custom_screens/search"
import  {CustomNavbar} from "./custom_screens/custom_nav"

function App() {
  return (
<Router>
  <div>
  
 <CustomNavbar/>
    <Switch>
      <Route exact path="/">
        <LoginPage />
        
      </Route>
      <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        
    </Switch>
    </div>
</Router>

  );
}

export default App;
