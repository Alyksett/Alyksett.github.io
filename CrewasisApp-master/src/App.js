import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom"
import {
  Container
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import History from "./components/History";
import WeeklyInsights from "./components/WeeklyInsights";
import Billing from "./components/Billing";
import GetStarted from "./components/GetStarted";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";


function App() {
  const user = true;

  return (
    <div>
    <NavBar user={user}/>
    <Container maxWidth="xl">
      <Routes>
        <Route path='/weekly_insights' element={<WeeklyInsights/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/billings' element={<Billing/>} />
        <Route path='/get_started' element={<GetStarted />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/'/>} />
        <Route path='/' element={user ? <Home /> : <Navigate to='login'/>} />
      </Routes>
    </Container> 
    </div>
  );
}

export default App;
