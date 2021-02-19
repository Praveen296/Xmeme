import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import CreateMeme from './components/create-meme';
import MemesList from './components/memes-list';
import SearchMeme from './components/search-meme';

//Default component and Parent of all the components.
//Router routes to all different components.
function App() {
  return (
    <div>
      <div>
        <Router>
          <div className = 'container'>
            <NavBar />
            <br />
            <Route path = '/' exact component = {MemesList} />
            <Route path = '/create' component = {CreateMeme} />
            <Route path = '/search' component = {SearchMeme} />
          </div>

          
        </Router>
      </div>
    </div>
  );
}

export default App;
