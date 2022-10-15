import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile'
import Offer from './pages/Offer'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Explore from './pages/Explore'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/profile' element={<SignIn/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
    {/* Navbar */}
    </>
  );
}

export default App;
