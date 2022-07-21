//VIKRANT KUMAR - 300189654

import NavigationBar from './NavigationBar';
import HomePage from './Home';
import NavigationBarFr from './NavigationBarFr';
import HomePageFr from './HomeFr';
import ServicesPage from './Services';
import ServicesPageFr from './ServicesFr';
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
import NotFoundPage from './NotFound';
import SurveyPage from './Survey';
import FQAPage from './FQA';
import FQAPageFr from './FQAFr';
import Footer from './Footer';
import FooterFr from './FooterFr';


//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/Home">
              <NavigationBar></NavigationBar>
              <HomePage></HomePage>
              <Footer></Footer>
            </Route>

            <Route path="/HomeFr">
              <NavigationBarFr></NavigationBarFr>
              <HomePageFr></HomePageFr>
              <FooterFr></FooterFr>
            </Route>

            <Route path="/Services">
              <NavigationBar></NavigationBar>
              <ServicesPage></ServicesPage>
              <Footer></Footer>
            </Route>

            <Route path="/ServicesFr">
              <NavigationBarFr></NavigationBarFr>
              <ServicesPageFr></ServicesPageFr>
              <FooterFr></FooterFr>
            </Route>

            <Route path="/Vehicles">
              <NavigationBar></NavigationBar>
              <VehiclesPage></VehiclesPage>
              <Footer></Footer>
            </Route>

            <Route path="/Contact">
              <NavigationBar></NavigationBar>
              <ContactPage></ContactPage>
              <Footer></Footer>
            </Route>

            <Route path="/Reserve">
              <NavigationBar></NavigationBar> 
              <ReservePage></ReservePage>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicles_1">
              <NavigationBar></NavigationBar> 
              <VehiclesPage1></VehiclesPage1>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicles_2">
             <NavigationBar></NavigationBar>
              <VehiclesPage2></VehiclesPage2>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle1">
              <NavigationBar></NavigationBar>
              <VehiclePage1></VehiclePage1>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle2">
              <NavigationBar></NavigationBar>
              <VehiclePage2></VehiclePage2>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle3">
              <NavigationBar></NavigationBar>
              <VehiclePage3></VehiclePage3>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle4">
            <NavigationBar></NavigationBar>
              <VehiclePage4></VehiclePage4>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle5">
            <NavigationBar></NavigationBar>
              <VehiclePage5></VehiclePage5>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle6">
            <NavigationBar></NavigationBar>
              <VehiclePage6></VehiclePage6>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle7">
            <NavigationBar></NavigationBar>
              <VehiclePage7></VehiclePage7>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle8">
            <NavigationBar></NavigationBar>
              <VehiclePage8></VehiclePage8>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle9">
            <NavigationBar></NavigationBar>
              <VehiclePage9></VehiclePage9>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle10">
            <NavigationBar></NavigationBar>
              <VehiclePage10></VehiclePage10>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle11">
            <NavigationBar></NavigationBar>
              <VehiclePage11></VehiclePage11>
              <Footer></Footer>
            </Route>

            <Route path="/Vehicle12">
            <NavigationBar></NavigationBar>
              <VehiclePage12></VehiclePage12>
              <Footer></Footer>
            </Route>

            <Route path="/FQA">
            <NavigationBar></NavigationBar>
              <FQAPage></FQAPage>
              <Footer></Footer>
            </Route>

            <Route path="/FQAFr">
              <NavigationBarFr></NavigationBarFr>
              <FQAPageFr></FQAPageFr>
              <FooterFr></FooterFr>
            </Route>

            <Route path="/Survey">
            <NavigationBar></NavigationBar>
              <SurveyPage></SurveyPage>
              <Footer></Footer>
            </Route>

            <Route path="/">
              <NotFoundPage></NotFoundPage>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;