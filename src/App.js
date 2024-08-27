import logo from './logo.svg';
import './App.css';
import { Main } from './component/res/main';
import { Layout } from './component/Layout';
import { Profile } from './component/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Layout />
      <Main />
      <Profile />
    </div>
  );
}

export default App;
