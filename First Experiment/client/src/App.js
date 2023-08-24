
import './App.css';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import SignUp  from './Componets/Private/Authantications/SignUp';
import Login from './Componets/Private/Authantications/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
