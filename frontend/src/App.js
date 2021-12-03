import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import TaskPage from './pages/TaskPage';
import EventPage from './pages/EventPage';
import TaskDetails from './pages/TaskDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<LogIn/>} />
        <Route exact path="/taskpage" element={<TaskPage/>} />
        <Route exact path="/taskdetails" element={<TaskDetails/>} />
        <Route exact path="/eventpage" element={<EventPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
