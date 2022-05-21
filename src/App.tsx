import Navbar from './Navbar';
import Home from './Home';
import { UploadImage } from './pages/UploadImage';
import { SignIn } from './pages/SignIn';
import Dashborad from './pages/dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashborad />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="image/upload" element={<UploadImage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
