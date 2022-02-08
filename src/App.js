import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Settings from './Pages/Settings';
import Usage from './Pages/Usage';
import Users from './Pages/Users';
import Home from './Pages/Home';
import Header from './components/Header';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="settings" element={<Settings />}/>
        <Route path="usage" element={<Usage />}/>
        <Route path="users" element={<Users />}/>
        <Route path="details/:userId" element={<Details />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
