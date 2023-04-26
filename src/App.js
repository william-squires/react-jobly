import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/** Jobly Site
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * App -> {Navigation, RoutesList}
 */
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
