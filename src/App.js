import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage } from "./custom_screens/login"
import { RegistrationPage } from "./custom_screens/registration"
import { SearchPage } from "./custom_screens/search"
import { AddEducationPage } from "./custom_screens/add_education"
import { EditEducationPage } from "./custom_screens/edit_education"
import { ViewEducationPage } from "./custom_screens/view_education"
import { AddJobPage } from "./custom_screens/add_job"
import { EditJobPage } from "./custom_screens/edit_job"
import { ViewJobPage } from "./custom_screens/view_job"
import { AddIncomePage } from "./custom_screens/add_income"
import { EditIncomePage } from "./custom_screens/edit_income"
import { ViewIncomePage } from "./custom_screens/view_income"
import { AddStatePage } from "./custom_screens/add_state"
import { EditStatePage } from "./custom_screens/edit_state"
import { ViewStatePage } from "./custom_screens/view_state"
import { AddDistrictPage } from "./custom_screens/add_district"
import { EditDistrictPage } from "./custom_screens/edit_district"
import { ViewDistrictPage } from "./custom_screens/view_district"
import { AddReligionPage } from "./custom_screens/add_religion"
import { EditReligionPage } from "./custom_screens/edit_religion"
import { ViewReligionPage } from "./custom_screens/view_religion"
import { AddMaritalStatusPage } from "./custom_screens/add_marital_status"
import { EditMaritalStatusPage } from "./custom_screens/edit_marital_status"
import { ViewMaritalStatusPage } from "./custom_screens/view_marital_status"
import { CustomNavbar } from "./custom_screens/custom_nav"

function App() {
  return (
    <Router>
      <div>

        <CustomNavbar />
        <Switch>
          <Route exact path="/">
            <LoginPage />

          </Route>
          <Route path="/login" component={LoginPage}>

          </Route>
          <Route path="/registration" component={RegistrationPage}>

          </Route>
          <Route path="/search" component={SearchPage}>

          </Route>
          <Route path="/add_education" component={AddEducationPage}>

          </Route>
          <Route path="/edit_education" component={EditEducationPage}>

          </Route>
          <Route path="/view_education" component={ViewEducationPage}>

          </Route>
          <Route path="/add_job" component={AddJobPage}>

          </Route>
          <Route path="/edit_job" component={EditJobPage}>

          </Route>
          <Route path="/view_job" component={ViewJobPage}>

          </Route>
          <Route path="/add_income" component={AddIncomePage}>

          </Route>
          <Route path="/edit_income" component={EditIncomePage}>

          </Route>
          <Route path="/view_income" component={ViewIncomePage}>

          </Route>
          <Route path="/add_state" component={AddStatePage}>

          </Route>
          <Route path="/edit_state">
            <EditStatePage />
          </Route>
          <Route path="/view_state" component={ViewStatePage}>

          </Route>
          <Route path="/add_district" component={AddDistrictPage}>

          </Route>
          <Route path="/edit_district" component={EditDistrictPage}>

          </Route>
          <Route path="/view_district" component={ViewDistrictPage}>

          </Route>
          <Route path="/add_religion" component={AddReligionPage}>

          </Route>
          <Route path="/edit_religion" component={EditReligionPage}>

          </Route>
          <Route path="/view_religion" component={ViewReligionPage}>

          </Route>
          <Route path="/add_marital_status" omponent={AddMaritalStatusPage}>

          </Route>
          <Route path="/edit_marital_status" omponent={EditMaritalStatusPage}>

          </Route>
          <Route path="/view_marital_status" omponent={ViewMaritalStatusPage}>

          </Route>




        </Switch>
      </div>
    </Router>

  );
}

export default App;
