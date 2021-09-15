import './App.css';
import { ApolloProvider } from '@apollo/client';
import { useApolloClient } from './plugins/use-apollo-client';
import DemoWater from './demo/demo-water';
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  const client = useApolloClient();
  return (
    <ApolloProvider client={client}>
      <DemoWater />
    </ApolloProvider>
  );
}

export default App;
