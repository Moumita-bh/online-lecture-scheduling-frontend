import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";
import InstructorPage from "./pages/InstructorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
