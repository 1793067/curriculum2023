import './styles/App.css';
import { Header, Nav, Content } from './components/';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='wrapper'>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
