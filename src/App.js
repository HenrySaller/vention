import { h, Component } from 'preact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './styles/global';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:path" component={NoMatch}/>
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
