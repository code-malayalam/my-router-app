import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings";
import Usage from "./Pages/Usage";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Details from "./Pages/Details";
import NotFound from "./Pages/NotFound";
import Marks from "./Pages/Marks";
import Sports from "./Pages/Sports";
import Remarks from "./Pages/Remarks";
import Login from "./Pages/Login";
import Users from "./Pages/Users";

function App() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="usage" element={<Usage />} />
                <Route path="users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<Details />}>
                    <Route index element={<Marks />} />
                    <Route path="sports" element={<Sports />} />
                    <Route path="remarks" element={<Remarks />} />
                </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
