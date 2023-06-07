import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Notes from "./pages/Notes";
import AddNotes from "./pages/AddNotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/note" element={<Note />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/addNotes" element={<AddNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
