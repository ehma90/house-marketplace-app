import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar'
import PrivateRoute from './component/PrivateRoute';
import Profile from './pages/Profile'
import Category from './pages/Category';
import Offer from './pages/Offer'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Explore from './pages/Explore'
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/category/:categoryName' element={<Category />}/>
        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/create-listing' element={<CreateListing/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
      <Navbar/>
    </Router>

    <ToastContainer/>
    </>
  );
}

export default App;
