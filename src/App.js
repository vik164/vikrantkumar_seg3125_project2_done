
import NavigationBar from './NavigationBar';
import HomePage from './Home';
import ServicesPage from './Services';
import VehiclesPage from './Vehicles';
import VehiclesPage1 from './Vehicles_1';
import VehiclesPage2 from './Vehicles_2';
import ContactPage from './Contact';
import ReservePage from './Reserve';
import VehiclePage1 from './Vehicle1';
import VehiclePage2 from './Vehicle2';
import VehiclePage3 from './Vehicle3';
import VehiclePage4 from './Vehicle4';
import VehiclePage5 from './Vehicle5';
import VehiclePage6 from './Vehicle6';
import VehiclePage7 from './Vehicle7';
import VehiclePage8 from './Vehicle8';
import VehiclePage9 from './Vehicle9';
import VehiclePage10 from './Vehicle10';
import VehiclePage11 from './Vehicle11';
import VehiclePage12 from './Vehicle12';
import SurveyPage from './Survey';
import FQAPage from './FQA';
import Footer from './Footer';


//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content">
          <Switch>
            <Route path="/Home">
              <HomePage></HomePage>
            </Route>

            <Route path="/Services">
              <ServicesPage></ServicesPage>
            </Route>

            <Route path="/Vehicles">
              <VehiclesPage></VehiclesPage>
            </Route>

            <Route path="/Contact">
              <ContactPage></ContactPage>
            </Route>

            <Route path="/Reserve">
              <ReservePage></ReservePage>
            </Route>

            <Route path="/Vehicles_1">
              <VehiclesPage1></VehiclesPage1>
            </Route>

            <Route path="/Vehicles_2">
              <VehiclesPage2></VehiclesPage2>
            </Route>

            <Route path="/Vehicle1">
              <VehiclePage1></VehiclePage1>
            </Route>

            <Route path="/Vehicle2">
              <VehiclePage2></VehiclePage2>
            </Route>

            <Route path="/Vehicle3">
              <VehiclePage3></VehiclePage3>
            </Route>

            <Route path="/Vehicle4">
              <VehiclePage4></VehiclePage4>
            </Route>

            <Route path="/Vehicle5">
              <VehiclePage5></VehiclePage5>
            </Route>

            <Route path="/Vehicle6">
              <VehiclePage6></VehiclePage6>
            </Route>

            <Route path="/Vehicle7">
              <VehiclePage7></VehiclePage7>
            </Route>

            <Route path="/Vehicle8">
              <VehiclePage8></VehiclePage8>
            </Route>

            <Route path="/Vehicle9">
              <VehiclePage9></VehiclePage9>
            </Route>

            <Route path="/Vehicle10">
              <VehiclePage10></VehiclePage10>
            </Route>

            <Route path="/Vehicle11">
              <VehiclePage11></VehiclePage11>
            </Route>

            <Route path="/Vehicle12">
              <VehiclePage12></VehiclePage12>
            </Route>

            <Route path="/FQA">
              <FQAPage></FQAPage>
            </Route>

            <Route path="/Survey">
              <SurveyPage></SurveyPage>
            </Route>

            <Route path="/">
              <HomePage></HomePage>
            </Route>

          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;