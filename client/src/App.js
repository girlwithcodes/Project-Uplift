import logo from './logo.svg';
import { Router } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
