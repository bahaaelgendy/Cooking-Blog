import { Outlet } from 'react-router-dom';
import './App.css';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <div>
      <MainNavbar />
      <Outlet/>
    </div>
  );
}

export default App;
