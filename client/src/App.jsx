import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Pages} from './constants/pages';
import {Components} from './constants/components';

function App() {

  return (
    <div className="App">
      <Components.NavBar />
      <Routes>
          <Route path="/" element={<Pages.Landingpage/>}/>
          {/* <Route path="/login-signup" element={<Pages.LoginSignup/>}/> */}
          <Route path="/login" element={<Pages.Login/>}/>
          <Route path="/signup" element={<Pages.Signup/>}/>
          <Route path="/paymentplan" element={<Pages.Paymentplan/>}/>
          <Route path="/aboutus" element={<Pages.AboutUs/>}/>
          <Route path="/paymentinfo" element={<Pages.PaymentInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
