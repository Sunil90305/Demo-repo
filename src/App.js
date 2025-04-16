
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import AddStudent from './users/AddStudent'; // Ensure the file name matches the import statement


// Correct the import statement to match the casing of the file name

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/student/add" element={<AddStudent />} />
        </Routes>
      </Router>


    </div>

    
  );
}

export default App;
