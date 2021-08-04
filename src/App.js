import './App.css';
import Header from './components/layouts/Header';
import Home from './components/Home';
import FormElements from './components/FormElements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import General from './components/General';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Listgroup from './components/layouts/Listgroup';
import Typography from './components/layouts/Typography';
import Accordions from './components/Accordions';
import Charts from './components/Charts';
import ChartCharts from './components/ChartCharts';
import ChartChartist from './components/ChartChartist';
import Pricing from './components/Pricing';
import Sortable from './components/layouts/Sortable';
import Widgets from './components/layouts/Widgets';
import Media from './components/layouts/media';
import FontAwesome from './components/FontAwesome';
import Means from './components/Means';
import Lineicon from './Lineicon';
import Themify from './components/Themify';
import Flag from './components/layouts/Flag';
import Weather from './components/layouts/Weather';

function App() {
  return (
    <Router>
      < Header />
      <Switch>
      <Route path="/weather">
      <Weather />
      </Route>

      <Route path="/flag">
      <Flag />
      </Route>

      <Route path="/themify">
      <Themify />
      </Route>
      <Route path="/lineicon">
      <Lineicon />
      </Route>

      <Route path="/means">
      <Means />
      </Route>

      <Route path="/fontAwesome">
      <FontAwesome />
      </Route>

      <Route path="/media">
      <Media />
      </Route>

      <Route path="/widgets">
      <Widgets />
      </Route>

      <Route path="/sortable">
      <Sortable />
        </Route>

      <Route path="/pricing">
      <Pricing />
        </Route>

      <Route path="/chart-chartist">
      <ChartChartist />
        </Route>

      <Route path="/chart-charts">
      <ChartCharts />
        </Route>


      <Route path="/chart-c3">
      <Charts />
        </Route>

      <Route path="/accordions">
      <Accordions />
        </Route>


      <Route path="/typography">
      <Typography />
        </Route>

      <Route path="/listgroup">
      <Listgroup />
        </Route>
      <Route path="/carousel">
      <Carousel />
        </Route>
      <Route path="/general">
          <General />
        </Route>
        <Route path="/cards">
        <Cards />
        </Route>
        <Route path="/form-elements">
          <FormElements />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
