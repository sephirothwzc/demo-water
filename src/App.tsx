import './App.css';
import { ApolloProvider } from '@apollo/client';
import { useApolloClient } from './plugins/use-apollo-client';
import DemoWater from './demo/demo-water';
import WaterList from 'demo/water-list';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/item" component={DemoWater} />
          <Route path="/list" component={WaterList} />
          <Redirect to="/list" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
