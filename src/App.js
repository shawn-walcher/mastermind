import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Main from './Main';
import Win from './Win';
function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        MasterMind
      </header>
      <main>
        <Switch>
        <Route exact path='/win' component={Win} />
        <Route exact path='/' component={Main} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}

export default App;
