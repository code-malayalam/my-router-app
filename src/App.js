import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Settings from './Pages/Settings';
import Usage from './Pages/Usage';
import Home from './Pages/Home';
import Header from './components/Header';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';
import Marks from './Pages/Marks';
import Sports from './Pages/Sports';
import Remarks from './Pages/Remarks';

const MyUsers = React.lazy(() => import('./Pages/Users'));

function App() {
  return (
    <BrowserRouter basename="my-router-app">
      <div>
        <Header />
      </div>
      <Suspense fallback={<div className="page">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />}/>
          <Route path="usage" element={<Usage />}/>
          <Route path="users">
            <Route index element={<MyUsers />} />
            <Route path=":userId" element={<Details />}>
              <Route index element={<Marks />}/>
              <Route path="sports" element={<Sports />}/>
              <Route path="remarks" element={<Remarks />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
