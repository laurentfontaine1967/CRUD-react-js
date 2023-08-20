import "./App.css";
import React from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ListStudent from "./Component/ListStudent";
import AddStudent from "./Component/AddStudent";
import EditStudent from "./Component/EditStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-student" element={<ListStudent />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="edit-student:id/" element={<EditStudent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
